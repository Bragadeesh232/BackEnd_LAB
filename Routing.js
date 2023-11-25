const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
app.get('/', (req, res) => {
res.send('hello world')
})
app.get('/about', (req, res) => {
res.send('this is about page ')
})
app.get('/todos', (req, res) => {
fs.readFile('./todos.json', 'utf-8', (err, data) => {
let todos = JSON.parse(data)
res.send(todos)
})
})
app.get('/todos/:id', (req, res) => {
fs.readFile('./todos.json', 'utf-8', (err, data) => {
let todos = JSON.parse(data)
let index = todos.findIndex(todo => {
return todo.id == req.params.id
})
let todo = todos[index]
res.send(todo)
})
})
app.listen(port, () => {
console.log('app listen to port', port)
})
//todos
[
{
"id": 1,
"task": "Learn new things"
},
{
"id": 2,
"task": "Explore ExpressJS"
},
{
"id": 3,
"task": "Create a request response app"
}]
