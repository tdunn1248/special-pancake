const db = require('./config/dbconfig')

const read = (email) => {
  let query = `
    SELECT
      *
    FROM
      users
    WHERE name = $1
    `
  return db.any(query, [email])
}

const create = (user, password, role) => {
  let query = `
    INSERT INTO
      users(name, password, role)
    VALUES
      ($1, $2, $3)
    RETURNING
      *
  `
  return db.one(query, [user, password, role])
}

module.exports = {
  read,
  create
}
