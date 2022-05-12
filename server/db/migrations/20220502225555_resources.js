/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('resources', (table) => {
    table.increments('id').primary()
    table.string('resource_name')
    table.string('url')
    table.string('image')
    table.string('description')
    table.string('cost')
    table.string('language_level')
    table.string('medium')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('resources')
}
