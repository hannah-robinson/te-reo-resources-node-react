const express = require('express')
const req = require('express/lib/request')
const path = require('path')

const server = express()

const resourceRoutes = require('./routes/resources')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('api/v1/resources', resourceRoutes)
module.exports = server
