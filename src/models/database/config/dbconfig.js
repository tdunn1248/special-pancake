const pgp = require('pg-promise')()
require('dotenv').config()
let connectionString

(process.env.NODE_ENV === 'development') ?
connectionString = process.env.DATABASE_URL :
connectionString = process.env.TEST_DATABASE_URL

const db = pgp(connectionString)

module.exports = db
