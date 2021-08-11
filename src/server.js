const express = require('express');
const compression = require('compression');
const path = require('path');
const fs = require('fs');
require('env2')('.env');

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

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});
