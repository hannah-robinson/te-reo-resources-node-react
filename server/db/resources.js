const connection = require('./connection')

function getResources(db = connection) {
  return db('resources').select(
    'id',
    'resource_name'.as('resourceName'),
    'url',
    'image',
    'description',
    'cost',
    'language_level'.as('languageLevel'),
    'medium',
    'free'
  )
}

module.exports = {
  getResources,
}
