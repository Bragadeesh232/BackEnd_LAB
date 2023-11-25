// input.txt:
// This is a sample text.

//  Read
var fs = require("fs");
var buf = new Buffer(1024);
console.log("opening an existing file");
fs.open('input.txt', 'r+', function(err, fd) 
{
 if (err) {
 return console.error(err);
 }
 console.log("File opened successfully!");
 console.log("reading the file");
 
 fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
 if (err){
 console.log(err);
 }
 console.log(bytes + " bytes read\n\nThe file content is:\n");
 
 // Print only read bytes to avoid junk.
 if(bytes > 0){
 console.log(buf.slice(0, bytes).toString());
 }
 }
 );
});
