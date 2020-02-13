var fs = require("fs");

// Creating a new folder for the new file
fs.mkdirSync('./newdata', { recursive: true },
    console.log('./newdata was created')
);

var data = fs.readFileSync('./example_txts/example_3.txt');
var data_2 = fs.readFileSync('./example_txts/example_4.txt');
var myString = "I wrote this!";
// Combining two example files and adding myString to the top and bottom of the file. Creating the new file in the new folder
fs.writeFileSync('./newdata/combinedFiles.txt', (myString + "\n" + data + "\n" + data_2 + "\n" + myString), 'utf8');
console.log("The file has been saved!")

// Printing the new created file to the console
var newData = fs.readFileSync('newdata/combinedFiles.txt');
console.log(newData.toString());