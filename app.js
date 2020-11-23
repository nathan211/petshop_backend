const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const customers = require('./routes/customers');
const auth = require('./routes/auth');

mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to the DB!');
})

app.use(express.json());
app.use('/api/customers', customers);
app.use('/api/auth', auth);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));