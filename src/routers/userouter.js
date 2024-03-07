const express = require('express')
const routerUser = express.Router()
const { getAlluser, deleteUser } = require('../controller/userController')
routerUser.get('/auth', getAlluser)
routerUser.delete('/auth', deleteUser)



module.exports = routerUser