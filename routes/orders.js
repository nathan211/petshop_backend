const express = require('express');
const router = express.Router();

const Order = require('../models/Order');
const OrderDetails = require('../models/OrderDetails');
const Product = require('../models/Product');

router.post('/', async (req, res) => {
    const { customerId, totalMoney } = req.body;

    const order = new Order({
        customerId, 
        totalMoney,
        status: 2
    });

    try {
        const savedOrder = await order.save();
        res.send(savedOrder);
    } catch (error) {
        console.log(error.message);
    }

});

router.get('/latestOrder/:id', async (req, res) => { 
    try {
        const customerId = req.params.id;
        
        const latestOrder = await Order.findOne({ customerId }).sort({createdDate: -1});
        res.send(latestOrder);
    } catch (error) {
        res.send(error.message);
    }
});

router.get('/getAllOrdersByCustomerId/:id', async (req, res) => {
    try {
        const customerId = req.params.id;
        const orders = await Order.find({ customerId }).sort({ createdDate: -1 });

        const output = [];
        for(const order of orders){
            const orderDetails = await OrderDetails.find({ orderId: order._id });

            const product = await Product.findById(orderDetails[0].productId);

            const imageUrl = product.imageUrl;

            const orderTemp = {
                order,
                cartCounter: orderDetails.length,
                imageUrl
            };
           output.push(orderTemp);
        }

        res.send(output);
    } catch (error) {
        console.log(error.message);
    }
});

router.post('/getOrdersByStatus', async (req, res) => {
    try {
        const {customerId, status} = req.body;

        const orders = await Order.find({ customerId, status }).sort({ createdDate: -1 });

        const output = [];
        for(const order of orders){
            const orderDetails = await OrderDetails.find({ orderId: order._id });

            const product = await Product.findById(orderDetails[0].productId);

            const imageUrl = product.imageUrl;

            const orderTemp = {
                order,
                cartCounter: orderDetails.length,
                imageUrl,
            };
           output.push(orderTemp);
        }

        res.send(output);
    } catch (error) {
        res.send(error.message);
    }
});

router.post('/cancelOrder', async (req, res) => {
    try {
        const { orderId } = req.body;
        const order = await Order.findById(orderId);

        const newValues = { status: 5 };

        const updatedOrder = await Order.updateOne(order, newValues);
        res.send(updatedOrder);
    } catch (error) {
        res.send(error.message);
    }
});

module.exports = router;