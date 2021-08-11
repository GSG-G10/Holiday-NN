const express = require('express');
const path = require('path');
const fs = require('fs');

const dataRouter = express.Router();

dataRouter.get('/', (req, res) => {
  console.log('1111111111111111111111111111111111111111111111111111111')
  const dataFile = path.join(__dirname, '..', 'data.json');
  fs.readFile(dataFile, (err, data) => {
    if (err) {
      throw new TypeError('ERROR SERVER 500');
    } else {
      res.send(data);
    }
  });
});

module.exports = dataRouter;
