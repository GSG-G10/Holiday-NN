require('env2')('.env');
const express = require('express');
const compression = require('compression');

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

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});

app.use((req, res, next) => {
  res.status(404).sendFile('HTMLPAGEERROR404');
});

app.use((err, req, res, next) => {
  res.status(500).sendFile('HTMLPAGEERROR500');
});
