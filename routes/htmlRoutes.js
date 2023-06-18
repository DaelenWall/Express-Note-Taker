const express = require('express');
const router = require('./apiRoutes');

const app = express();

app.use('/notes', router);

module.exports = app