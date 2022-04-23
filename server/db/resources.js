const connection = require('./connection')

function getResources(db = connection) {
  return db('resources').select(
    '*',
    'resource_name as resourceName',
    'language_level as languageLevel'
  )
}

module.exports = {
  getResources,
}
