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

router.post('/', (req, res) => {
  const { headline, skills_summary, location, profile_img, rate, contact } = req.body

  Profile
    .create(headline, skills_summary, location, profile_img, rate, contact)
    .then(profile => res.json(profile))
})

router.delete('/:id', (req, res) => {
  const profileId = req.params.id

  Profile
    .delete(profileId)
    .then(() => res.json({ message: 'deleted successfully'}))
})

module.exports = router