import axios from "axios";
import bitcore from "bitcore-lib";
import { Response, Request } from "express";

export const sendBitcoin = async (req: Request, res: Response) => {
  console.log("addess", req.body.address);
  try {
    const sochain_network: string = "BTCTEST";
    const privateKey: string = `cTa4ds3r7q7Aqwom538Y6K8GtkBJuN767Tcn1YyY87uGENihpa3D`;
    const sourceAddress = `tb1qw2gnuwhqxxzqt0rhkq3eu39d5uqrh2uwq34n57`;
    // const satoshiToSend: number = parseInt(req.body?.amount) * 100000000;
    let fee: number = 0;
    let inputCount: number = 0;
    let outputCount: number = 2;
    const utxos = await axios.get(
      "https://api.blockcypher.com/v1/btc/test3/addrs/" +
        sourceAddress +
        "?unspentOnly=true"
    );
    const transaction = new bitcore.Transaction();
    let totalAmountAvailable: number = 0;
    console.log("utxos", utxos.data.txrefs);
    let inputs = [];
    utxos.data.txrefs.forEach(
      async (element: {
        value: any;
        script_hex: string;
        txid: string;
        output_no: string;
      }) => {
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
      }
    );

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
    transaction.to(req.body?.address.toString(), parseInt(req.body.amount));

    // Set change address - Address to receive the left over funds after transfer
    transaction.change(sourceAddress);

    //manually set transaction fees: 20 satoshis per byte
    //   transaction.fee(fee * 20);

    // Sign transaction with your private key
    transaction.sign(privateKey);

    // serialize Transactions
    const serializedTransaction = transaction.serialize();
    // Send transaction

    const result = await axios({
      method: "POST",
      url: `https://api.blockcypher.com/v1/btc/test3/txs/send`,
      data: {
        tx_hex: serializedTransaction,
      },
    });
    //    return result.data.data;
    res.status(200).json(result.data.data);
  } catch (error) {
    res.status(422).json(error);
    console.log(error);
  }
};

// export const sendBitcoin = (req: Request, res: Response) => {
//   try {
//     const Response = sendBitcoinFunction(req.body.address, req.body.amount);
//     res.status(422).json(Response);
//   } catch (error) {
//     res.status(422).json(error);
//   }
// };
