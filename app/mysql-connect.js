require('dotenv').config()

console.log(process.env.MYSQL_ROOT_PASSWORD)

var mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'localhost',
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
})

connection.connect(() => console.log('connected!'))

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error
//   console.log('The solution is: ', results[0].solution)
// })

connection.end()
