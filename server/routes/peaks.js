const express = require('express')
const router = express.Router()
const Peak = require('../database/models/peaks')
const passport = require('../passport')

router.get('/', (req, res, next) => {
    const {  user } = req.query

    console.log('===== peaks!!======')

    Peak.find({user: user}, function (err, peaks) {
        console.log(peaks)
        res.send(peaks)
    });
})
 router.delete('/', (req, res)=>{
     console.log(req.query.params)
    Peak.findOneAndRemove({_id: req.query.id}, function (err, peaks) {
        console.log(peaks)
        // res.send('peak removed')
        Peak.find({user: req.query.user}, function (err, peaks) {
            console.log(peaks)
            res.send(peaks)
        });
    })
 })
router.post('/', (req, res) => {
    const { name, height, user } = req.body
    // ADD VALIDATION
    // Peak.findOne({ username: username }, (err, user) => {
    //     if (err) {
    //         console.log('User.js post error: ', err)
    //     } else if (user) {
    //         res.json({
    //             error: `Sorry, already a user with the username: ${username}`
    //         })
    //     }
    //     else {
            const newPeak = new Peak(        {
                "name": name,
                height: height,
                user: user
            },)
            newPeak.save((err, savedUser) => {
                if (err) return res.json(err)
                Peak.find({user: user}, function (err, peaks) {
                    console.log(peaks)
                    res.send(peaks)
                });
                // return res.json(savedUser)
            })
        // }
    // })

})

module.exports = router