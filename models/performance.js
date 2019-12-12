const mongoose = require('mongoose');
const Artist = require("../models/artist");
const Stage = require("../models/stage");



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