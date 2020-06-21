// create (make)
exports.up = async function (knex) {
  // use async/await to construct all tables in necessary order (based on their dependency)
  return await knex.schema.createTable('users', function (table) {
    table.increments()
    table.string('name')
    table.timestamps()
  })
}

// drop (rollback)
exports.down = async function (knex) {
  return await knex.schema.dropTable('users')
}
