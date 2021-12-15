import Web3 from "web3";
import truffleConfig from "../../truffle-config.js";

// Setup web3
const provider = truffleConfig.networks.rinkeby.provider();
// console.log("Provider: ", provider);
export const web3 = new Web3(provider);
// console.log("Web3: ", web3);
