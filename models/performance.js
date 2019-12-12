const mongoose = require('mongoose');

// Our Schema
const PerformanceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Performance', PerformanceSchema);