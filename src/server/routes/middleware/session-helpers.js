module.exports = {
  assignUserSession: (user) => {
    request.session.role = user.role
  },
  checkSession: (request, response, next) => {
    if (!request.session.userid) {
      response.render('users/login')
    }
    else {
      // check what role
      // mo
      next()
    }
  }
}
