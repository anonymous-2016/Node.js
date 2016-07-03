//MyModule.js

var calculate = function(numA,numB){
return numA*numB + 10*numB;
}
var add = function(numA,numB){
return numA + numB;
}
var show = function(numA){
// do something
return numA;
}
exports.calculate = calculate;
exports.add = add;
exports.show = show;