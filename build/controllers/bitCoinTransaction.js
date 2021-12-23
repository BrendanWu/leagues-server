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
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendBitcoin = void 0;
let bitcoin = require("bitcoinjs-lib");
let Client = require("coinbase").Client;
// const bitcoinNetwork = bitcoin.networks.testnet;
const sendBitcoin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let client = new Client({
        apiKey: "lX8UEtjn1n5ClwPW",
        apiSecret: "mtSnrPJuNNj7VhQ7azluWs5aft6EBMnP",
        version: "2021-04-14",
    });
    try {
        let address = null;
        console.log("account", client);
        client.getAccount("primary", function (err, account) {
            account.createAddress(function (err, addr) {
                console.log(addr);
                address = addr;
            });
        });
        client.getAccount("primary", function (err, account) {
            account.sendMoney({ to: address, amount: "0.01", currency: "BTC" }, function (err, tx) {
                console.log(tx);
            });
        });
        res.status(200).json("done");
    }
    catch (error) {
        res.status(400).json("error");
    }
    // client.getAccount("primary", function (err: any, account: { createAddress: (arg0: (err: any, addr: any) => void) => void; }) {
    //   account.createAddress(function (err: any, addr: any) {
    //     console.log(addr);
    //     address = addr;
    //   });
    // });
    // let newtx = {
    //   inputs: [
    //     {
    //       addresses: ["tb1qw2gnuwhqxxzqt0rhkq3eu39d5uqrh2uwq34n57"],
    //     },
    //   ],
    //   outputs: [
    //     {
    //       // addresses: [req.body.address],
    //       addresses: ["tb1q9xqtgdl8yfllm96hf26vsuv4hrmuvf3k5xn89p"],
    //       value: parseInt(req.body.amount),
    //     },
    //   ],
    // };
    // const response: any = await axios.post(
    //   "https://api.blockcypher.com/v1/btc/test3/txs/new",
    //   JSON.stringify(newtx),
    //   {
    //     params: {
    //       token: "b53e6fa2fb9b46bb93d4fdbe1376eef8",
    //     },
    //   }
    // );
    // try {
    //   const tmptx = response.data;
    //   const keyBuffer = Buffer.from(
    //     "b2b2334ed0e93147e0a10815212a7d09efc82fb0d2d8a7d7e61812e6182828d0",
    //     "hex"
    //   );
    //   console.log("kryy", tmptx);
    //   let keys = bitcoin.ECPair.fromPrivateKey(keyBuffer);
    //   console.log("key", keys);
    //   tmptx.pubkeys = [];
    //   tmptx.signatures = tmptx.tosign.map(function (
    //     tosign:
    //       | WithImplicitCoercion<string>
    //       | { [Symbol.toPrimitive](hint: "string"): string },
    //     n: any
    //   ) {
    //     tmptx.pubkeys.push(keys.publicKey.toString("hex"));
    //     return bitcoin.script.signature
    //       .encode(keys.sign(Buffer.from(tosign, "hex")), 0x01)
    //       .toString("hex")
    //       .slice(0, -2);
    //   });
    //   console.log("kryy", tmptx);
    //   console.log("inputs", tmptx.tosign);
    //   console.log("txxxx", tmptx.tx);
    //   try {
    //     const result = await axios.post(
    //       "https://api.blockcypher.com/v1/btc/test3/txs/send",
    //       tmptx,
    //       {
    //         params: {
    //           token: "b53e6fa2fb9b46bb93d4fdbe1376eef8",
    //         },
    //       }
    //     );
    //     console.log("resultt", result);
    //     res.status(200).json(result);
    //   } catch (error) {
    //     res.status(400).json(error.response.data);
    //   }
    // } catch (error) {
    //   res.status(400).json(error.response);
    //   // console.log(error);
    // }
    // let satoshiToBTC = function (value: number) {
    //   return value * 0.00000001;
    // };
    // // Broadcasts a transaction to the network via blockcypher.com
    // let broadcast_tx = async function (tx: {
    //   toHex: () => any;
    //   getId: () => any;
    // }) {
    //   console.log("tx in hex = ", tx.toHex());
    //   try {
    //     const result = await axios.post(
    //       "https://api.blockcypher.com/v1/btc/test3/txs/push",
    //       { tx: tx.toHex() }
    //     );
    //     console.log("resulttt", result);
    //     res.status(200).json(result);
    //   } catch (error) {
    //     res.status(422).json(error.response.data);
    //     console.log(error.response.data);
    //   }
    //   // let options = {
    //   //   uri: "https://api.blockcypher.com/v1/btc/test3/txs/push",
    //   //   method: "POST",
    //   //   json: {
    //   //     tx: tx.toHex(),
    //   //   },
    //   // };
    //   // request(options, function (err: any, httpResponse: any, body: any) {
    //   //   if (err) {
    //   //     console.error("Request failed:", err);
    //   //     res.status(422).json(err);
    //   //   } else {
    //   //     console.log("Broadcast results:", body);
    //   //     console.log("Transaction send with hash:", tx.getId());
    //   //     res.status(200).json("result:"+body+"Transaction send with hash:"+tx.getId);
    //   //   }
    //   // });
    // };
    // // Fee to pay the miners in sathosis
    // let tx_fee = 10000; // 0.0001 BTC
    // // Prompt for the private key of the source address
    // // prompt(
    // //   "Enter the private key of the source address (WIF format): ",
    // //   function (private_wif: any) {
    // // Get the source Testnet3 Bitcoin address from the private key
    // let network = bitcoin.networks.testnet;
    // let keyPair = bitcoin.ECPair.fromWIF(
    //   "cVqrVQMUtZ6KaUywkBFcPMgSzcuSnykJqZEa6PyQGjk3RdyKPMvr",
    //   network
    // );
    // let source_address = "tb1qw2gnuwhqxxzqt0rhkq3eu39d5uqrh2uwq34n57";
    // // Query blockcypher.com for the unspent outputs from the source address
    // let url =
    //   "https://api.blockcypher.com/v1/btc/test3/addrs/" +
    //   source_address +
    //   "?unspentOnly=true";
    // request(
    //   url,
    //   function (error: any, response: { statusCode: number }, body: string) {
    //     if (!error && response.statusCode == 200) {
    //       // Parse the response and get the first unspent output
    //       let json = JSON.parse(body);
    //       console.log(json.txrefs);
    //       let unspent = json["txrefs"][0];
    //       console.log("JSON unspent", unspent);
    //       // Prompt for the destination address
    //       console.log(
    //         "Found an unspent transaction output with ",
    //         satoshiToBTC(unspent.value),
    //         " BTC."
    //       );
    //       // prompt("Enter a destination address: ", function (dest_address: any) {
    //       // Calculate the withdraw amount minus the tx fee
    //       let withdraw_amount = unspent.value - tx_fee;
    //       console.log("Unspent value (BTC)= ", satoshiToBTC(unspent.value));
    //       console.log("Tx fee (BTC)= ", satoshiToBTC(tx_fee));
    //       console.log("Withdraw amount (BTC)= ", satoshiToBTC(withdraw_amount));
    //       // Build a transaction
    //       console.log("TransactionBuilder input tx_hash = ", unspent.tx_hash);
    //       console.log(
    //         "TransactionBuilder input tx_output_n = ",
    //         unspent.tx_output_n
    //       );
    //       let txb = new bitcoin.TransactionBuilder(network);
    //       txb.addInput(unspent.tx_hash, unspent.tx_output_n);
    //       txb.addOutput(
    //         "tb1q9xqtgdl8yfllm96hf26vsuv4hrmuvf3k5xn89p",
    //         withdraw_amount
    //       );
    //       txb.sign(0, keyPair);
    //       let tx = txb.build();
    //       console.log("tx = ", tx);
    //       // Prompt to confirm sending the transaction
    //       broadcast_tx(tx);
    //       //   });
    //       // });
    //     } else {
    //       console.log("Unable to find any unspent transaction outputs.");
    //       res.status(422).json("Unable to find any unspent transaction outputs.");
    //       if (error) console.log("ERROR:", error);
    //     }
    //     // });
    //   }
    // );
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
