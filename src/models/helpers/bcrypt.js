const bcrypt = require('bcrypt'),
      saltRounds = 10

module.exports = {
  hash: (password) => {
    return bcrypt.hash(password, saltRounds)
  },
  confirmPassword: (inputtedPassword, hashedPassword) => {
    return bcrypt.compare(inputtedPassword, hashedPassword)
  }
}
