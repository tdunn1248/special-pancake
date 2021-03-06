const DBbook = require('./database/book')

const grabAll = () => {
  return DBbook.readAll()
}

const grab10 = () => {
  return DBbook.read10()
}

const readById = (id) => {
  return DBbook.readById(id)
}
const add = (title, author, genre) => {
  return DBbook.create(title, author, genre)
}

const searchFor = (query) => {
  return DBbook.searchFor(query)
}

const updateTitle = (id, title) => {
  return DBbook.updateTitle(id, title)
}

const updateAuthor = (id, author) => {
  return DBbook.updateAuthor(id, author)
}

const updateGenre = (id, genre) => {
  return DBbook.updateGenre(id, genre)
}

const deleteBook = (id) => {
  return DBbook.removeBook(id)
}

module.exports = {
  add,
  grabAll,
  grab10,
  readById,
  searchFor,
  deleteBook,
  updateTitle,
  updateAuthor,
  updateGenre
}
