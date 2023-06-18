const router = require('express').Router();
const { v4: uuidv4 } = require('uuid')
const { readAndAppend, readFromFile, writeToFile } = require('../helpers/fsUtils.js');

router.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

router.post('/', (req, res) => {
    console.log(req.body);

    const { title, text, id } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added`);
    } else {
        console.error(err);
    }
});

module.exports = router