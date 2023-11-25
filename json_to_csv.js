const converter = require('json-2-csv')
const todos = [
{
id: 1,
title: "kamal",
completed: false
},
{
id: 2,
title: "vijay",
completed: false
},
{
id: 3,
title: "rajni",
completed: false
}
]
converter.json2csv(todos, (err, csv) => {
if (err) {
throw err
}
console.log(csv)
})
