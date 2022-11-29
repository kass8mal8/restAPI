const express = require('express')
const router = express.Router()
const fs = require('fs')
const { v4 :uuidv4 } = require('uuid')

const products = []
router.use(express.json())

// get request for sending products to client

router.get('/', (req, res) => {
    res.setHeader('Content-Type','text/json')
    
    // read the file and send products to client
    fs.readFile('./Routes/Pages/products.json', (err, data) => {
        if(err) return console.log(err.message);
        res.send(data)
    })
})


// post request for adding new products to stock

router.post('/', (req, res) => {
    res.setHeader('Content-Type','text/plain')
    
    // capture new product 
    const product = {
        name: req.body.name,
        id: uuidv4(),
        price: req.body.price
    }

    products.push(product)
})

module.exports = router