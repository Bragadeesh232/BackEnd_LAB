const fs = require("fs")
function csvToJson() {
const csv = fs.readFileSync("C:\\Users\\system\\Act.csv")
const array = csv.toString().split("\n")
// first line is list of keys
const keys = array[0].split(';'), res = [];
for (let i = 1; i < array.length; i++) {
// get entries
const entry = array[i].split(';'), obj = {}
// assign keys to values
for (let j = 0; j < keys.length; j++) obj[keys[j]] = entry[j];
res.push(obj)
}
return res;
}
try {
console.log(csvToJson())
} catch (error) {
console.log(error)
}
user.csv
id,name,email,country,age;
100,"Atta Shah","atta@example.com",PK,30;
101,'Alex Jones',"alex@example.com",DE,35;
102,'Jovan Lee','jovan@example.com',FR,25;
103,'Greg Hover','greg@example.com',US,45;
