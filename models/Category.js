const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    petTypeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PetType'
    },
    parentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ParentCategory'
    },
});

module.exports = mongoose.model('Category', CategorySchema);