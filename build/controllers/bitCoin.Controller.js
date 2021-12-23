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
exports.sendBitcoin = void 0;
const axios_1 = __importDefault(require("axios"));
const bitcore_lib_1 = __importDefault(require("bitcore-lib"));
const sendBitcoin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    console.log("addess", req.body.address);
    try {
        const sochain_network = "BTCTEST";
        const privateKey = `cTa4ds3r7q7Aqwom538Y6K8GtkBJuN767Tcn1YyY87uGENihpa3D`;
        const sourceAddress = `tb1qw2gnuwhqxxzqt0rhkq3eu39d5uqrh2uwq34n57`;
        // const satoshiToSend: number = parseInt(req.body?.amount) * 100000000;
        let fee = 0;
        let inputCount = 0;
        let outputCount = 2;
        const utxos = yield axios_1.default.get("https://api.blockcypher.com/v1/btc/test3/addrs/" +
            sourceAddress +
            "?unspentOnly=true");
        const transaction = new bitcore_lib_1.default.Transaction();
        let totalAmountAvailable = 0;
        console.log("utxos", utxos.data.txrefs);
        let inputs = [];
        utxos.data.txrefs.forEach((element) => __awaiter(void 0, void 0, void 0, function* () {
            // console.log("element", element);
            //   let utxo: {
            //     satoshis: number;
            //     script: string;
            //     address: string;
            //     txId: string;
            //     outputIndex: string;
            //   } | null = null;
            //   utxo.satoshis = Math.floor(Number(element.value) * 100000000);
            //   utxo.script = element.script_hex;
            //   utxo.address = utxos.data.data.address;
            //   utxo.txId = element.txid;
            //   utxo.outputIndex = element.output_no;
            totalAmountAvailable += Math.floor(Number(element.value) * 100000000);
            inputCount += 1;
            inputs.push({
                satoshis: Math.floor(Number(element.value) * 100000000),
                script: element.script_hex,
                address: utxos.data.data.address,
                txId: element.txid,
                outputIndex: element.output_no,
            });
        }));
        let transactionSize = inputCount * 146 + outputCount * 34 + 10 - inputCount;
        // Check if we have enough funds to cover the transaction and the fees assuming we want to pay 20 satoshis per byte
        fee = transactionSize * 20;
        if (totalAmountAvailable - parseInt(req.body.amount) - fee < 0) {
            //   throw new Error("Balance is too low for this transaction");
            res.status(422).json("Balance is too low for this transaction");
        }
        console.log("inputs", inputs);
        //Set transaction input
        transaction.from(inputs);
        // set the recieving address and the amount to send
        // console.log("amount", satoshiToSend);
        transaction.to((_a = req.body) === null || _a === void 0 ? void 0 : _a.address.toString(), parseInt(req.body.amount));
        // Set change address - Address to receive the left over funds after transfer
        transaction.change(sourceAddress);
        //manually set transaction fees: 20 satoshis per byte
        //   transaction.fee(fee * 20);
        // Sign transaction with your private key
        transaction.sign(privateKey);
        // serialize Transactions
        const serializedTransaction = transaction.serialize();
        // Send transaction
        const result = yield (0, axios_1.default)({
            method: "POST",
            url: `https://api.blockcypher.com/v1/btc/test3/txs/send`,
            data: {
                tx_hex: serializedTransaction,
            },
        });
        //    return result.data.data;
        res.status(200).json(result.data.data);
    }
    catch (error) {
        res.status(422).json(error);
        console.log(error);
    }
});
exports.sendBitcoin = sendBitcoin;
// export const sendBitcoin = (req: Request, res: Response) => {
//   try {
//     const Response = sendBitcoinFunction(req.body.address, req.body.amount);
//     res.status(422).json(Response);
//   } catch (error) {
//     res.status(422).json(error);
//   }
// };
