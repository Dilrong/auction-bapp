// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

/**
* @title ERC721 증서 저장소
*/
contract DeedRepository is ERC721URIStorage {
    /**
    * @dev name과 symbol이 있는 DeedRepository를 생성
    * @param _name 저장소 이름
    * @param _symbol 저장소 상징
    */
    constructor(string memory _name, string memory _symbol)
        public ERC721(_name, _symbol) {}

    /**
    * @dev 새로운 증서를 등록하기 위한 public함수로 ERC721 minter를 호출
    * @param _tokenId 구체적인 증서를 나타내기 위한 부호 없는 정수
    * @param _uri 메타데이터/uri를 포함하는 문자열
    */
    function registerDeed(uint256 _tokenId, string memory _uri) public {
        _mint(msg.sender, _tokenId);
        addDeedMetadata(_tokenId, _uri);
        emit DeedRegistered(msg.sender, _tokenId);
    }

    /**
    * @dev 증서에 메타데이터를 추가하는 방법
    * @param _tokenId 구체적인 증서를 나타내기 위한 부호 없는 정수
    * @param _uri 주어진 증서의 특징을 설명하는 텍스트
    * @return 저장소에 증서 메타데이터가 추가되었는지 여부 반환
    */
    function addDeedMetadata(uint256 _tokenId, string memory _uri) public returns (bool) {
        _setTokenURI(_tokenId, _uri);
        return true;
    }
    
    /**
    * @dev 증서/토큰이 등록되면 이벤트가 트리거
    * @param _by 등록자의 주소
    * @param _tokenId 구체적인 증서를 나타내기 위한 부호 없는 정수
    */
    event DeedRegistered(address _by, uint256 _tokenId);
}