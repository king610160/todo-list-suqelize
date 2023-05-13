const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const methodOverride = require('method-override')
const bcrypt = require('bcryptjs')
const routes = require('./routes')
const db = require('./models')

const Todo = db.Todo
const User = db.User

const app = express()
const PORT = 3000
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')
app.use(express.urlencoded({extended : true}))
app.use(methodOverride('_method'))

app.use(routes)

app.listen(PORT, () => {
    console.log(`App is listening on http://localhost:${PORT}`)
})