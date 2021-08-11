const express = require('express');
const searchRouter = require('./controllers/search');
const homeRouter = require('./controllers/home');

const app = express();
const port = process.env.port || 8080;

app.use(express.static('public'));
app.use('/search', searchRouter);
app.use('/', homeRouter);

app.listen(port, () => {
  console.log(`server is running on: http://localhost:${port}`);
});
