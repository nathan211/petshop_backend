const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

router.post('/', async (req, res) => {
    const {
        name,
        price,
        imageUrl,
        description,
        quantity,
        categoryId,
        brandId,
    } = req.body;

    const product = new Product({
        name,
        price,
        imageUrl,
        description,
        quantity,
        categoryId,
        brandId,
    });

    try {
        const savedProduct = await product.save();
        res.send(savedProduct);
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;