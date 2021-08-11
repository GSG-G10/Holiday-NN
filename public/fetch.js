fetch('/getData')
  .then((response) => response.json())
  .then((data) => getDataToOptions(data));

const getApiData = () => {
  fetch('/getApi')
    .then((response) => response.json())
    // .then((data) => getInformationResult(data));
};

fetch('/getApi?country=US&year=2020')
.then((response) => response.json())
.then((data) => console.log(data))