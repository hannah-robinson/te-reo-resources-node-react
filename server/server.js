const express = require('express')
const path = require('path')

const server = express()

const resourceRoutes = require('./routes/resources')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/resources', resourceRoutes)
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
}) // '/add' route doesn't work without this

module.exports = server
