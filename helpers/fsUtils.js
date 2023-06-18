// Imports
const fs = require('fs');
const util = require('util');

// Promisifying readFile function
const readFromFile = util.promisify(fs.readFile);

// Writes note to a specified destination
const writeToFile = (destination, content) => {
    fs.writeFile(destination, JSON.stringify(content, null, 4), (err) => {
        if (err) {
            console.error(err);
        }
    });
};

// Reads notes and appends new content
const readAndAppend = (content, file) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if(err) {
            console.error(err);
        } else {
            const jsonParse = JSON.parse(data);
            jsonParse.push(content);
            writeToFile(file, jsonParse);
        }
    });
};

// Exports
module.exports = { readFromFile, writeToFile, readAndAppend };