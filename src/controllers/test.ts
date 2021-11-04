// Create and send a Testnet3 Bitcoin transaction:
//
// 1. Query for unspent outputs.
// 2. Create a transaction.
// 3. Forward the transaction to the Testnet3 Bitcoin network.
//
// Note:
// To explore the Testnet3 Bitcoin blockchain, see:
// https://live.blockcypher.com/btc-testnet/
//
// More information about the Blockcypher.com API, see: http://dev.blockcypher.com/
//
// More information:
// Example 3b
// https://www.mobilefish.com/developer/nodejs/nodejs_quickguide_bitcoinjs.html
//
// Disclaimer:
//
// Use this script at your own risk! All information on this page is provided "as is", without any warranty.
// Mobilefish.com will not be liable for any damages, loss of profits or any other kind of loss
// you may sustain by using this script.

let bitcoin = require("bitcoinjs-lib"); // Use version 2.2.0
let request = require("request");

// Convert 'satoshi' to bitcoin value
let satoshiToBTC = function (value: number) {
  return value * 0.00000001;
};

// Broadcasts a transaction to the network via blockcypher.com
let broadcast_tx = function (tx: { toHex: () => any; getId: () => any }) {
  console.log("tx in hex = ", tx.toHex());

  let options = {
    uri: "https://api.blockcypher.com/v1/btc/test3/txs/push",
    method: "POST",
    json: {
      tx: tx.toHex(),
    },
  };

  request(options, function (err: any, httpResponse: any, body: any) {
    if (err) {
      console.error("Request failed:", err);
    } else {
      console.log("Broadcast results:", body);
      console.log("Transaction send with hash:", tx.getId());
    }
  });
};

// Fee to pay the miners in sathosis
let tx_fee = 10000; // 0.0001 BTC

// Prompt for the private key of the source address
// prompt(
//   "Enter the private key of the source address (WIF format): ",
//   function (private_wif: any) {
// Get the source Testnet3 Bitcoin address from the private key
let network = bitcoin.networks.testnet;
let keyPair = bitcoin.ECPair.fromWIF(
  "cTa4ds3r7q7Aqwom538Y6K8GtkBJuN767Tcn1YyY87uGENihpa3D",
  network
);
let source_address = keyPair.getAddress();

// Query blockcypher.com for the unspent outputs from the source address
let url =
  "https://api.blockcypher.com/v1/btc/test3/addrs/" +
  source_address +
  "?unspentOnly=true";

request(
  url,
  function (error: any, response: { statusCode: number }, body: string) {
    if (!error && response.statusCode == 200) {
      // Parse the response and get the first unspent output
      let json = JSON.parse(body);
      let unspent = json["txrefs"][0];

      console.log("JSON unspent", unspent);

      // Prompt for the destination address
      console.log(
        "Found an unspent transaction output with ",
        satoshiToBTC(unspent.value),
        " BTC."
      );

      // prompt("Enter a destination address: ", function (dest_address: any) {
      // Calculate the withdraw amount minus the tx fee
      let withdraw_amount = unspent.value - tx_fee;

      console.log("Unspent value (BTC)= ", satoshiToBTC(unspent.value));
      console.log("Tx fee (BTC)= ", satoshiToBTC(tx_fee));
      console.log("Withdraw amount (BTC)= ", satoshiToBTC(withdraw_amount));

      // Build a transaction
      console.log("TransactionBuilder input tx_hash = ", unspent.tx_hash);
      console.log(
        "TransactionBuilder input tx_output_n = ",
        unspent.tx_output_n
      );

      let txb = new bitcoin.TransactionBuilder(network);
      txb.addInput(unspent.tx_hash, unspent.tx_output_n);
      txb.addOutput(
        "tb1q9xqtgdl8yfllm96hf26vsuv4hrmuvf3k5xn89p",
        withdraw_amount
      );

      txb.sign(0, keyPair);
      let tx = txb.build();

      console.log("tx = ", tx);

      // Prompt to confirm sending the transaction

      broadcast_tx(tx);

      //   });
      // });
    } else {
      console.log("Unable to find any unspent transaction outputs.");
      if (error) console.log("ERROR:", error);
    }
    // });
  }
);
