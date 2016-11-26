/*node.js test*/

function xarray(){
	var clc = require('cli-color');
console.log(('*************************************************'));
//There are three ways to create an Array object. 
var array = [];
var array = new Array();
var array = [3,5,12,8,7];

console.log(clc.green.bgWhite('*********************************'));
//After creating an Array object, we can insert data. Use [] with index if you want to assign the
//value.
//insert 
array[0] = 3;
array[1] = 5;
array[2] = 12;
array[3] = 8;
array[4] = 7;
//You can also use the push() function to insert data.
array.push(10);
array.push(18);

console.log(clc.green.bgWhite('*********************************'));

//To access array data, you can use [] with data index parameter.
// show data
console.log(array);
for(var i=0;i<array.length;i++){
console.log(array[i]);
}
console.log(clc.green.bgWhite('*********************************'));

//To update an item of array data, you can use [] with data index and thus assign a new value.
// edit
array[2] = -2;
array[3] = 5;
console.log(array);
console.log(clc.green.bgWhite('*********************************'));


// remove data
array.pop();
array.pop();
// remove data by index
var index = 1;
array.splice(index,1);
console.log(array);

console.log(('*************************************************'));
}
//execute
xarray();
/*
//Array Object

*/