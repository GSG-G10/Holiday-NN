fetch('/getData')
  .then((response) => response.json())
  .then((data) => getDataToOptions(data))
  .catch((err) => handleError500());

const getApiData = (country, year) => {
  fetch(`/getApi?country=${country}&year=${year}`)
    .then((response) => response.json())
    .then((data) => getInformationResult(data.response.holidays))
    .catch((err) => handleError404('Maybe you entered the year incorrectly, you have to write it like this (1997), or maybe the country you entered is not available data about the holiday'));
};
