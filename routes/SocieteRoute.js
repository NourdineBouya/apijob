const express = require('express')
const router = express.Router()
const { getSocietes , addSociete} = require('../controllers/SocieteController')


router.get("/societes" , getSocietes)
router.post("/addSociete" , addSociete)

 

module.exports = router