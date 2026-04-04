
// Create a new, empty file using the open() method:

var fs = require('fs');

fs.open('TestFile.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});