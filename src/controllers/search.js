const express = require('express');
const fetch = require('node-fetch');
const url = require('url');

const searchHandler = express.Router();
const apiKey = process.env.API_KEY;

searchHandler.get('/', (req, res) => {
  const urlObj = url.parse(req.url);
  const queryObj = urlObj.query.split('&');
  const country = queryObj[0];
  const year = queryObj[1];
  const url1 = `https://calendarific.com/api/v2/holidays?&api_key=${apiKey}&${country}&${year}`;

  fetch(url1)
    .then((response) => response.text())
    .then((response) => res.send(response));
});

module.exports = searchHandler;
