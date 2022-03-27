// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./DeedRepository.sol";

contract AuctionRepository {
    // 모든 actions의 배열
    Auction[] public auctions;

    // action 인덱스에서 사용자 bid로 매핑
    mapping(uint256 => Bid[]) public auctionBids;

    // owner에서 owner의 acuton으로 매핑
    mapping(address => uint[]) public auctionOwner;

    // Bid 구조체
    struct Bid {
        address payable from;
        uint256 amount;
    }

    // Action 구조체
    struct Auction {
        string name;
        uint256 blockDeadline;
        uint256 startPrice;
        string metadata;
        uint256 deedId;
        address deedRepositoryAddress;
        address payable owner;
        bool active;
        bool finalized;
    }

    /**
    * @dev 경매의 소유자 확인
    * @param _auctionId 확인하려는 소유자
    */
    modifier isOwner(uint _auctionId) {
        require(auctions[_auctionId].owner == msg.sender);
        _;
    }

    /**
    * @dev 증서/토큰 소유자 확인
    * @param _deedRepositoryAddress 확인하려는 소유자
    * @param _deedId 증서 저장소에 등록된 증서 ID
    */
    modifier contractIsDeedOwner(address _deedRepositoryAddress, uint256 _deedId) {
        address deedOwner = DeedRepository(_deedRepositoryAddress).ownerOf(_deedId);
        require(deedOwner == address(this));
        _;
    }

    /**
    * @dev 직접 지불 허용하지 않음
    */
    fallback () external {
        revert();
    }

    /**
    * @dev 경매의 길이를 가져옴
    * @return uint 경매횟수
    */
    function getCount() public view returns(uint) {
        return auctions.length;
    }

    /**
    * @dev 입찰의 길이를 가져옴
    * @return uint 입찰횟수
    */
    function getBidsCount(uint _auctionId) public view returns(uint) {
        return auctionBids[_auctionId].length;
    }

    /**
    * @dev 소유한 경매를 가져옴
    * @param _owner 경매 소유자 주소
    */
    function getAuctionsOf(address _owner) public view returns(uint[] memory) {
        uint[] memory ownedAuctions = auctionOwner[_owner];
        return ownedAuctions;
    }

    /**
    * @dev 현재 입찰을 가져옴
    * @param _auctionId 경매 소유자
    * @return amount 입찰자 주소
    */
    function getCurrentBid(uint _auctionId) public view returns(uint256, address) {
        uint bidsLength = auctionBids[_auctionId].length;
        // 입찰이 있으면 지난 입찰 환불
        if( bidsLength > 0 ) {
            Bid memory lastBid = auctionBids[_auctionId][bidsLength - 1];
            return (lastBid.amount, lastBid.from);
        }
        return (uint256(0), address(0));
    }

   /**
    * @dev 주소가 소유한 총 경매 수를 가져옴
    * @param _owner 소유자 주소
    * @return uint 경매 총 수
    */
    function getAuctionsCountOfOwner(address _owner) public view returns(uint) {
        return auctionOwner[_owner].length;
    }

    /**
    * @dev 구조체에 저장된 지정된 경매의 정보 가져옴
    * @param _auctionId 경매 ID
    */
    function getAuctionById(uint _auctionId) public view returns(
        string memory name,
        uint256 blockDeadline,
        uint256 startPrice,
        string memory metadata,
        uint256 deedId,
        address deedRepositoryAddress,
        address owner,
        bool active,
        bool finalized) {

        Auction memory auc = auctions[_auctionId];
        return (
            auc.name, 
            auc.blockDeadline, 
            auc.startPrice, 
            auc.metadata, 
            auc.deedId, 
            auc.deedRepositoryAddress, 
            auc.owner, 
            auc.active, 
            auc.finalized
        );
    }

    /**
    * @dev 지정된 정보를 사용하여 경매 생성
    * @param _deedRepositoryAddress 증서 저장소 주소
    * @param _deedId 증서 아이디
    * @param _auctionTitle 경매 타이틀
    * @param _metadata 경매 메타데이터
    * @param _startPrice 경매 시작가
    * @param _blockDeadline 경매 만료 시간
    * @return bool 경매 생성 여부
    */
    function createAuction(address _deedRepositoryAddress, uint256 _deedId, string memory _auctionTitle, string memory _metadata, uint256 _startPrice, uint _blockDeadline) public contractIsDeedOwner(_deedRepositoryAddress, _deedId) returns(bool) {
        uint auctionId = auctions.length;
        Auction memory newAuction;
        newAuction.name = _auctionTitle;
        newAuction.blockDeadline = _blockDeadline;
        newAuction.startPrice = _startPrice;
        newAuction.metadata = _metadata;
        newAuction.deedId = _deedId;
        newAuction.deedRepositoryAddress = _deedRepositoryAddress;
        newAuction.owner = payable(msg.sender);
        newAuction.active = true;
        newAuction.finalized = false;
        
        auctions.push(newAuction);        
        auctionOwner[msg.sender].push(auctionId);
        
        emit AuctionCreated(msg.sender, auctionId);
        return true;
    }

    function approveAndTransfer(address _from, address _to, address _deedRepositoryAddress, uint256 _deedId) internal returns(bool) {
        DeedRepository remoteContract = DeedRepository(_deedRepositoryAddress);
        remoteContract.approve(_to, _deedId);
        remoteContract.transferFrom(_from, _to, _deedId);
        return true;
    }

    /**
    * @dev 소유자가 진행 중인 경매를 취소하고 증서를 경매 소유자에게 이전하고 입찰자에게 최초 금액을 환불합니다.
    * @param _auctionId 생성된 경매 ID
    */
    function cancelAuction(uint _auctionId) public isOwner(_auctionId) {
        Auction memory myAuction = auctions[_auctionId];
        uint bidsLength = auctionBids[_auctionId].length;

        // 입찰이 있으면 입찰 환불
        if( bidsLength > 0 ) {
            Bid memory lastBid = auctionBids[_auctionId][bidsLength - 1];
            if(!lastBid.from.send(lastBid.amount)) {
                revert();
            }
        }

        // 계약을 승인하여 경매 소유자에게 양도
        if(approveAndTransfer(address(this), myAuction.owner, myAuction.deedRepositoryAddress, myAuction.deedId)){
            auctions[_auctionId].active = false;
            emit AuctionCanceled(msg.sender, _auctionId);
        }
    }

    /**
    * @dev 종료된 경매를 완료, 적어도 한 번의 입찰이 있어야함
    * @dev 성공 시 증서는 입찰자에게 양도되고 경매 소유자는 금액을 받음
    * @param _auctionId 생성된 경매의 ID
    */
    function finalizeAuction(uint _auctionId) public {
        Auction memory myAuction = auctions[_auctionId];
        uint bidsLength = auctionBids[_auctionId].length;

        // 1. 경매가 끝나지 않으며 되돌리기
        if( block.timestamp < myAuction.blockDeadline ) revert();
        
        // 입찰이 없을 경우 취소
        if(bidsLength == 0) {
            cancelAuction(_auctionId);
        }else{

            // 2. 경매 주인에게 환불
            Bid memory lastBid = auctionBids[_auctionId][bidsLength - 1];
            if(!myAuction.owner.send(lastBid.amount)) {
                revert();
            }

            // 계약에서 입찰 낙찰자에게 승인하여 양도
            if(approveAndTransfer(address(this), lastBid.from, myAuction.deedRepositoryAddress, myAuction.deedId)){
                auctions[_auctionId].active = false;
                auctions[_auctionId].finalized = true;
                emit AuctionFinalized(msg.sender, _auctionId);
            }
        }
    }

    /**
    * @dev 입찰자가 경매에 입찰
    * @dev 경매는 활성화되어 있고 종료되면 안됨
    * @dev 새로운 입찰이 유효하고 입찰이 이루어진 경우 이전 입찰자에게 환불
    * @param _auctionId 생성된 경매ID
    */
    function bidOnAuction(uint _auctionId) external payable {
        uint256 ethAmountSent = msg.value;

        // 소유자는 입찰 불가
        Auction memory myAuction = auctions[_auctionId];
        if(myAuction.owner == msg.sender) revert();

        // 경매가 만료된 경우
        if( block.timestamp > myAuction.blockDeadline ) revert();

        uint bidsLength = auctionBids[_auctionId].length;
        uint256 tempAmount = myAuction.startPrice;
        Bid memory lastBid;

        // 이전 입찰이 있는 경우
        if( bidsLength > 0 ) {
            lastBid = auctionBids[_auctionId][bidsLength - 1];
            tempAmount = lastBid.amount;
        }

        // 이전 수량보다 큰지 확인
        if( ethAmountSent < tempAmount ) revert(); 

        // 입찰자 환불
        if( bidsLength > 0 ) {
            if(!lastBid.from.send(lastBid.amount)) {
                revert();
            }  
        }

        // 입찰
        Bid memory newBid;
        newBid.from = payable(msg.sender);
        newBid.amount = ethAmountSent;
        auctionBids[_auctionId].push(newBid);
        emit BidSuccess(msg.sender, _auctionId);
    }

    event BidSuccess(address _from, uint _auctionId);

    // 경매 생성시 이벤트 트리거
    event AuctionCreated(address _owner, uint _auctionId);

    // 경매 취소시 이벤트 트리거
    event AuctionCanceled(address _owner, uint _auctionId);

    // 경매 만료시 이벤트 트리거
    event AuctionFinalized(address _owner, uint _auctionId);
}