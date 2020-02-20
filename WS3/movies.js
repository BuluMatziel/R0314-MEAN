// Calling JSON API from web and outputting on console
var http = require('http');
var url = 'http://www.omdbapi.com/?s=Star+Wars&apikey=a93c8ef9&';

http.get(url, function (res) {
    var body = '';

    res.on('data', function (chunk) {
        body += chunk;
    });

    res.on('end', function () {
        var results = JSON.parse(body);
        console.log("Got a response: ", results);

        // Output on browser

        http.createServer(function (request, response) {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write("<table border='1'>");
            response.write("<th>Poster:</th>");
            response.write("<th>Title:</th>");
            response.write("<th>Year:</th>");
            response.write("<th>imdbID:</th>");
            response.write("<th>Type:</th>");
            for (i = 0; i < results.Search.length; i++) {
                response.write("<tr>");
                response.write("<td><img src='" + results.Search[i].Poster + "' style='width:100px;height:150px;'></td>");
                response.write("<td>" + results.Search[i].Title + "</td>");
                response.write("<td>" + results.Search[i].Year + "</td>");
                response.write("<td>" + results.Search[i].imdbID + "</td>");
                response.write("<td>" + results.Search[i].Type + "</td>");
                response.write("</tr>");
            }
            response.end("</table>");
        })
            .listen(8081);

        console.log("Server running at http://127.0.0.1.8081/");
    });
}).on('error', function (e) {
    console.log("Got an error: ", e);
});

/* Other way
const request = require('request');

request('http://www.omdbapi.com/?s=Star+Wars&apikey=a93c8ef9&', { json: true }, function (err, res, body) {
    if (err) { return console.log(err); }
    console.log(body);
})
*/
