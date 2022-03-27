/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AuctionRepository,
  AuctionRepositoryInterface,
} from "../../contracts/AuctionRepository";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "AuctionCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "AuctionCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "AuctionFinalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "BidSuccess",
    type: "event",
  },
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "auctionBids",
    outputs: [
      {
        internalType: "address payable",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "auctionOwner",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "auctions",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "blockDeadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startPrice",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "deedId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "deedRepositoryAddress",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "finalized",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "bidOnAuction",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "cancelAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_deedRepositoryAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_deedId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_auctionTitle",
        type: "string",
      },
      {
        internalType: "string",
        name: "_metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_startPrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_blockDeadline",
        type: "uint256",
      },
    ],
    name: "createAuction",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "finalizeAuction",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getAuctionById",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "blockDeadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startPrice",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "deedId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "deedRepositoryAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "finalized",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getAuctionsCountOfOwner",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "getAuctionsOf",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getBidsCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_auctionId",
        type: "uint256",
      },
    ],
    name: "getCurrentBid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611a2e806100206000396000f3fe6080604052600436106100c25760003560e01c8063a87d942c1161007f578063d56aa55811610059578063d56aa55814610243578063da4e364f14610279578063e1b96581146102b6578063e8083863146102e6576100c2565b8063a87d942c146101e1578063b1b61bfa146101f6578063c8756cda14610223576100c2565b806318111ada146100d457806326b7aeea146101125780634008f9c014610127578063571a26a0146101625780635f93de491461018257806396b5a755146101c1575b3480156100ce57600080fd5b50600080fd5b3480156100e057600080fd5b506100f46100ef366004611834565b610306565b604051610109999897969594939291906118fc565b60405180910390f35b610125610120366004611834565b610577565b005b34801561013357600080fd5b50610154610142366004611834565b60009081526001602052604090205490565b604051908152602001610109565b34801561016e57600080fd5b506100f461017d366004611834565b6108e7565b34801561018e57600080fd5b506101a261019d36600461184c565b610a6d565b604080516001600160a01b039093168352602083019190915201610109565b3480156101cd57600080fd5b506101256101dc366004611834565b610ab3565b3480156101ed57600080fd5b50600054610154565b34801561020257600080fd5b5061021661021136600461173b565b610e2a565b60405161010991906118b8565b34801561022f57600080fd5b5061015461023e36600461177a565b610e96565b34801561024f57600080fd5b5061015461025e36600461173b565b6001600160a01b031660009081526002602052604090205490565b34801561028557600080fd5b50610299610294366004611834565b610ec7565b604080519283526001600160a01b03909116602083015201610109565b3480156102c257600080fd5b506102d66102d13660046117a5565b610f64565b6040519015158152602001610109565b3480156102f257600080fd5b50610125610301366004611834565b6111b5565b6060600080606060008060008060008060008b8154811061033757634e487b7160e01b600052603260045260246000fd5b9060005260206000209060070201604051806101200160405290816000820180546103619061198f565b80601f016020809104026020016040519081016040528092919081815260200182805461038d9061198f565b80156103da5780601f106103af576101008083540402835291602001916103da565b820191906000526020600020905b8154815290600101906020018083116103bd57829003601f168201915b5050505050815260200160018201548152602001600282015481526020016003820180546104079061198f565b80601f01602080910402602001604051908101604052809291908181526020018280546104339061198f565b80156104805780601f1061045557610100808354040283529160200191610480565b820191906000526020600020905b81548152906001019060200180831161046357829003601f168201915b50505050508152602001600482015481526020016005820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016006820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b031681526020016006820160149054906101000a900460ff161515151581526020016006820160159054906101000a900460ff1615151515815250509050806000015181602001518260400151836060015184608001518560a001518660c001518760e00151886101000151995099509950995099509950995099509950509193959799909294969850565b6000349050600080838154811061059e57634e487b7160e01b600052603260045260246000fd5b9060005260206000209060070201604051806101200160405290816000820180546105c89061198f565b80601f01602080910402602001604051908101604052809291908181526020018280546105f49061198f565b80156106415780601f1061061657610100808354040283529160200191610641565b820191906000526020600020905b81548152906001019060200180831161062457829003601f168201915b50505050508152602001600182015481526020016002820154815260200160038201805461066e9061198f565b80601f016020809104026020016040519081016040528092919081815260200182805461069a9061198f565b80156106e75780601f106106bc576101008083540402835291602001916106e7565b820191906000526020600020905b8154815290600101906020018083116106ca57829003601f168201915b50505091835250506004820154602082015260058201546001600160a01b039081166040830152600690920154808316606083015260ff600160a01b8204811615156080840152600160a81b90910416151560a09091015260c08201519192501633141561075457600080fd5b806020015142111561076557600080fd5b600083815260016020908152604080832054848201518251808401909352848352928201939093528215610805576000868152600160208190526040909120906107af908561196c565b815481106107cd57634e487b7160e01b600052603260045260246000fd5b60009182526020918290206040805180820190915260029092020180546001600160a01b031682526001015491810182905290925090505b8185101561081257600080fd5b821561084d57805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f1935050505061084d57600080fd5b60408051808201825233808252602080830189815260008b815260018084528682208054808301825590835291849020865160029093020180546001600160a01b0319166001600160a01b03909316929092178255915191015583519182528101899052825191927f5762e6a7d331cd17a1761e94de3ea3b85e90ee6cdd9d1204e361cc650689d46392918290030190a150505050505050565b600081815481106108f757600080fd5b906000526020600020906007020160009150905080600001805461091a9061198f565b80601f01602080910402602001604051908101604052809291908181526020018280546109469061198f565b80156109935780601f1061096857610100808354040283529160200191610993565b820191906000526020600020905b81548152906001019060200180831161097657829003601f168201915b5050505050908060010154908060020154908060030180546109b49061198f565b80601f01602080910402602001604051908101604052809291908181526020018280546109e09061198f565b8015610a2d5780601f10610a0257610100808354040283529160200191610a2d565b820191906000526020600020905b815481529060010190602001808311610a1057829003601f168201915b50505060048401546005850154600690950154939490936001600160a01b039182169350908116915060ff600160a01b8204811691600160a81b90041689565b60016020528160005260406000208181548110610a8957600080fd5b6000918252602090912060029091020180546001909101546001600160a01b039091169250905082565b80336001600160a01b031660008281548110610adf57634e487b7160e01b600052603260045260246000fd5b60009182526020909120600660079092020101546001600160a01b031614610b0657600080fd5b6000808381548110610b2857634e487b7160e01b600052603260045260246000fd5b906000526020600020906007020160405180610120016040529081600082018054610b529061198f565b80601f0160208091040260200160405190810160405280929190818152602001828054610b7e9061198f565b8015610bcb5780601f10610ba057610100808354040283529160200191610bcb565b820191906000526020600020905b815481529060010190602001808311610bae57829003601f168201915b505050505081526020016001820154815260200160028201548152602001600382018054610bf89061198f565b80601f0160208091040260200160405190810160405280929190818152602001828054610c249061198f565b8015610c715780601f10610c4657610100808354040283529160200191610c71565b820191906000526020600020905b815481529060010190602001808311610c5457829003601f168201915b5050509183525050600482015460208083019190915260058301546001600160a01b03908116604080850191909152600690940154908116606084015260ff600160a01b8204811615156080850152600160a81b90910416151560a0909201919091526000868152600190915220549091508015610d7c576000848152600160208190526040822090610d04908461196c565b81548110610d2257634e487b7160e01b600052603260045260246000fd5b60009182526020808320604080518082018252600290940290910180546001600160a01b031680855260019091015492840183905290519294509281156108fc029290818181858888f19350505050610d7a57600080fd5b505b610d94308360c001518460a00151856080015161153e565b15610e24576000808581548110610dbb57634e487b7160e01b600052603260045260246000fd5b60009182526020918290206006600790920201018054921515600160a01b0260ff60a01b1990931692909217909155604080513381529182018690527f39e6c898ce035bbacd9ba4f9753534f8c9f976e0ff70be83cfe887f235afa1d391015b60405180910390a15b50505050565b6001600160a01b0381166000908152600260209081526040808320805482518185028101850190935280835260609493830182828015610e8957602002820191906000526020600020905b815481526020019060010190808311610e75575b5093979650505050505050565b60026020528160005260406000208181548110610eb257600080fd5b90600052602060002001600091509150505481565b60008181526001602052604081205481908015610f58576000848152600160208190526040822090610ef9908461196c565b81548110610f1757634e487b7160e01b600052603260045260246000fd5b60009182526020918290206040805180820190915260029092020180546001600160a01b031680835260019091015491909201819052969095509350505050565b50600093849350915050565b600086866000826001600160a01b0316636352211e836040518263ffffffff1660e01b8152600401610f9891815260200190565b60206040518083038186803b158015610fb057600080fd5b505afa158015610fc4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610fe8919061175e565b90506001600160a01b0381163014610fff57600080fd5b60008054604080516101208101825261010081018490528b815260208082018a90529181018a9052606081018b9052608081018d90526001600160a01b038e1660a08201523360c0820152600160e08201819052830184559280528251805192939283927f290decd9548b62a8d60345a988386fc84ba6bc95484008f6362f93160ef3e56360078702019261109a928492919091019061161b565b50602082810151600183015560408301516002830155606083015180516110c7926003850192019061161b565b506080820151600482015560a08201516005820180546001600160a01b0319166001600160a01b0392831617905560c08301516006909201805460e085015161010090950151939092166001600160a81b031990921691909117600160a01b931515939093029290921760ff60a81b1916600160a81b91151591909102179055336000818152600260209081526040808320805460018101825590845292829020909201859055815192835282018490527f3249a06bd478adf780bb7930214ad005e9cfa517d63221c0b77f27199d1a58b3910160405180910390a15060019b9a5050505050505050505050565b60008082815481106111d757634e487b7160e01b600052603260045260246000fd5b9060005260206000209060070201604051806101200160405290816000820180546112019061198f565b80601f016020809104026020016040519081016040528092919081815260200182805461122d9061198f565b801561127a5780601f1061124f5761010080835404028352916020019161127a565b820191906000526020600020905b81548152906001019060200180831161125d57829003601f168201915b5050505050815260200160018201548152602001600282015481526020016003820180546112a79061198f565b80601f01602080910402602001604051908101604052809291908181526020018280546112d39061198f565b80156113205780601f106112f557610100808354040283529160200191611320565b820191906000526020600020905b81548152906001019060200180831161130357829003601f168201915b5050509183525050600482015460208083019190915260058301546001600160a01b03908116604080850191909152600690940154908116606084015260ff600160a01b8204811615156080850152600160a81b90910416151560a090920191909152600085815260018252919091205490820151919250904210156113a557600080fd5b806113b8576113b383610ab3565b505050565b60008381526001602081905260408220906113d3908461196c565b815481106113f157634e487b7160e01b600052603260045260246000fd5b60009182526020808320604080518082018252600290940290910180546001600160a01b03908116855260019091015492840183905260c08801519151939550169281156108fc029290818181858888f1935050505061145057600080fd5b6114683082600001518560a00151866080015161153e565b15610e2457600080858154811061148f57634e487b7160e01b600052603260045260246000fd5b906000526020600020906007020160060160146101000a81548160ff0219169083151502179055506001600085815481106114da57634e487b7160e01b600052603260045260246000fd5b60009182526020918290206006600790920201018054921515600160a81b0260ff60a81b1990931692909217909155604080513381529182018690527f357afab190ee87fe0ef1c717f2728d2904d9e415a069d99f4d9382873cb3279d9101610e1b565b60405163095ea7b360e01b81526001600160a01b03848116600483015260248201839052600091849182169063095ea7b390604401600060405180830381600087803b15801561158d57600080fd5b505af11580156115a1573d6000803e3d6000fd5b50506040516323b872dd60e01b81526001600160a01b038981166004830152888116602483015260448201879052841692506323b872dd9150606401600060405180830381600087803b1580156115f757600080fd5b505af115801561160b573d6000803e3d6000fd5b5060019998505050505050505050565b8280546116279061198f565b90600052602060002090601f016020900481019282611649576000855561168f565b82601f1061166257805160ff191683800117855561168f565b8280016001018555821561168f579182015b8281111561168f578251825591602001919060010190611674565b5061169b92915061169f565b5090565b5b8082111561169b57600081556001016116a0565b600082601f8301126116c4578081fd5b813567ffffffffffffffff808211156116df576116df6119ca565b604051601f8301601f19908116603f01168101908282118183101715611707576117076119ca565b8160405283815286602085880101111561171f578485fd5b8360208701602083013792830160200193909352509392505050565b60006020828403121561174c578081fd5b8135611757816119e0565b9392505050565b60006020828403121561176f578081fd5b8151611757816119e0565b6000806040838503121561178c578081fd5b8235611797816119e0565b946020939093013593505050565b60008060008060008060c087890312156117bd578182fd5b86356117c8816119e0565b955060208701359450604087013567ffffffffffffffff808211156117eb578384fd5b6117f78a838b016116b4565b9550606089013591508082111561180c578384fd5b5061181989828a016116b4565b9350506080870135915060a087013590509295509295509295565b600060208284031215611845578081fd5b5035919050565b6000806040838503121561185e578182fd5b50508035926020909101359150565b60008151808452815b8181101561189257602081850181015186830182015201611876565b818111156118a35782602083870101525b50601f01601f19169290920160200192915050565b6020808252825182820181905260009190848201906040850190845b818110156118f0578351835292840192918401916001016118d4565b50909695505050505050565b60006101208083526119108184018d61186d565b90508a60208401528960408401528281036060840152611930818a61186d565b608084019890985250506001600160a01b0394851660a08201529290931660c0830152151560e082015290151561010090910152949350505050565b60008282101561198a57634e487b7160e01b81526011600452602481fd5b500390565b600181811c908216806119a357607f821691505b602082108114156119c457634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6001600160a01b03811681146119f557600080fd5b5056fea26469706673582212206716f554fbe0a514cc7c2f63dd9e38856424dffecf50638f928118afe28fe47b64736f6c63430008040033";

type AuctionRepositoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AuctionRepositoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AuctionRepository__factory extends ContractFactory {
  constructor(...args: AuctionRepositoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AuctionRepository> {
    return super.deploy(overrides || {}) as Promise<AuctionRepository>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): AuctionRepository {
    return super.attach(address) as AuctionRepository;
  }
  override connect(signer: Signer): AuctionRepository__factory {
    return super.connect(signer) as AuctionRepository__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AuctionRepositoryInterface {
    return new utils.Interface(_abi) as AuctionRepositoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AuctionRepository {
    return new Contract(address, _abi, signerOrProvider) as AuctionRepository;
  }
}
