// Imports
const express = require('express');
const router = require('./apiRoutes');

// Instantiating express app
const app = express();

// Associating router with notes routes
app.use('/notes', router);

// Exports
module.exports = app