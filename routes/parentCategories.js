const express = require('express');
const router = express.Router();

const ParentCategory = require('../models/ParentCategory');

router.post('/', async (req, res) => {
    const { name } = req.body;
    const parentCategory = new ParentCategory({ name });

    try {
        const savedParentCategory = await parentCategory.save();
        res.send(savedParentCategory);
    } catch (ex) {
        console.log({message: ex.message});
    }
});

module.exports = router;