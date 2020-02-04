var http = require("http");
http
  .createServer(function(request, response) {
    // Send the HTTP header. HTTP Status: 200 = OK
    // Content Type: text/plain
    response.writeHead(200, { "Content-Type": "text/html" });

    response.write("<h1>What's up woorld?</h1><br>");
    // Making a table
    // Use `<code here>` to write multiple lines of html
    response.write(
      `<style>
    table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
    }
    </style>
    <table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td><a href="url">https://github.com/</a></td>
    <td>80</td>
  </tr>
</table>`
    );
    // Send the response body as "Hello World"
    response.end("Hello World\n");
  })
  .listen(8081);

// Console will print the message
console.log("Server running at http://127.0.0.1.8081/");
