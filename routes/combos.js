const express = require('express');
const router = express.Router();

const Combo = require('../models/Combo');

router.get('/', async (req, res) => {
    try {
        const combos = await Combo.find();
        res.send(combos);
    } catch (error) {
        res.send(error.message);
    }
});

router.get('/getComboDetails/:id', async (req, res) => {
    try {
        const comboId = req.params.id;
        const combo = await Combo.findById(comboId);
        res.send(combo);
    } catch (error) {
        res.send(error.message);
    }
});

router.post('/', async (req, res) => {
    try {
        const { name, price, imageUrl } = req.body;

        const combo = new Combo({
            name,
            price,
            imageUrl,
        });

        const savedCombo = await combo.save();
        res.send(savedCombo);
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;