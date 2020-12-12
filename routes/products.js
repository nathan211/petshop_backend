const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (ex) {
        res.send({message: ex.message});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.send(product);
    } catch (ex) {
        res.send({message: ex.message});
    }
});

router.post('/', async (req, res) => {
    const {
        name,
        price,
        imageUrl,
        description,
        quantity,
        cartCounter,
        categoryId,
        brandId,
    } = req.body;

    const product = new Product({
        name,
        price,
        imageUrl,
        description,
        quantity,
        cartCounter,
        categoryId,
        brandId,
    });

    try {
        const savedProduct = await product.save();
        res.send(savedProduct);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;