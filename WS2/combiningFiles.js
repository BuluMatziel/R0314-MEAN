var fs = require("fs");

var data = fs.readFileSync('example_3.txt');
var data_2 = fs.readFileSync('example_4.txt');
var myString = "I wrote this!";
// Combining two example files and adding myString to the top and bottom of the file
fs.writeFileSync('combinedFiles.txt', (myString + "\n" + data + "\n" + data_2 + "\n" + myString), 'utf8');
console.log("The file has been saved!")

var newData = fs.readFileSync('combinedFiles.txt');
console.log(newData.toString());