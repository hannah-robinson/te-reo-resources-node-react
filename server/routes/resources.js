const express = require('express')

const db = require('../db/resources')

const router = express.Router()

router.get('/', (req, res) => {
  db.getResources()
    .then((results) => {
      res.json({ resources: results.map((resource) => resource) })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
