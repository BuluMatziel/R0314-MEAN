var fs = require("fs");

// Creates ./newdata directory
fs.mkdir('./newdata', { recursive: true }, (err) => {
    if (err) throw err;
    console.log('./newdata was created');
});

/* Deletes ./newdata directory
fs.rmdir('./newdata', function (err) {
    if (err) throw err;
    console.log('./newdata was deleted');
});
*/
