# Auction Bapp

본 프로젝트는 마스터링 이더리움의 경매 댑 예제를 클레이튼 그리고 skynode를 사용하여 구현한 예제입니다.

## Get Started

### env

```
HARDHAT_NETWORK
ACCESS_KEY_ID
PRIVATE_KEY
DEPLOYER
CYPRESS_URL
BAOBAB_URL
```

### deploy contract

```
npx hardhat compile
npx hardhat run scripts/deploy.ts
```

## 주요 구성요소

- ERC721 대체 불가능한 증서 토큰을 구현하는 스마트 컨트랙트(DeedRepository)
- 증서를 팔기 위해 경매를 구현하는 스마트 컨트랙트(AuctionRepository)
- 자바스크립트 프레임워크를 사용하는 웹 프론트 엔드(skynode)
- 클레이튼 체인에 연결하는 caver.js 라이브러리
- 이미지 같은 자원을 저장하는 스웜 클라이언트
- 모든 참여자를 위해 경매별 대화방을 개설하기 위한 위스퍼 클라이언트

## 참고 라이브러리

### 백엔드(스마트 컨트랙트)

- [hardhat](https://hardhat.org/)
- [openzeppelin-contract](https://github.com/OpenZeppelin/openzeppelin-contracts)

### 프론트엔드(skynode)

- skynode
