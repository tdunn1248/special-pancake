const router = require('express').Router()
const books = require('../../models/book')
const {checkSession} = require('./middleware/session-helpers')
const {capitalize} = require('./helpers/helpers')

router.use(checkSession)

router.get('/', (request, response, next) => {
  books.grab10()
  .then(books => {
    response.render('books/index', {
      books,
      user: request.session.username,
      role: request.session.role,
      message: `Welcome, ${request.session.username}!`
    })
  })
  .catch(next)
})

router.route('/add')
  .get((request, response, next) => {
    response.render('books/createBook', {
      books, user: request.session.username,
       role: request.session.role
     })
  })
  .post((request, response, next) => {
    books.add(request.body.title, request.body.author, request.body.genre)
    .then(book => {
      response.render('books/createBook', {
        user: request.session.username,
        role: request.session.role,
        message: `${capitalize(book.title)} by ${capitalize(book.author)} has been added!`
      })
    })
    .catch(next)
  })

router.get('/search/:searchTerm', (request, response, next) => {
  books.searchFor(request.query.searchTerm)
  .then(books => {
    response.status(200).render('books/index', {
      books,
      user: request.session.username,
      role: request.session.role
    })
  })
  .catch(next)
})

// use future role checker middle ware here

router.get('/:bookId', (request, response, next) => {
  books.readById(request.params.bookId)
  .then(book => {
    response.status(200).render('books/single-view', {
      book,
      user: request.session.username
    })
  })
})

router.post('/delete/:bookId', (request, response, next) => {
  books.deleteBook(parseInt(request.params.bookId))
    .then(console.log)
})

router.use(function(error) {
  console.log('whooooop', error);
})

module.exports = router
