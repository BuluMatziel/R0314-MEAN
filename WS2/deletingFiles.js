var fs = require("fs");

// Deleting a text file
fs.unlink('newdata/combinedFiles.txt', (err) => {
  if (err) throw err;
  console.log('combinedFiles.txt was deleted');
});