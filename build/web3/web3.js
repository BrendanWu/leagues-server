"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.web3 = void 0;
const web3_1 = __importDefault(require("web3"));
const truffle_config_js_1 = __importDefault(require("../../truffle-config.js"));
// Setup web3
const provider = truffle_config_js_1.default.networks.rinkeby.provider();
// console.log("Provider: ", provider);
exports.web3 = new web3_1.default(provider);
// console.log("Web3: ", web3);
