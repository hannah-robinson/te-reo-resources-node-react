const express = require('express')

const db = require('../db/resources')

const router = express.Router()

// GET /api/v1/resources
router.get('/', (req, res) => {
  db.getResources()
    .then((results) => {
      res.json({ resources: results })
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
        res.status(404).json({ message: 'This page does not exist' })
      }
      res.json(resource)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// POST /api/v1/resources
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
    .then((id) => {
      return db.getResource(id)
    })
    .then((newResource) => {
      res.json(newResource)
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// PATCH /api/v1/resources/1
router.patch('/:id', (req, res) => {
  const id = Number(req.params.id)
  const formData = req.body
  const {
    resourceName: resource_name,
    description,
    url,
    image,
    languageLevel: language_level,
    medium,
    cost,
    free,
  } = formData

  db.updateResource(id, {
    resource_name,
    description,
    url,
    image,
    language_level,
    medium,
    cost,
    free,
  })
    .then(() => {
      return db.getResource(id)
    })
    .then((resource) => {
      res.json(resource)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// DELETE /api/v1/resources/1
router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.deleteResource(id)
    .then(() => {
      return db.getResources()
    })
    .then((results) => {
      res.json({ resources: results })
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
