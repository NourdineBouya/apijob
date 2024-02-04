const express = require('express')
const router = express.Router()
 const {getJobs, addJob, getOneJob, deleteJob, updateJob} = require('../controllers/JobsController')


router.get("/jobs" , getJobs)
router.get("/jobs/:id" , getOneJob)
router.post("/addJob" , addJob)
router.delete("/jobs/:id" , deleteJob)
router.put("/jobs/:id" , updateJob)

 

module.exports = router