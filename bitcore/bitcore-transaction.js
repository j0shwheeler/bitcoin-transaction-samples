var bitcore = require("bitcore-lib");

var privateKey = new bitcore.PrivateKey(
  "cRxmRVEL6JDKCMGh689RDJfFaGsLjqefX4EffBk4wjZLzFx9fUo6"
);
var utxo = {
  txId: "d3302ffd1fd710a7ba5f3d02e4363e924288315699cc02db8be0838920ade5fd",
  outputIndex: 0,
  address: "mz4pMvE48zJhx1XueWs9H2h6ciGRqEX4AC",
  script: "76a914cb78f3d32362a4178252a20bb9128506bf5805dd88ac",
  satoshis: 2500000000
};

var transaction = new bitcore.Transaction()
  .from(utxo)
  .to("mszPeJBWpyWvqPkuwHbjB3svAEf1rU5tzv", 2499990000)
  .sign(privateKey);

console.log("transaction: " + transaction);
