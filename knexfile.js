// Update with your config settings.
require('dotenv').config()

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: process.env.MYSQL_DATABASE,
      user: 'root',
      password: process.env.MYSQL_ROOT_PASSWORD,
      port: process.env.MYSQL_PORT,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: 'db/migrations',
      tableName: 'knex_migrations',
    },
  },
}
