/* 
Calling JSON API from web and outputting on console
I am using the football data api https://www.football-data.org/
*/
const PORT = process.env.PORT || 5000;
var http = require('http');
var options = {
    "method": "GET",
    "hostname": "api.football-data.org",
    "port": null,
    "path": "/v2/competitions/PL/standings",
    "headers": { 'X-Auth-Token': '3e5e69d396184d22b94ff9c66b3e074f' }
};

http.get(options, function (res) {
    var body = '';

    res.on('data', function (chunk) {
        body += chunk;
    });

    res.on('end', function () {
        var results = JSON.parse(body);

        // Output on browser. Taking the data needed to make a English Premier League league standings table

        http.createServer(function (request, response) {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(
                `<style>
                table {border-collapse: collapse;}
                tr {
                border: 2px solid black;
                padding: 0.2em;
                text-align: center;
              }
                td, th {padding: 0.2em;}
              tr:nth-child(even) {background-color: #e6e6e6;}
                .joukkue {text-align: left;}
                .sijoitus  {
                    border: 2px solid black;
                    font-weight: bold;
                }
              </style>
            <table>
            <tr>
                <th>#</th>
                <th>Joukkue</th>
                <th>OTT</th>
                <th>V</th>
                <th>T</th>
                <th>H</th>
                <th>TM</th>
                <th>PM</th>
                <th>ME</th>
                <th>PIS</th>
            </tr>`);
            // Loop to go through the results and write data to our HTML table
            for (i = 0; i < results.standings[0].table.length; i++) {
                response.write("<tr>");
                response.write("<td class='sijoitus'>" + results.standings[0].table[i].position + "</td>");
                response.write("<td class='joukkue'><img src='" + results.standings[0].table[i].team.crestUrl + "' style='width:16px;height:16px;'> " + results.standings[0].table[i].team.name + "</td>");
                response.write("<td>" + results.standings[0].table[i].playedGames + "</td>");
                response.write("<td>" + results.standings[0].table[i].won + "</td>");
                response.write("<td>" + results.standings[0].table[i].draw + "</td>");
                response.write("<td>" + results.standings[0].table[i].lost + "</td>");
                response.write("<td>" + results.standings[0].table[i].goalsFor + "</td>");
                response.write("<td>" + results.standings[0].table[i].goalsAgainst + "</td>");
                response.write("<td>" + results.standings[0].table[i].goalDifference + "</td>");
                response.write("<td>" + results.standings[0].table[i].points + "</td>");
                response.write("</tr>");
            }
            response.end("</table>");
        })
            .listen(PORT);

    });
}).on('error', function (e) {
    console.log("Got an error: ", e);
});