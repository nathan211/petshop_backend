const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const Customer = require('../models/Customer');

router.post('/', async (req, res) => {
    const { email, password } = req.body;
    console.log(typeof password);
    try {
        const customer = await Customer.findOne({email}).limit(1);
        console.log(customer);
        if(!customer || customer.password !== password)
            return res.status(400).send('Email hoặc mật khẩu không chính xác!');
        
        const token = jwt.sign(
            { info: customer },
            "thisIsAPrivateKey"
        );  
        res.send(token);
    } catch (ex) {
        res.send({message: ex.message});
    }
});

module.exports = router;