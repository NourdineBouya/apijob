const Job = require("../models/Jobs");


// Get All Jobs
const getJobs = async (req, res) => {
    const jobs = await Job.find();
    res.status(200).json(jobs)
}

//Get One JOb BY ID

const getOneJob =  async (req,res)=>{
    const  job = await Job.findById(req.params.id);
     if(!job){
         return res.status(404).json({msg:"No Job Found"})
     }
     
     res.status(200).json(job)
}

// delete  a Job by its Id

const deleteJob= async (req,res)=>{
    const  job = await Job.findById(req.params.id);
    if(!job){
        return res.status(404).json({msg:"No Job Found"})
    }
    await job.deleteOne();
   res.status(200).json({ msg: "Job has been removed" })
}

// edit a job
const updateJob = async (req, res) =>{
    let job =await Job.findByIdAndUpdate( req.params.id ,{ $set : req.body}, {new:true});
    if (!job) {
        return res.status(404).json({ msg: 'Job not found' });
    }
    res.status(201).json(job);
};

// Create New Job

const addJob = async (req, res) => {
    try {
    const {title, descreption , experience, lieu, contrat , niveau, domaine, salaire} = req.body
    const newJob = new Job({
        title,
        descreption,
        experience,
        lieu,
        domaine,
        contrat,
        niveau,
        salaire
        
    })

    const savedJob = await newJob.save()
    res.status(200).json(savedJob)
} catch (error) {
    console.log(error)
}
}

module.exports = {
    getJobs,
    addJob,
    getOneJob,
    deleteJob,
    updateJob
}