const router = require('express').Router();
const { v4: uuidv4 } = require('uuid')
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils.js');

router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});
