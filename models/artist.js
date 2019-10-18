const mongoose = require('mongoose');

// Our Schema
const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Artist', ArtistSchema);