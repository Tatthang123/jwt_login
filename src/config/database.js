const mongoose = require('mongoose')
require('dotenv').config()
const connection = async () => {
    try {
        await mongoose.connect(process.env.MONGOO_URL);
        console.log("Connect suscess")
    } catch (error) {
        console.log(error)
    }
}
module.exports = connection