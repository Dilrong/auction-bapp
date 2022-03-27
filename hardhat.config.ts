import "dotenv/config";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "hardhat-deploy";

import { HardhatUserConfig } from 'hardhat/types';

const accounts: string[] = (process.env.PRIVATE_KEY) ? [process.env.PRIVATE_KEY,] : [];
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    hardhat: {
      accounts: { count: 30, accountsBalance: "100000000000000000000000" },
    },
    cypress: {
      url: process.env.CYPRESS_URL,
      httpHeaders: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.ACCESS_KEY_ID + ":" + process.env.SECRET_ACCESS_KEY
          ).toString("base64"),
        "x-chain-id": "8217",
      },
      accounts: accounts,
      chainId: 8217,
      gas: 8500000,
    },
    baobab: {
      url: process.env.BAOBAB_URL,
      httpHeaders: {
        Authorization:
          "Basic " +
          Buffer.from(
            process.env.ACCESS_KEY_ID + ":" + process.env.SECRET_ACCESS_KEY
          ).toString("base64"),
        "x-chain-id": "1001",
      },
      accounts: accounts,
      chainId: 1001,
      gas: 8500000,
    },
  },
  mocha: {
    timeout: 100000,
  },
};

export default config;
