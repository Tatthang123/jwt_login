const express = require('express')
const { resgisterUser, loginUser } = require('../controller/authController')
const routerApi = express.Router()
routerApi.post('/auth', resgisterUser)
routerApi.post('/auth1', loginUser)
module.exports = routerApi;