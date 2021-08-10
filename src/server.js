const express = require('express');
const compression = require('compression');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('port', 3000);

const filePath = path.join(__dirname, '..', 'public');

app.use(compression(filePath));
app.use(express.static(filePath));

app.listen(app.get('port'), () => {
  console.log(`http://localhost:${app.get('port')}`);
});
