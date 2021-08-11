require('env2')('.env');
const express = require('express');
const searchRouter = require('./controllers/search');
const dataRouter = require('./controllers/data');

const app = express();
const port = process.env.port || 8080;

app.use(express.static('public'));
app.use('/getApi', searchRouter);
app.use('/getData', dataRouter);

app.listen(port, () => {
  console.log(`server is running on: http://localhost:${port}`);
});
