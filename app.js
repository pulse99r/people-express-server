
//create an express object
const express = require('express')
const app = express()
app.use(express.json())
const people = require('./data/people.js')
const peopleController = require('./controllers/people.js')

app.use('/people', peopleController)

app.get('/', (req, res) => {
  res.send('Express Server is up and running!')
})
app.get('*', (req, res) => {
  res.status(400).send('Sorry, requested page not found!')
})

module.exports = app