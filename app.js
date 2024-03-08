const express = require('express')
const app = express()
const router = express.Router()
const contactRoutes = require('./routes/contacts')
const todoRoutes = require('./routes/todos')
const userRoutes = require('./routes/users')

// Routes middlewares
app.use('/contacts', contactRoutes)
app.use('/todos', todoRoutes)
app.use('/users', userRoutes)

module.exports = app