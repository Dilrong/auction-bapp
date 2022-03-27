import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import { getNamedAccounts, config } from 'hardhat';
import { HttpNetworkUserConfig } from "hardhat/src/types/config";
import Caver from 'caver-js'

async function main() {
  const { deployer } = await getNamedAccounts();

  console.log("Deploying contracts with the account:", deployer);

  const network = config.networks[process.env.HARDHAT_NETWORK as string] as HttpNetworkUserConfig;

  const caver = new Caver(new Caver.providers.HttpProvider(network.url!, {
    headers: [
      { name: 'Authorization', value: 'Basic ' + Buffer.from(process.env.ACCESS_KEY_ID + ':' + process.env.SECRET_ACCESS_KEY).toString('base64') },
      { name: 'x-chain-id', value: network.chainId!.toString() }
    ]
  }));

  caver.klay.accounts.wallet.add(caver.klay.accounts.privateKeyToAccount(process.env.DEPLOYER!));

  const transaction = await caver.klay.sendTransaction({
    type: 'SMART_CONTRACT_DEPLOY',
    from: deployer,
    data: '', /* bytecode */
    gas: '50000000',
    value: 0,
  });

  console.log(transaction);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });