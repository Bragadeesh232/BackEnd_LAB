// OpenCloseFile
const fs = require("fs");

console.log("Opening file!");

// input.txt:
// this is sample input file.

fs.open('input.txt', 'r+', function(err, fd) {
  if (err) {
    return console.error(err);
  }

  console.log("File open successfully");

  // Close the opened file
  fs.close(fd, function(err) {
    if (err) {
      return console.error(err);
    }
    console.log("File closed successfully");
  });
});
