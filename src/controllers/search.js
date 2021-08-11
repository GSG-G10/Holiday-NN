const url = require('url');
const fetchNode = require('node-fetch');

const getApiData = (req, res) => {
  const urlObj = url.parse(req.url);
  const queryObj = urlObj.query.split('&');
  const country = queryObj[0];
  const year = queryObj[1];
  const url1 = `https://calendarific.com/api/v2/holidays?&api_key=${process.env.api_key}&${country}&${year}`;

  fetchNode(url1)
    .then((response) => response.text())
    .then((response) => res.send(response));
};

module.exports = getApiData;
