const express = require('express');
const router = express.Router();

const Order = require('../models/Order');
const OrderDetails = require('../models/OrderDetails');

router.post('/', async (req, res) => {
    const { customerId, totalMoney } = req.body;

    const order = new Order({
        customerId, 
        totalMoney,
    });

    try {
        const savedOrder = await order.save();
        res.send(savedOrder);
    } catch (error) {
        console.log(error.message);
    }

});

router.get('/latestOrder/:id', async (req, res) => {
    const customerId = req.params.id;
    
    try {
        const latestOrder = await Order.findOne({ customerId }).sort({createdDate: -1});
        res.send(latestOrder);
    } catch (error) {
        console.log(error.message);
    }
});

router.get('/getAllOrdersByCustomerId/:id', async (req, res) => {
    try {
        const customerId = req.params.id;
        const orders = await Order.find({ customerId });


        const output = [];
        for(const order of orders){
            const orderDetails = await OrderDetails.find({ orderId: order._id });
            console.log(orderDetails.length);
            const orderClone = {
                order,
                cartCounter: orderDetails.length
            };
           output.push(orderClone);
        }

        res.send(output);
    } catch (error) {
        console.log(error.message);
    }
});

module.exports = router;