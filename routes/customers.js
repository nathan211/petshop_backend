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
});


router.post('/updateUserInformation', async (req, res) => {
    try {
        const { _id, fullName, address, phoneNumber, email } = req.body;

        const customer = await Customer.findById(_id);

        const newValues = { fullName, address, phoneNumber, email, };

        const updatedCustomer = await Customer.updateOne(customer, newValues);

        res.send(updatedCustomer);
    } catch (error) {
        res.send(error.message);
    }
});

router.post('/updateShippingInformation', async (req, res) => {
    try {
        const { _id, address, phoneNumber } = req.body;

        const customer = await Customer.findById(_id);

        const newValues = { address, phoneNumber, };

        const updatedCustomer = await Customer.updateOne(customer, newValues);

        res.send(updatedCustomer);
    } catch (error) {
        res.send(error.message);
    }
});

router.post('/changePassword', async (req, res) => {
    try {
        const { _id, oldPassword, newPassword } = req.body;

        const customer = await Customer.findById(_id);

        if(customer.password !==  oldPassword){
            return res.status(500).send({ error: "Mật khẩu cũ không chính xác!" });;
        } else {
            const newValues = { password: newPassword };

            const updatedCustomer = await Customer.updateOne(customer, newValues);
            res.send(updatedCustomer);
        }
    } catch (error) {
        res.send(error.message);
    }
});

module.exports = router;
