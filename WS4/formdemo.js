var fs = require('fs');
var express = require('express');
var app = express();

// A function for formatting a date to dd-mm-yy
function formatDate(d)
{
    //get the month
    var month = d.getMonth();
    //get the day
    //convert day to string
    var day = d.getDate().toString();
    //get the year
    var year = d.getFullYear();
    
    //pull the last two digits of the year
    year = year.toString().substr(-2);
    
    //increment month by 1 since it is 0 indexed
    //converts month to a string
    month = (month + 1).toString();

    //if month is 1-9 pad right with a 0 for two digits
    if (month.length === 1)
    {
        month = "0" + month;
    }

    //if day is between 1-9 pad right with a 0 for two digits
    if (day.length === 1)
    {
        day = "0" + day;
    }

    //return the string "MMddyy"
    return day + "-" + month + "-" + year;
}

// Require the module required for using form data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Serve a form to the user
app.get('/adduser', function (req, res) {
    res.sendFile(__dirname + '/public/adduser.html');
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
app.post('/adduser', function(req, res) {
// Load the existing data from a file
var data = require('./exampledata2.json');
//new date
var d = new Date();

// Create a new JSON object and add it to the existing data variable
data.push({
    "Name": req.body.Name,
    "Company": req.body.Company,
    "Email": req.body.Email,
    "Date": formatDate(d)
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

app.listen(8080, function() {
    console.log('Example app listening on port 8080!');
});