const express = require('express')
const app = express()
const fs = require('fs')
const router = express.Router()

app.use(express.json())
const file_location = './api/resources/products.json'

// GET all products
router.get('/', (req, res) => {
    res.setHeader('Content-Type','text/json')

    fs.readFile(file_location, (err, data) => {
        if(err){
            return res.status(500).send(err)
        }
        res.send(data)
    })
})

const courses = [
    {
        'name':'Tutorial Rust',
        'id':1
    },
    {
        'name':'Tutorial Python',
        'id':2
    }
]

// Get a single product
router.get('/:id', (req, res) => {
    res.setHeader('Content-Type','text/json')

    const course = courses.find( course => course.id === parseInt(req.params.id))
    if (!course) res.status(404).send('Not Found')

    res.send(course)
})

module.exports = router