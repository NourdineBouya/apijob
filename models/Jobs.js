const mongoose = require('mongoose')

const jobschema = new mongoose.Schema({
    title : {
        type: String,
        required: true
    },
    descreption : {
        type: String,
        required: true
    },
    experience : {
        type: String,
        required: true
    },
    domaine : {
        type: String,
        required: true
    },
    niveau : {
        type: String,
        required: true
    },
    salaire : {
        type: String,
        required: true
    },
    contrat : {
        type: String,
        required: true
    },
    lieu : {
        type: String,
        required: true
    },
    
},
{timestamps:true}
)

const Job = mongoose.model("Job", jobschema)
module.exports = Job 
