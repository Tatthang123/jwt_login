const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 3000
const connection = require('./config/database')
const webRouter = require('./routers/auth')
const webUser = require('./routers/userouter')
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true }));
app.use('/', webRouter)
app.use('/', webUser)
connection()
app.listen(port, () => {
    console.log(`Backend roadmap run in ${port}`)
})