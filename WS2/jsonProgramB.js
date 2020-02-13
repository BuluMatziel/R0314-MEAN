
var fs = require("fs");

// Get content from file
var contents = fs.readFileSync("sampledata.json");
// Define to JSON type
var jsonContent = JSON.parse(contents);
// Get Value from JSON
console.log("<table border='1'>");
console.log("<th>Name</th>");
console.log("<th>Age</th>");
console.log("<th>Company</th>");
console.log("<th>Address</th>");
console.log("</tr>");
for (i = 0; i < jsonContent.length; i++) {
    console.log("<tr>");
    console.log("<td>Name:", jsonContent[i].name + "</td>");
    console.log("<td>Age:", jsonContent[i].age + "</td>");
    console.log("<td>Company:", jsonContent[i].company + "</td>");
    console.log("<td>Address:", jsonContent[i].address + "</td>");
    console.log("</tr>");
}
console.log("</table>");