const mongoose = require('mongoose');

const PetSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    typeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PetType'
    }
});

module.exports = mongoose.model('Pet', PetSchema);