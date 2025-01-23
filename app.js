require('dotenv').config()

const express = require('express')
const session = require('express-session')
const helmet = require('helmet')
const path = require('path')
const routes = require('./src/routes/routes.js')

const app = express()
const port = process.env.PORT || 3000

// Session Middleware
app.use(session({
  secret: process.env.APP_KEY,
  resave: false,
  saveUninitialized: false,
  cookie: { 
      httpOnly: true, 
      sameSite: 'strict', 
      secure: false 
  } 
}))

// Helmet Protection
app.use(helmet())

// Middleware JSON
app.use(express.json())

// Middleware Form HTML (x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }))

// Static Assets
app.use(express.static(path.join(__dirname, 'public')))

// EJS Engine Template
app.set('view engine', 'ejs')

// Folder Views
app.set('views', path.join(__dirname, 'src/views'))

// Routes
app.use('/', routes)

// Init Server
app.listen(port, () => {
  console.log(`Server Running on http://localhost:${port}`)
})