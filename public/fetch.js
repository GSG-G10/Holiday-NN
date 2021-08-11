fetch('/getData')
  .then((response) => response.json())
  .then((data) => getDataToOptions(data));

const getApiData = (country, year) => {
  fetch(`/getApi?country=${country}&year=${year}`)
    .then((response) => response.json())
    .then((data) => getInformationResult(data.response.holidays));
};
