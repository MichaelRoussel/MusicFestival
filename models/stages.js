const mongoose = require('mongoose');

// Our Schema
const StageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Stage', StageSchema);