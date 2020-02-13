var fs = require("fs");

console.log("Program started");

// We'll just give a name of the callback function, but define it later on
fs.readFile('example.txt', results);

for (var i=0; i < 15; i++){
	console.log("Node just keeps on going whiel the file is being read...");
	}
	
// Introduce a function to deal with fileread results
function results(err, data) {
	if (err) return console.error(err);
	console.log("Results of fileread:");
	console.log(data.toString());
}