const express = require('express');
const fetch = require('node-fetch');
require('env2')('.env');

const searchHandler = express.Router();
const apiKey = process.env.API_KEY;

searchHandler.get('/', (req, res) => {
  fetch(`https://calendarific.com/api/v2/holidays?api_key=${apiKey}&country=us&year=2019`)
    .then((response) => response.json())
    .then((data) => res.json(data.response.holidays));
});

module.exports = searchHandler;
