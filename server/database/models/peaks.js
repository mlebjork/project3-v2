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



// Define schema methods
// userSchema.methods = {
// 	checkPassword: function (inputPassword) {
// 		return bcrypt.compareSync(inputPassword, this.password)
// 	},
// 	hashPassword: plainTextPassword => {
// 		return bcrypt.hashSync(plainTextPassword, 10)
// 	}
// }

// Define hooks for pre-saving
// userSchema.pre('save', function (next) {
// 	if (!this.password) {
// 		console.log('models/user.js =======NO PASSWORD PROVIDED=======')
// 		next()
// 	} else {
// 		console.log('models/user.js hashPassword in pre save');
		
// 		this.password = this.hashPassword(this.password)
// 		next()
// 	}
// })

const Peak = mongoose.model('Peaks', peaksSchema)
module.exports = Peak