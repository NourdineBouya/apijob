const mongoose = require('mongoose')

const societesSchema = new mongoose.Schema({
    nom : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    contact : {
        type: String,
        required: true
    },
    domaine : {
        type: String,
        required: true
    },
    adresse : {
        type: String,
        required: true
    },
    motdepasse : {
        type: String,
        required: true
    },
    
})

const Societe = mongoose.model("Societe", societesSchema)
module.exports = Societe 
