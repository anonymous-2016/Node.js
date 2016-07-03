/*node.js test*/

function xjsonarray(){
	var clc = require('cli-color');
console.log(clc.green.bgWhite('*********************************'));

var now = new Date();
var productTransaction = {
id : 2,
user: 'agusk',
transactionDate: now,
details:[
{
code: 'p01',
name: 'ipad 3',
price: 600
 },
{
code: 'p02',
name: 'galaxy tab',
price: 500
 },
{
code: 'p03',
name: 'kindle',
price: 120
 }
]
};
console.log(clc.green.bgWhite('***'));
console.log(productTransaction);

console.log(clc.green.bgWhite('***'));
console.log('Id:' + productTransaction.id);
console.log('User:' + productTransaction.user);
console.log('Transaction date:' + productTransaction.transactionDate);
console.log('Details:' + productTransaction.details);

console.log(clc.green.bgWhite('***'));
for(var i=0;i<productTransaction.details.length;i++){
console.log('Code:' + productTransaction.details[i].code);
console.log('Name:' + productTransaction.details[i].name);
console.log('Price:' + productTransaction.details[i].price);
}
console.log(clc.green.bgWhite('********************************'));
productTransaction.user = 'xgqfrms';
productTransaction.details[0]['price'] = 250;
console.log(productTransaction);
console.log(clc.green.bgWhite('********************************'));
console.log(productTransaction['id']== undefined? false:true);
console.log(productTransaction['name']== undefined? false:true);
console.log(productTransaction.details[0]['code']== undefined? false:true);
console.log(productTransaction.details[0]['approved']== undefined? false:true);

}
//execute
xjsonarray();
/*
//JSON (JavaScript Object Notation)

*/
