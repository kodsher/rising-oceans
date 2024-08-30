/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../common";
import type { Crowdfunding, CrowdfundingInterface } from "../Crowdfunding";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "campaigns",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "string",
        name: "title",
        type: "string",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "target",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amountCollected",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "image",
        type: "string",
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
      {
        internalType: "string",
        name: "_title",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_target",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_deadline",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_image",
        type: "string",
      },
    ],
    name: "createCampaign",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "donateToCampaign",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCampaigns",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "string",
            name: "title",
            type: "string",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "target",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amountCollected",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "image",
            type: "string",
          },
          {
            internalType: "address[]",
            name: "donators",
            type: "address[]",
          },
          {
            internalType: "uint256[]",
            name: "donations",
            type: "uint256[]",
          },
        ],
        internalType: "struct Crowdfunding.Campaign[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "getDonators",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
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
    inputs: [],
    name: "numberOfCampaigns",
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
] as const;

const _bytecode =
  "0x6080604052600060015534801561001557600080fd5b50611925806100256000396000f3fe6080604052600436106100555760003560e01c806307ca140d1461005a5780630fa91fa914610085578063141961bc146100c357806342a4fda8146101065780639943e3a114610122578063a6b036331461015f575b600080fd5b34801561006657600080fd5b5061006f61018a565b60405161007c9190610b6c565b60405180910390f35b34801561009157600080fd5b506100ac60048036038101906100a79190610bc7565b610190565b6040516100ba929190610da2565b60405180910390f35b3480156100cf57600080fd5b506100ea60048036038101906100e59190610bc7565b6102a0565b6040516100fd9796959493929190610e78565b60405180910390f35b610120600480360381019061011b9190610bc7565b61049a565b005b34801561012e57600080fd5b506101496004803603810190610144919061105d565b6105fa565b6040516101569190610b6c565b60405180910390f35b34801561016b57600080fd5b50610174610721565b6040516101819190611409565b60405180910390f35b60015481565b6060806000808481526020019081526020016000206007016000808581526020019081526020016000206008018180548060200260200160405190810160405280929190818152602001828054801561023e57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190600101908083116101f4575b505050505091508080548060200260200160405190810160405280929190818152602001828054801561029057602002820191906000526020600020905b81548152602001906001019080831161027c575b5050505050905091509150915091565b60006020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010180546102e99061145a565b80601f01602080910402602001604051908101604052809291908181526020018280546103159061145a565b80156103625780601f1061033757610100808354040283529160200191610362565b820191906000526020600020905b81548152906001019060200180831161034557829003601f168201915b5050505050908060020180546103779061145a565b80601f01602080910402602001604051908101604052809291908181526020018280546103a39061145a565b80156103f05780601f106103c5576101008083540402835291602001916103f0565b820191906000526020600020905b8154815290600101906020018083116103d357829003601f168201915b5050505050908060030154908060040154908060050154908060060180546104179061145a565b80601f01602080910402602001604051908101604052809291908181526020018280546104439061145a565b80156104905780601f1061046557610100808354040283529160200191610490565b820191906000526020600020905b81548152906001019060200180831161047357829003601f168201915b5050505050905087565b60003490506000806000848152602001908152602001600020905080600701339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060080182908060018154018082558091505060019003906000526020600020016000909190919091505560008160000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168360405161058f906114bc565b60006040518083038185875af1925050503d80600081146105cc576040519150601f19603f3d011682016040523d82523d6000602084013e6105d1565b606091505b5050905080156105f4578282600501546105eb9190611500565b82600501819055505b50505050565b6000806000806001548152602001908152602001600020905042816004015410610659576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610650906115a6565b60405180910390fd5b878160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550868160010190816106ad9190611772565b50858160020190816106bf9190611772565b5084816003018190555083816004018190555060008160050181905550828160060190816106ed9190611772565b506001600081548092919061070190611844565b919050555060018054610714919061188c565b9150509695505050505050565b6060600060015467ffffffffffffffff81111561074157610740610f32565b5b60405190808252806020026020018201604052801561077a57816020015b610767610af1565b81526020019060019003908161075f5790505b50905060005b600154811015610ae9576000806000838152602001908152602001600020905080604051806101200160405290816000820160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020016001820180546108139061145a565b80601f016020809104026020016040519081016040528092919081815260200182805461083f9061145a565b801561088c5780601f106108615761010080835404028352916020019161088c565b820191906000526020600020905b81548152906001019060200180831161086f57829003601f168201915b505050505081526020016002820180546108a59061145a565b80601f01602080910402602001604051908101604052809291908181526020018280546108d19061145a565b801561091e5780601f106108f35761010080835404028352916020019161091e565b820191906000526020600020905b81548152906001019060200180831161090157829003601f168201915b505050505081526020016003820154815260200160048201548152602001600582015481526020016006820180546109559061145a565b80601f01602080910402602001604051908101604052809291908181526020018280546109819061145a565b80156109ce5780601f106109a3576101008083540402835291602001916109ce565b820191906000526020600020905b8154815290600101906020018083116109b157829003601f168201915b5050505050815260200160078201805480602002602001604051908101604052809291908181526020018280548015610a5c57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610a12575b5050505050815260200160088201805480602002602001604051908101604052809291908181526020018280548015610ab457602002820191906000526020600020905b815481526020019060010190808311610aa0575b505050505081525050838381518110610ad057610acf6118c0565b5b6020026020010181905250508080600101915050610780565b508091505090565b604051806101200160405280600073ffffffffffffffffffffffffffffffffffffffff16815260200160608152602001606081526020016000815260200160008152602001600081526020016060815260200160608152602001606081525090565b6000819050919050565b610b6681610b53565b82525050565b6000602082019050610b816000830184610b5d565b92915050565b6000604051905090565b600080fd5b600080fd5b610ba481610b53565b8114610baf57600080fd5b50565b600081359050610bc181610b9b565b92915050565b600060208284031215610bdd57610bdc610b91565b5b6000610beb84828501610bb2565b91505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c4b82610c20565b9050919050565b610c5b81610c40565b82525050565b6000610c6d8383610c52565b60208301905092915050565b6000602082019050919050565b6000610c9182610bf4565b610c9b8185610bff565b9350610ca683610c10565b8060005b83811015610cd7578151610cbe8882610c61565b9750610cc983610c79565b925050600181019050610caa565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610d1981610b53565b82525050565b6000610d2b8383610d10565b60208301905092915050565b6000602082019050919050565b6000610d4f82610ce4565b610d598185610cef565b9350610d6483610d00565b8060005b83811015610d95578151610d7c8882610d1f565b9750610d8783610d37565b925050600181019050610d68565b5085935050505092915050565b60006040820190508181036000830152610dbc8185610c86565b90508181036020830152610dd08184610d44565b90509392505050565b610de281610c40565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b83811015610e22578082015181840152602081019050610e07565b60008484015250505050565b6000601f19601f8301169050919050565b6000610e4a82610de8565b610e548185610df3565b9350610e64818560208601610e04565b610e6d81610e2e565b840191505092915050565b600060e082019050610e8d600083018a610dd9565b8181036020830152610e9f8189610e3f565b90508181036040830152610eb38188610e3f565b9050610ec26060830187610b5d565b610ecf6080830186610b5d565b610edc60a0830185610b5d565b81810360c0830152610eee8184610e3f565b905098975050505050505050565b610f0581610c40565b8114610f1057600080fd5b50565b600081359050610f2281610efc565b92915050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610f6a82610e2e565b810181811067ffffffffffffffff82111715610f8957610f88610f32565b5b80604052505050565b6000610f9c610b87565b9050610fa88282610f61565b919050565b600067ffffffffffffffff821115610fc857610fc7610f32565b5b610fd182610e2e565b9050602081019050919050565b82818337600083830152505050565b6000611000610ffb84610fad565b610f92565b90508281526020810184848401111561101c5761101b610f2d565b5b611027848285610fde565b509392505050565b600082601f83011261104457611043610f28565b5b8135611054848260208601610fed565b91505092915050565b60008060008060008060c0878903121561107a57611079610b91565b5b600061108889828a01610f13565b965050602087013567ffffffffffffffff8111156110a9576110a8610b96565b5b6110b589828a0161102f565b955050604087013567ffffffffffffffff8111156110d6576110d5610b96565b5b6110e289828a0161102f565b94505060606110f389828a01610bb2565b935050608061110489828a01610bb2565b92505060a087013567ffffffffffffffff81111561112557611124610b96565b5b61113189828a0161102f565b9150509295509295509295565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600082825260208201905092915050565b600061118682610de8565b611190818561116a565b93506111a0818560208601610e04565b6111a981610e2e565b840191505092915050565b600082825260208201905092915050565b60006111d082610bf4565b6111da81856111b4565b93506111e583610c10565b8060005b838110156112165781516111fd8882610c61565b975061120883610c79565b9250506001810190506111e9565b5085935050505092915050565b600082825260208201905092915050565b600061123f82610ce4565b6112498185611223565b935061125483610d00565b8060005b8381101561128557815161126c8882610d1f565b975061127783610d37565b925050600181019050611258565b5085935050505092915050565b6000610120830160008301516112ab6000860182610c52565b50602083015184820360208601526112c3828261117b565b915050604083015184820360408601526112dd828261117b565b91505060608301516112f26060860182610d10565b5060808301516113056080860182610d10565b5060a083015161131860a0860182610d10565b5060c083015184820360c0860152611330828261117b565b91505060e083015184820360e086015261134a82826111c5565b9150506101008301518482036101008601526113668282611234565b9150508091505092915050565b600061137f8383611292565b905092915050565b6000602082019050919050565b600061139f8261113e565b6113a98185611149565b9350836020820285016113bb8561115a565b8060005b858110156113f757848403895281516113d88582611373565b94506113e383611387565b925060208a019950506001810190506113bf565b50829750879550505050505092915050565b600060208201905081810360008301526114238184611394565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061147257607f821691505b6020821081036114855761148461142b565b5b50919050565b600081905092915050565b50565b60006114a660008361148b565b91506114b182611496565b600082019050919050565b60006114c782611499565b9150819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061150b82610b53565b915061151683610b53565b925082820190508082111561152e5761152d6114d1565b5b92915050565b7f54686520646561646c696e652073686f756c642062652061206461746520696e60008201527f20746865206675747572652e0000000000000000000000000000000000000000602082015250565b6000611590602c83610df3565b915061159b82611534565b604082019050919050565b600060208201905081810360008301526115bf81611583565b9050919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b6000600883026116287fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff826115eb565b61163286836115eb565b95508019841693508086168417925050509392505050565b6000819050919050565b600061166f61166a61166584610b53565b61164a565b610b53565b9050919050565b6000819050919050565b61168983611654565b61169d61169582611676565b8484546115f8565b825550505050565b600090565b6116b26116a5565b6116bd818484611680565b505050565b5b818110156116e1576116d66000826116aa565b6001810190506116c3565b5050565b601f821115611726576116f7816115c6565b611700846115db565b8101602085101561170f578190505b61172361171b856115db565b8301826116c2565b50505b505050565b600082821c905092915050565b60006117496000198460080261172b565b1980831691505092915050565b60006117628383611738565b9150826002028217905092915050565b61177b82610de8565b67ffffffffffffffff81111561179457611793610f32565b5b61179e825461145a565b6117a98282856116e5565b600060209050601f8311600181146117dc57600084156117ca578287015190505b6117d48582611756565b86555061183c565b601f1984166117ea866115c6565b60005b82811015611812578489015182556001820191506020850194506020810190506117ed565b8683101561182f578489015161182b601f891682611738565b8355505b6001600288020188555050505b505050505050565b600061184f82610b53565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611881576118806114d1565b5b600182019050919050565b600061189782610b53565b91506118a283610b53565b92508282039050818111156118ba576118b96114d1565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea264697066735822122042493d57c013ba57b2d131e2fb5fb3dca54070b9d81788c88b4cc8a5d515fd0664736f6c63430008180033";

type CrowdfundingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CrowdfundingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Crowdfunding__factory extends ContractFactory {
  constructor(...args: CrowdfundingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Crowdfunding & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Crowdfunding__factory {
    return super.connect(runner) as Crowdfunding__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CrowdfundingInterface {
    return new Interface(_abi) as CrowdfundingInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): Crowdfunding {
    return new Contract(address, _abi, runner) as unknown as Crowdfunding;
  }
}
