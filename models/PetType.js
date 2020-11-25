const mongoose = require('mongoose');

const PetTypeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('PetType', PetTypeSchema);