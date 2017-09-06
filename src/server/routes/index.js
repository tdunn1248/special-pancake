const router = require('express').Router()
const users = require('./user')
const books = require('./book')

router.get('/', (req, res) => {
  res.redirect('/books')
})

router.use('/users', users)
router.use('/books', books)

module.exports = router
