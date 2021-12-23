"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Playgrounds = void 0;
const web3_1 = require("../web3/web3");
const Playground_json_1 = __importDefault(require("../abis/Playground.json"));
const Playgrounds = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const networkId = yield web3_1.web3.eth.net.getId();
    const playgroundData = Playground_json_1.default.networks[networkId];
    if (playgroundData) {
        //@ts-ignore
        const contract = new web3_1.web3.eth.Contract(Playground_json_1.default.abi, playgroundData.address);
        contract.methods.getData().call().then((data) => {
            const playgrounds = [];
            data.map(item => {
                const playground = {
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    website: item.website,
                    imageUrl: item.imageUrl
                };
                playgrounds.push(playground);
            });
            console.log("Playgrounds: ", playgrounds);
            res.send(playgrounds);
        });
    }
});
exports.Playgrounds = Playgrounds;
