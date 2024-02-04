const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
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
    motdepasse : {
        type: String,
        required: true
    },
    
})

const User = mongoose.model("User", usersSchema)
module.exports = User 
