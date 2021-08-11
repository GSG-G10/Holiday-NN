require('env2')('.env');
const express = require('express');
const compression = require('compression');
const path = require('path');

const getOptionData = require('./controllers/data');
const getApiData = require('./controllers/search');

const app = express();
const filePath = path.join(__dirname, '..', 'public');
app.use(compression(filePath));
app.use(express.static(filePath));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const port = process.env.port || 3000;
app.set('port', port);

app.get('/getData', (req, res) => {
  getOptionData(req, res);
});

app.get('/getApi', (req, res) => {
  getApiData(req, res);
});

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});
