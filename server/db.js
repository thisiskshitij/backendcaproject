const Pool = require('pg').Pool
require('dotenv').config()

const pool = new Pool({
  user: 'todo_1uns_user',
  password: 'X9SpfszYoo19qIxisZTP5djecn6N78UH',
  host: 'dpg-colbus8l5elc73fcnamg-a',
  port: 5432,
  database: 'todo_1uns'
})

module.exports = pool