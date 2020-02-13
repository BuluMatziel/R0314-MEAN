var fs = require("fs");

fs.unlink('newdata/combinedFiles.txt', (err) => {
  if (err) throw err;
  console.log('combinedFiles.txt was deleted');
});