const express = require('express')
const router = express.Router()
const pug = require('pug')
const bodyParser = require('body-parser')
const session = require('express-session')

router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.static('public'))

router.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  maxAge: 300000,
  cookie: {

  }
}))

router.use((request, response, next) => {
  // response.locals.query = ''
  response.locals.user = null
  response.locals.role = null
  next()
})

module.exports = router
