const mongoose = require('mongoose')
const userScema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 6,
        maxlength: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    admin: {
        type: Boolean,
        default: false
    },

},
    { timestamps: true }
)
const User = mongoose.model('user', userScema)
module.exports = User;