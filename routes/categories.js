const express = require('express');
const router = express.Router();

const Category = require('../models/Category');

router.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.send(categories);
    } catch (ex) {
        console.log({message: ex.message});
    }
});

router.post('/', async (req, res) => {
    const { name, petTypeId, parentId } = req.body;

    const category = new Category({ name, petTypeId, parentId });

    try {
        const savedCategory = await category.save();
        res.send(savedCategory);
    } catch (error) {
        console.log(error.message);
    }
});

router.get('/getCategoryByParentId/:id', async (req, res) => {
    const parentId = req.params.id;

    try {
        const categories = await Category.find({ parentId });
        res.send(categories);
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;