/*node.js test*/

function xjson(){
	var clc = require('cli-color');
console.log(('*************************************************'));
var customer1 = {
name: 'Michael Z',
email: 'michael@email.com',
age: 35,
registeredDate: new Date()
}
console.log(customer1);
console.log(clc.green.bgWhite('*********************************'));
var customer2 = {
name: 'Michael Z',
email: 'michael@email.com',
age: 35,
registeredDate: new Date(),
address: {
city: 'Berlin',
country: 'Berlin'
}
}
console.log(customer2);
console.log(('*************************************************'));
console.log(clc.green.bgWhite('Name:' + customer1.name));
console.log(clc.green.bgWhite('Email:' + customer1.email));
console.log(clc.green.bgWhite('Age:' + customer1.age));
console.log(clc.green.bgWhite('Registered Date:' + customer1.registeredDate));
console.log(('*************************************************'));
console.log('Name:' + customer2.name);
console.log('Email:' + customer2.email);
console.log('Age:' + customer2.age);
console.log('Registered Date:' + customer2.registeredDate);
console.log('Country:' + customer2.country);
console.log(('*************************************************'));
var myjson = {
id: 2,
name: 'jackson',
email: 'jackson@email.com',
age: 35,
registeredDate: new Date()
};
for(var att in myjson){
console.log(att);
}
console.log(('*************************************************'));
var myjson = {
id: 2,
name: 'jackson',
email: 'jackson@email.com'
};
// check attribute
console.log(myjson.hasOwnProperty('id'));
console.log(myjson.hasOwnProperty('name'));
console.log(myjson.hasOwnProperty('email'));
console.log(myjson.hasOwnProperty('home'));
console.log(('*************************************************'));
var customer1 = {
name: 'Michael Z',
email: 'michael@email.com',
age: 35,
registeredDate: new Date()
}
console.log(clc.green.bgWhite('Name:' + customer1.name));
console.log(clc.green.bgWhite('Email:' + customer1.email));
console.log(clc.green.bgWhite('Age:' + customer1.age));
customer1.name = 'xgqfrms';
customer1.email = 'xgqfrms@gmail.com';
customer1.age = 23;
console.log(customer1);
console.log(('*************************************************'));
var myjson = {
id: 2,
name: 'jackson',
email: 'jackson@email.com'
};
console.log(myjson);
myjson['country'] = 'germany';
console.log(myjson);
console.log(('*************************************************'));

console.log(('*************************************************'));


}
//execute
xjson();
/*
//JSON (JavaScript Object Notation)

*/