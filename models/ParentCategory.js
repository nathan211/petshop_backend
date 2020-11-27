const mongoose = require('mongoose');

const ParentCategorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('ParentCategory', ParentCategorySchema);