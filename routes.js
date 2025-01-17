const express = require('express');
const app = express();

// Import our Page Routes
const artistRoutes = require('./routes/artists');
const stageRoutes = require('./routes/stages');
const sessionRoutes = require('./routes/sessions');
const userRoutes = require('./routes/users');
const performanceRoutes = require('./routes/performances');

// Register our Page Routes with our app
app.use('/artists', artistRoutes);
app.use('/stages', stageRoutes);
app.use('/performances', performanceRoutes);
app.use('/', sessionRoutes);
app.use('/users', userRoutes);


// Export our changes
module.exports = app;