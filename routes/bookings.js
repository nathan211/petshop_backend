const express = require('express');
const router = express.Router();

const Booking = require('../models/Booking');

router.post('/', async (req, res) => {
    const { bookedDate, bookedTime, comboId, totalMoney } = req.body;

    const booking = new Booking({bookedDate, bookedTime, comboId, totalMoney});

    try {
        const savedBooking = await booking.save();
        res.send(savedBooking);
    } catch (error) {
        
    }
})

router.post('/findSelectedDate', async (req, res) => {
    try {
        const { selectedDate } =  req.body;
        
        const bookings = await Booking.find({ bookedDate: selectedDate });
        res.send(bookings);
    } catch (error) {
        console.log(error.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find().sort({ bookedDate: -1 });
        res.send(bookings);
    } catch (error) {
        console.log(error.message);
    }
});
 
module.exports = router;