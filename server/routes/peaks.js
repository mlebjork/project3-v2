const express = require('express')
const router = express.Router()
// const User = require('../database/models/user')
const passport = require('../passport')

router.get('/', (req, res, next) => {
    console.log('===== peaks!!======')
    res.send([
        {
            "name":"one",
            height:"3000"
        },
        {
            "name":"two",
            height:"3100"
        },
        {
            "name":"three",
            height:"3330"
        },
    ])

})

router.post('/', (req, res) => {
    const { name, height } = req.body
    res.send(name)

})

module.exports = router