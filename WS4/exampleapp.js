var fs = require('fs');
var express = require('express');
var app = express();

// Serving a static file instead of a written message
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

// Listing uder data from a file
app.get('/list', function (req, res) {
    // Read file with some data and display to the user
    res.sendFile(__dirname + "/sample_tabular_data.txt");
});

// Send out the entire raw data
app.get('/jsondata', function (req, res) {
    var data = require('./exampledata2.json');
    res.json(data);
});

// Parse out the details
app.get('/details', function (req, res) {
    var data = require('./exampledata2.json');

    // Parse the results into a variable
    var results = '<table border ="1">'+
    '<tr>'+
    '<th>Name</th>' +
    '<th>Email</th>' +
    '<th>Date</th>' +
    '<th>Company</th>' +
    '</tr>';

    for (var i=0; i < data.length; i++){
        results +=
        '<tr>'+
        '<td>'+ data[i].Name+'</td>'+
        '<td>'+ data[i].Email+'</td>'+
        '<td>'+ data[i].Date+'</td>'+
        '<td>'+ data[i].Company+'</td>'+
        '</tr>';
    }

    res.send(results);
});

// Add data
app.get('/add', function(req, res) {
// Load the existing data from a file
var data = require('./exampledata2.json');

// Create a new JSON object and add it to the existing data variable
data.push({
    "Name": "Matias Kohanevic",
    "Company": "Laurea",
    "Email": "matiaskohanevic.gmail.com",
    "Date": "27/2/2020"
});

// Convert the JSON object to a string format
var jsonStr = JSON.stringify(data);

// Write data to a file
fs.writeFile('exampledata2.json', jsonStr, (err) => {
    if (err) throw err;
    console.log('It\'s saved!');
});

    res.send('Saved the data to a file. Browse to /details to see the contents of the file.');
});

// The 404 route (ALWAYS keep this as the last route)
app.get('*', function(req, res) {
    res.send('Cant find the requested page', 404);
});

app.listen(8080, function() {
    console.log('Example app listening on port 8080!');
});