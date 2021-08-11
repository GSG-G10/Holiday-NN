require('env2')('.env');
const express = require('express');
const compression = require('compression');
const path = require('path');

const searchRouter = require('./controllers/search');
const dataRouter = require('./controllers/data');

const app = express();

app.use(compression('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const port = process.env.port || 3000;
app.set('port', port);
app.use(express.static('public'));
app.use('/getApi', searchRouter);
app.use('/getData', dataRouter);

app.use((req, res, next) => {
  const filePath = path.join(__dirname, '..', 'public', 'Error404.html');
  res.status(404).sendFile(filePath);
});

app.use((err, req, res, next) => {
  const filePath = path.join(__dirname, '..', 'public', 'Error500.html');
  res.status(500).sendFile(filePath);
});

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});
