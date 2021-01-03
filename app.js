const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const customers = require('./routes/customers');
const auth = require('./routes/auth');
const products = require('./routes/products');
const petTypes = require('./routes/petTypes');
const categories = require('./routes/categories');
const brands = require('./routes/brands');
const parentCategories = require('./routes/parentCategories');
const orders = require('./routes/orders');
const orderDetails = require('./routes/orderDetails');
const bookings = require('./routes/bookings');
const combos = require('./routes/combos');

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to the DB!');
})

app.use(express.json());
app.use(express.static('public'));
app.use('/api/customers', customers);
app.use('/api/auth', auth);
app.use('/api/products', products);
app.use('/api/pettypes', petTypes);
app.use('/api/categories', categories);
app.use('/api/brands', brands);
app.use('/api/parentcategories', parentCategories);
app.use('/api/orders', orders);
app.use('/api/orderDetails', orderDetails);
app.use('/api/bookings', bookings);
app.use('/api/combos', combos);


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));