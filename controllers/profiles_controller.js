const express = require('express')
const router = express.Router()

// models
const Profile = require('../models/profile')

// routes
router.get('/', (req, res) => {
  Profile
    .findAll()
    .then(profiles => res.json(profiles))
})

module.exports = router