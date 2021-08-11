fetch('/getData')
  .then((response) => response.json())
  .then((data) => getDataToOptions(data));
