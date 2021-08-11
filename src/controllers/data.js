const fs = require('fs');
const path = require('path');

const getOptionData = (req, res) => {
  const pathJsonDataa = path.join(__dirname, '..', 'data.json');
  fs.readFile(pathJsonDataa, (err, data) => {
    if (err) {
      throw new TypeError('ERROR SERVER 500');
    } else {
      res.send(data);
    }
  });
};
module.exports = getOptionData;
