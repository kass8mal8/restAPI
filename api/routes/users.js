const express = require('express')
const router = express.Router()
const fs = require('fs')
const {v4 : uuidv4} = require('uuid')

router.use(express.json())
const file_location = './api/resources/users.json'

// GET request
router.get('/', (req, res) => {
    res.setHeader('Content-Type','text/json')

    fs.readFile(file_location, (err, data) => {
        if(err){
            return res.status(500).send(err)
        }
        res.send(data)

    })

})

// POST request
router.post('/', (req, res) => {
    res.setHeader('Content-Type','text/json')

    fs.readFile(file_location, (err, data) => {
        if(err){
            return res.status(500).send(err)
        }

        const user = req.body
        const users = JSON.parse(data)
        users.push(user)

        fs.writeFile(file_location, JSON.stringify(users), err => {
            if(err){
                return res.status(500).send(err)
            }

            res.json({
                message:'user added successfully'
            })


        })
    })
})

module.exports = router