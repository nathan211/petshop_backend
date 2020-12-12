const mongoose = require('mongoose');

const OrderDetailsSchema = mongoose.Schema({
    orderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order'
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    amount: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('OrderDetails', OrderDetailsSchema)