// Imports
const express = require('express');
const path = require('path')
const api = require('./routes/htmlRoutes.js');
const PORT = process.env.PORT || 3001;
const app = express();

// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use(express.static('public'));

// GET request handler
app.get('/notes', (req, res) => 
    res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// Wildcard handles undefined routes
app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/index.html'))
);

// Port
app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT}`)
);