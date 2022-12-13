const express = require('express')
const app = express()
const usersRoute = require('./api/routes/users')
const productsRoute = require('./api/routes/products')

app.use('/users', usersRoute)
app.use('/products', productsRoute)

module.exports = app