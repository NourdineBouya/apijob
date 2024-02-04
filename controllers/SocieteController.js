const Societe = require("../models/societe");

const getSocietes = async (req, res) => {
    const societes = await Societe.find();
    res.status(200).json(societes)
}

const addSociete = async (req, res) => {
    try {
        const { nom, email, contact, motdepasse, adresse, domaine } = req.body

        const newSociete = new Societe({
            nom,
            email,
            contact,
            adresse,
            domaine,
            motdepasse,
            
        })

        const savedSociete = await newSociete.save()
        res.status(200).json(savedSociete)
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getSocietes,
    addSociete
}