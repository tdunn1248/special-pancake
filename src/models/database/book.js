const db = require('./config/dbconfig')

const create = (title, author, genre) => {
  let query = (`
    INSERT INTO
      books(title, author, genre)
    VALUES
      ($1, $2, $3)
    RETURNING
      *
  `)
  return db.one(query, [title, author, genre]).catch(error => error)
}

const removeBook = (id) => {
  let query = `
    DELETE FROM
      books
    WHERE
      id = $1
  `
  return db.one(query, [id]).catch(error => error)
}

const readById = (id) => {
  let query = `
    SELECT
      *
    FROM
      books
    WHERE
      id = $1
    LIMIT 1
  `
  return db.one(query, [id]).catch(error => error)
}

const readAll = () =>  {
  let query = `
    SELECT
      *
    FROM
      books
  `
  return db.any(query)
}

const read10 = () =>  {
  let query = `
    SELECT
      *
    FROM
      books
    LIMIT 10
  `
  return db.any(query)
}

const searchFor = (searched) => {
  searched
  let query = `
    SELECT
      *
    FROM
      books
    WHERE
      lower(title || ' ' || author || ' ' || genre) LIKE $1::text
    LIMIT 10
    `
  return db.any(query,[`%${searched.toString().toLowerCase().replace(/\s+/,'%')}%`])
}

const updateTitle = (id, title) => {
  let query = (`
    UPDATE
      books
    SET title = $2
    WHERE id = $1
    RETURNING *
  `)
  return db.one(query, [id, title])
}

const updateAuthor = (id, author) => {
  let query = (`
    UPDATE
      books
    SET author = $2
    WHERE id = $1
    RETURNING *
  `)
  return db.one(query, [id, author])
}

const updateGenre = (id, genre) => {
  let query = (`
    UPDATE
      books
    SET genre = $2
    WHERE id = $1
    RETURNING *
  `)
  return db.one(query, [id, genre])
}

module.exports = {
  create,
  removeBook,
  readAll,
  read10,
  readById,
  searchFor,
  updateTitle,
  updateAuthor,
  updateGenre
}
