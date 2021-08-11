const express = require('express');

const homeRouter = express.Router();

homeRouter.get('/', (req, res) => {
  res.send('HOMEEEE');
});

module.exports = homeRouter;
