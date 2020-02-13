var fs = require("fs");

// output directory contents to the screen
fs.readdir('.', (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
});