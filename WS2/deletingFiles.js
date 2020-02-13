var fs = require("fs");

fs.unlink('combinedFiles.txt', (err) => {
    if (err) throw err;
    console.log('combinedFiles.txt was deleted');
  });