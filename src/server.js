require('env2')('.env');
const express = require('express');
const compression = require('compression');
const path = require('path');
const fs = require('fs');

const url = require('url');

const fetchNode = require('node-fetch');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const port = process.env.port || 3000;
app.set('port', port);

const filePath = path.join(__dirname, '..', 'public');

app.use(compression(filePath));
app.use(express.static(filePath));

const pathJsonDataa = path.join(__dirname, 'data.json');
app.get('/getData', (req, res) => {
  fs.readFile(pathJsonDataa, (err, data) => {
    if (err) {
      throw new TypeError('ERROR SERVER 500');
    } else {
      res.send(data);
    }
  });
});

app.get('/getApi', (req, res) => {
  const urlObj = url.parse(req.url);
  const queryObj = urlObj.query.split('&');
  const country = queryObj[0];
  const year = queryObj[1];
  const url1 = `https://calendarific.com/api/v2/holidays?&api_key=${process.env.api_key}&country=${country}&year=${year}`;

  fetchNode(url1)
    .then((response) => response.text())
    .then((response) => res.send(response));
});

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});
