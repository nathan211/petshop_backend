const express = require('express');
const router = express.Router();

const PetType = require('../models/PetType');

router.post('/', async (req, res) => {
    const { name } = req.body;

    const petType = new PetType({name});

    try {
        const savedPetType = await petType.save();
        res.send(savedPetType);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;