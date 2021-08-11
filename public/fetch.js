fetch('/search')
  .then((response) => response.json())
  .then((data) => getDataToOptions(data));
