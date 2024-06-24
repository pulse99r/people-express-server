const express = require('express')
const peopleController = express.Router()
const people = require('../data/people')
// import people from '../data/people.js'


// Index
peopleController.get('/', (req, res) => {
  // res.send(people)
  const {id, name, age, gender, city, isActive} = people;
  console.log(id, name, age, gender, city, isActive)
  
  try {
    const users = people.forEach(user =>{
      return user
    })
    console.log(users)
    res.status(200).json(users)
  } catch (error){
    res.status(400).json({error: 'Server not responding'})
  }
})

// Show
// Create
// Update
// Delete

module.exports = peopleController;