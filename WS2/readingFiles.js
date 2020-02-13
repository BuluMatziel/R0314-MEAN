var fs = require("fs");

console.log("Program started");

var data = fs.readFileSync('example_1.txt');
var data_2 = fs.readFileSync('example_2.txt');
console.log(data.toString());
console.log(data_2.toString());

console.log("Program ended");