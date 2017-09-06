const router = require('express').Router()
const user = require('../../models/user')
const {checkSession} = require('./middleware/session-helpers')

router.route('/login')
  .get((request, response) => {response.status(200).render('users/login')})
  .post((request, response, next) => {
    user.info(request.body.email)
        .then(userInfo => {
          return user.login(userInfo, request.body.password).then(valid => {
            if (!valid) {next()}
            else {
              request.session.userid = userInfo[0].id
              request.session.username = userInfo[0].name
              request.session.role = userInfo[0].role
              response.redirect('/books')
            }
          })
        })
    .catch(next)
})

router.route('/signup')
  .get((request, response) => {response.status(200).render('users/signup')})
  .post((request, response, next) => {
    if(request.body.password !== request.body.confirmPassword) next(new Error("Passwords don't match"))
    else {
    user.signup(request.body.email, request.body.password)
      .then(user => {
        request.session.userid = user.id
        request.session.username = user.name
        request.session.role = user.role
        response.redirect('/books')
      })
      .catch(next)
    }
  })

router.use(checkSession)

router.get('/signout', (request, response) => {
  let signedOutUser = request.session.username
  request.session.userid = null
  request.session.username = null
  request.session.role = null
  response.status(200).render('users/login', {
    message: `Thanks for coming ${signedOutUser}!`
  })
})

router.use((error, request, response, next) => {
  console.log('whoopsie', error);
})

module.exports = router
