const mongoose = require('mongoose');

// Our Schema
const Schema = mongoose.Schema;
const PerformanceSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    artist: {
        type: String
    },
    stage: {
        type: String
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Performance', PerformanceSchema);