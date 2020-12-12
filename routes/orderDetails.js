const express = require('express');
const router = express.Router();

const OrderDetails = require('../models/OrderDetails');

router.post('/', async (req, res) => {
    const { 
        orderId,
        productId,
        amount
    } = req.body;

    const orderDetails = new OrderDetails({
        orderId,
        productId,
        amount,
    })

    try {
        const savedOrderDetails = await orderDetails.save();
        res.send(savedOrderDetails);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;