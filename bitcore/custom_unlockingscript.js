var bitcore = require("bitcore-lib");
bitcore.Transaction = require("bitcore-lib").Transaction;
bitcore.Script = require("bitcore-lib").Script;

var Taddress = "mz4pMvE48zJhx1XueWs9H2h6ciGRqEX4AC";

var unlockingScript = bitcore.Script().add("OP_2");

var transaction = new bitcore.Transaction();
transaction.addInput(
  new bitcore.Transaction.Input({
    prevTxId:
      "f4f500b7f8e6ddb084d2f95f0ab5a3fbfe477a4b476bd2d519dbdc7a4e58bf9c", //The transaction id that created the custom lock
    outputIndex: 1,
    script: unlockingScript
  }),
  unlockingScript,
  10000
);

transaction = transaction.to(Taddress, 199980000);
transaction = transaction.fee(10000);
console.log("Raw Transaction\n" + transaction);

var sys = require("sys");
var exec = require("child_process").exec;
function puts(error, stdout, stderr) {
  console.log(stdout);
}
exec("bitcoin-cli decoderawtransaction " + transaction, puts);
