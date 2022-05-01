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
      if (!resource) {
        res.status(404)
      }
      res.json(resource)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// POST /api/v1/resource
router.post('/', (req, res) => {
  const resource = req.body
  const {
    resourceName: resource_name,
    description,
    url,
    image,
    languageLevel: language_level,
    medium,
    cost,
  } = resource
  db.addResource({
    resource_name,
    description,
    url,
    image,
    language_level,
    medium,
    cost,
  })
    .then((ids) => {
      const newResourceId = ids[0]
      return db.getResource(newResourceId)
    })
    .then((newResource) => {
      res.json(newResource)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// DELETE /api/v1/resource
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteResource(id)
    .then(() => {
      return db.getResources()
    })
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
