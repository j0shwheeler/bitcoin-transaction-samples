var bitcore = require("bitcore-lib");
bitcore.Transaction = require("bitcore-lib").Transaction;
bitcore.Script = require("bitcore-lib").Script;

var lockingscript = bitcore
  .Script()
  .add("OP_13")
  .add("OP_ADD")
  .add("OP_15")
  .add("OP_EQUAL");

var utxo = "e7fcc2e54dac9407d2e07b797dca969e971a5ca6c03c42dfa11925bbbaf4f6fb";
var Saddress = "mz4pMvE48zJhx1XueWs9H2h6ciGRqEX4AC";
var pkey = "cRxmRVEL6JDKCMGh689RDJfFaGsLjqefX4EffBk4wjZLzFx9fUo6";
var Taddress = "muuf848EqB31HurATgN7fcL5wJJokmBrsg";

var g_utxos = [
  {
    address: Saddress,
    txid: utxo,
    vout: 0,
    scriptPubKey: "76a914cb78f3d32362a4178252a20bb9128506bf5805dd88ac",
    amount: 12.5
  }
];

var transaction = new bitcore.Transaction();
transaction = transaction.from(g_utxos);
transaction = transaction.to(Taddress, 1050000000);
transaction = transaction.fee(0.0001 * 100000000);

transaction = transaction.addOutput(
  new bitcore.Transaction.Output({
    script: lockingscript,
    satoshis: 199990000,
    address: Taddress
  })
);
transaction = transaction.sign(pkey);
console.log("Raw Transaction\n" + transaction);

var sys = require("sys");
var exec = require("child_process").exec;
function puts(error, stdout, stderr) {
  console.log(stdout);
}
exec("bitcoin-cli decoderawtransaction " + transaction, puts);
