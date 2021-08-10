const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const filePath = path.join(__dirname, '..', 'public');
app.use(express.static(filePath));

app.listen(3000, () => {
  console.log('http://localhost:3000');
});
