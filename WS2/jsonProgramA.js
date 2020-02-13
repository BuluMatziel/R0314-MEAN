
var fs = require("fs");

// Get content from file
var contents = fs.readFileSync("sampledata.json");
// Define to JSON type
var jsonContent = JSON.parse(contents);
// Get Value from JSON
for (i = 0; i < jsonContent.length; i++) {
    console.log("Name:", jsonContent[i].name);
    console.log("Age:", jsonContent[i].age);
    console.log("Company:", jsonContent[i].company);
    console.log("Address:", jsonContent[i].address);
}