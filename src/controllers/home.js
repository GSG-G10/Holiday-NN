const express = require('express');
const path = require('path');

const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
  const homeFile = path.join(__dirname, '..', '..', 'public', 'index.html');
  res.sendFile(homeFile);
});

module.exports = homeRouter;
