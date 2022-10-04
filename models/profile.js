const db = require('../db/db')

const Profile = {
  findAll: () => {
    const sql = 'SELECT * FROM profiles'

    return db
      .query(sql)
      .then(dbRes => dbRes.rows)
  },

  create: (headline, skills_summary, location, profile_img, rate, contact) => {
    const sql = `
      INSERT INTO profiles(headline, skills_summary, location, profile_img, rate, contact)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `
    return db
      .query(sql, [headline, skills_summary, location, profile_img, rate, contact])
      .then(dbRes => dbRes.rows[0])
  
  }
}



module.exports = Profile