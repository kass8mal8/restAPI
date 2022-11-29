const express = require('express')
const app = express()
const productsRoute = require('./Routes/Api/products')
const usersRoute = require('./Routes/Api/users')

app.use('/producs', productsRoute)
app.use('./users', usersRoute)

module.exports = app