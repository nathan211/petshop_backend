const express = require('express');
const router = express.Router();

const Category = require('../models/Category');

router.post('/', async (req, res) => {
    const { name, petTypeId } = req.body;

    const category = new Category({ name, petTypeId });

    try {
        const savedCategory = await category.save();
        res.send(savedCategory);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;