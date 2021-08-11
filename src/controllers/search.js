const express = require('express');

const searchHandler = express.Router();

searchHandler.get('/', (req, res) => {
  res.send('Search');
});

module.exports = searchHandler;
