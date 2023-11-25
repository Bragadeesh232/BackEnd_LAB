var fs = require('fs');
console.log("Opening the file and reading the file content....")
fs.readFile('input.txt', 'utf-8', function(err, data) {
if( !err )
fs.writeFile('writeMe.txt', data, (err)=>{
if( err ) {
throw err;
}
});
else
throw err;
});
console.log("File written successfully!!")
