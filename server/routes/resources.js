const express = require('express')

const db = require('../db/resources')

const router = express.Router()

// GET /api/v1/resources
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

// GET /api/v1/resources/1
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getResource(id)
    .then((resource) => {
      console.log(resource)
      res.json(resource)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// POST /api/v1/resource

module.exports = router
