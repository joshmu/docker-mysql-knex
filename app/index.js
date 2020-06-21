const knex = require('knex')

knex({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    user: 'root',
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
  },
})
