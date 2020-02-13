var http = require("http");
var fs = fs = require("fs");
// Get content from file
var contents = fs.readFileSync("sampledata.json");
// Define to JSON type
var jsonContent = JSON.parse(contents);

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write("<table border='1'>");
    response.write("<th>Name</th>");
    response.write("<th>Age</th>");
    response.write("<th>Company</th>");
    response.write("<th>Address</th>");
    response.write("</tr>");
    for (i = 0; i < jsonContent.length; i++) {
        response.write("<tr>");
        response.write("<td>" + jsonContent[i].name + "</td>");
        response.write("<td>" + jsonContent[i].age + "</td>");
        response.write("<td>" + jsonContent[i].company + "</td>");
        response.write("<td>" + jsonContent[i].address + "</td>");
        response.write("</tr>");
    }
    response.end("</table>");

})
    .listen(8081);

// Console will print the message
console.log("Server running at http://127.0.0.1.8081/");
