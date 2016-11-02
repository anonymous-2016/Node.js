// D:\NodeJs>node readsync.js

// Define JSON File
var fs = require("fs");

console.log("***STARTING***\n");

// Get content from file
var contents = fs.readFileSync("dummy.json", 'utf8');

// Define to JSON type
var jsonContent = JSON.parse(contents);

// Get Value from JSON
console.log("User Name:", jsonContent.username);
console.log("Email:", jsonContent.email);
console.log("Password:", jsonContent.password);

console.log("\n***EXIT***");