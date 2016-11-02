// Read Asynchrously

// D:\NodeJs>node readAsync.js

// Define JSON File
var fs = require("fs");

console.log("***STARTING***\n");
// var err=0;
// var data=0;

//Get content from file
//ES 5
var contents = fs.readFile('dummy.json', 'utf8', function (err, data) {
    if (err) throw err;
    console.log("data =" + data);
});

//ES 6
/*var contents = fs.readFile('dummy.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});*/

// Define to JSON type
var jsonContent = JSON.parse(contents);


// Get Value from JSON
console.log("User Name:", jsonContent.username);
console.log("Email:", jsonContent.email);
console.log("Password:", jsonContent.password);

console.log("\n***EXIT***");


// https://www.npmjs.com/package/jsonfile




// http://stackoverflow.com/questions/10011011/using-node-js-how-do-i-read-a-json-object-into-server-memory

/*
//Sync:

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('file', 'utf8'));

//Async:

var fs = require('fs');
var obj;
fs.readFile('file', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);
});

*/

/*
https://nodejs.org/dist/latest-v6.x/docs/api/fs.html#fs_fs_readfile_file_options_callback
File System
fs.read(fd, buffer, offset, length, position, callback)
fs.readFile(file[, options], callback)
fs.readFileSync(file[, options])

*/

/*
fs.readFile('/etc/passwd', (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.readFile('/etc/passwd', 'utf8', callback);
*/
