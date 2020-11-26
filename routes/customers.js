const express = require('express');
const moment = require('moment');
const router = express.Router();

const Customer = require('../models/Customer');

router.get('/:id', async (req, res) => {
    try {
        const customer = await Customer.findById(req.params.id);
        res.send(customer);
    } catch (ex) {
        res.send({message: ex.message});
    }
});

router.post('/register', async (req, res) => {
    const {
        fullName, 
        // gender, 
        // dayOfBirth, 
        email, 
        password,
        address,
        phoneNumber, 
    } = req.body;

    const customer = new Customer({
        fullName,
        // gender,
        // dayOfBirth: moment(dayOfBirth.split("/").reverse().join("-")).format(),
        email,
        password,
        address,
        phoneNumber,
    });

    try {
        const savedCustomer = await customer.save();
        res.send(savedCustomer);
    } catch (ex) {
        res.send({message: ex.message});
    }
})

module.exports = router;
