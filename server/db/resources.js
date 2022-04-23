const connection = require('./connection')

function getResources(db = connection) {
  return db('resources').select()
}

module.exports = {
  getResources,
}
