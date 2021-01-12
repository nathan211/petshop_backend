const express = require('express');
const router = express.Router();

const Product = require('../models/Product');

router.post('/', async (req, res) => {
    try {
        const { currentPage } = req.body;
        let page = Number(currentPage) || 1;
        const perPage = 5;

        const products = await Product.find().skip(page * perPage - perPage).limit(perPage);
        res.send(products);
    } catch (error) {
        res.send(error.message);
    }
});

router.get('/lowToHigh', async (req, res) => {
    try {
        const products = await Product.find().sort({ price: 1 });
        res.send(products);
    } catch (error) {
        res.send(error.message);
    }
});

router.get('/highToLow', async (req, res) => {
    try {
        const products = await Product.find().sort({ price: -1 });
        res.send(products);
    } catch (error) {
        res.send(error.message);
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

router.post('/filterByCategory', async (req, res) => {
    try {
        const { categoryId, currentPage } = req.body;
        let page = Number(currentPage) || 1;
        const perPage = 2;

        const products = await Product.find({ categoryId }).skip(page * perPage - perPage).limit(perPage);
        res.send(products);
    } catch (ex) {
        res.send({message: ex.message});
    }
});

router.post('/', async (req, res) => {
    try {
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

        const savedProduct = await product.save();
        res.send(savedProduct);
    } catch (error) {
        console.log(error);
    }
});

router.post('/search', async (req, res) => {
    try {
        const { searchTerm } = req.body;
        
        const products = await Product.find({ name: { $regex: new RegExp(searchTerm.toLowerCase(), "i") } })
        res.send(products);
    } catch (error) {
        res.send(error.message);
    }
})

module.exports = router;