const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')

// models
const User = require('../models/user')

// routes
router.post('/', (req, res) => {
  const { name, email, password } = req.body

  // using bcrypt to create password digest

  const passwordDigest = bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)

  User
    .create(name, email, passwordDigest)
    .then(userName => {
      if(password.length >= 8){
        res.json(userName)
      }else{
        res.status(400).json({error: 'Your password must be at least 8 characters long'})
      }
      
    })
})


module.exports = router