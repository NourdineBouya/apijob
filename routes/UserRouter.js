const express = require('express')
const router = express.Router()
const {getUsers , addUser} = require('../controllers/UserController')


router.get("/users" , getUsers)
router.post("/addUser" , addUser)

 




module.exports = router