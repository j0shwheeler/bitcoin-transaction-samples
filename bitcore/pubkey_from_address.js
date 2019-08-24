var bitcore = require("bitcore-lib");

var Address = bitcore.Address;
var address = Address.fromString("3JaNVazDrhsC3rtyGh4aWZeFoAqcBkzh9R");
var script = bitcore.Script.buildPublicKeyHashOut(address);
console.log("The address: " + script);
