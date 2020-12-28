const express = require('express');
const router = express.Router();

const OrderDetails = require('../models/OrderDetails');
const Order = require('../models/Order');
const Product = require('../models/Product');

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

router.get('/:id', async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await Order.findById(orderId);
        const orderDetails = await OrderDetails.find({ orderId });

        const details = [];
        for(const item of orderDetails){
            const product = await Product.findById(item.productId);
            details.push({product, amount: item.amount});
        }

        res.send({details, totalMoney: order.totalMoney});
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;