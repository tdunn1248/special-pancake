const DBuser = require('./database/user')
const {hash, confirmPassword} = require('./helpers/bcrypt')
const {assignUserRole} = require('./helpers/role-helpers')

const info = (email) => {
  return DBuser.read(email)
}

const signup = (user, password) => {
  return hash(password)
          .then(hashedPassword => {
            return DBuser.create(user,hashedPassword, assignUserRole(user))
          })
}

const login = (plainpassword, user ) => {
  return confirmPassword(plainpassword, user[0].password)
}

module.exports = {
  info,
  login,
  signup
}
