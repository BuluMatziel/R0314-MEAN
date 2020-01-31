var http = require("http");
http.createServer(function(request, response) {

    if (request.url === '/helloworld'){

        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end('Hello World in html');
        } 
        else if (request.url === '/homepage'){
            response.end('HOMEPAGE');
        } else if (request.url === '/table'){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(
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
                <th>Github</th>
              </tr>
              <tr>
                <td>Matias</td>
                <td>Kohanevic</td>
                <td><a href="url">https://github.com/BuluMatziel/</a></td>
            </table>`)
        } else {
            response.writeHead(200, {'Content-Type': 'text/plain'});

            // Send the response body as "Hello World"
            response.end('Hello World\n');
        }
        

}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1.8081/');