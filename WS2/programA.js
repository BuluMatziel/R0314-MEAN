var fs = require("fs");

console.log("program started");
var data = fs.readFileSync('./example_txts/example.txt');
console.log(data.toString());

for (var i = 0; i < 15; i++) {
	console.log("Node just keeps on going whiel the file is being read...");
}

console.log("Program ended");