const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const bcrypt = require('bcryptjs');
mongoose.promise = Promise

// Define userSchema
const peaksSchema = new Schema({

	name: { type: String, unique: false, required: true },
    height: { type: Number, unique: false, required: true },
    user: {type: String, unique: false, required: true},
    date: {type: String, unique: false, required: true},
    notes: {type: String, unique: false, required: false},

})

const Peak = mongoose.model('Peaks', peaksSchema)
module.exports = Peak