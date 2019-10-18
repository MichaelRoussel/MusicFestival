const express = require('express');
const app = express();

// Import our Page Routes
const pageRoutes = require('./routes/pages');
const artistRoutes = require('./routes/artists');


// Register our Page Routes with our app
app.use('/', pageRoutes);
app.use('/artists', artistRoutes);


// Export our changes
module.exports = app;