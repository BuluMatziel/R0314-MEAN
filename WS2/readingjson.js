
var fs = require("fs");
// Reading Json data to a variable and outputting the data on console
var data = require('./sampledata.json');
console.log("Original data");
console.log(data);

// Add more data to the JSON object
data.push({
    "name": "John Doe",
    "age": "52",
    "company": "Laurea",
    "address": "Ratatie 22"
});
console.log("Added data");
console.log(data);

// Deleting an array item from data object
delete data[2];

console.log("Deleted data");
console.log(data);