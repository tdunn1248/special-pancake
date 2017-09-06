const express = require('express')
const app = express()
const routes = require('./server/routes')
const middleware = require('./server/routes/middleware/middleware')

app.set('view engine', 'pug')
app.set('views', __dirname + '/views')

app.use('/', middleware)
app.use('/', routes)

const port = process.env.PORT || 3005
app.listen(port, () => {console.log(`Server running on ${port}`)})
