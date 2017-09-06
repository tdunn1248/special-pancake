DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS books;

CREATE TABLE users (
  id BIGSERIAL,
  name VARCHAR(100),
  password VARCHAR(100),
  role VARCHAR(100)
);

CREATE TABLE books (
  id BIGSERIAL,
  title VARCHAR(100),
  author VARCHAR(100),
  genre VARCHAR(100),
  ISBN VARCHAR(12)
);