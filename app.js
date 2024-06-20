
//create an express object
const express = require('express');

//create the express router object
const app = express()

// the .use method allows us to the json method
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Express Server is up and running!')
})

module.exports = app