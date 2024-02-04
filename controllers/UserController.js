const User = require("../models/users");

const getUsers = async (req, res) => {
    const users = await User.find();
    res.status(200).json(users)
}

const addUser = async (req, res) => {
    try {
        const { nom, email, contact, motdepasse } = req.body

        const newUser = new User({
            nom,
            email,
            contact,
            motdepasse,
            
        })

        const savedUser = await newUser.save()
        res.status(200).json(savedUser)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getUsers,
    addUser
}