const pg = require('pg')


const db = new pg.Pool({
  database: 'wise_skills_db',
  password: 'test'
})

module.exports = db