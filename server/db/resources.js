const connection = require('./connection')

// Read
function getResources(db = connection) {
  return db('resources').select(
    'id',
    'resource_name as resourceName',
    'url',
    'image',
    'description',
    'cost',
    'language_level as languageLevel',
    'medium',
    'free'
  )
}

function getResource(id, db = connection) {
  return db('resources').select().where('id', id).first()
}

// Create
function addResource(resource, db = connection) {
  return db('resources').insert(resource)
}

// Update

// Delete
// function deleteResource(id, db = connection) {
//   return db('resources').del().where('id', id)
// }

module.exports = {
  getResources,
  getResource,
  addResource,
  // deleteResource,
}
