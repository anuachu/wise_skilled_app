const db = require('../db/db')

const Profile = {
  findAll: () => {
    const sql = 'SELECT * FROM profiles'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  }
}

module.exports = Profile