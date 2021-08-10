const showDataDev = document.querySelector(".show-data");

const createAndAppend = (elementTag, x, className, value) => {
  const nodeDom = document.createElement(elementTag);
  nodeDom.classList.add(className);
  nodeDom.textContent = value;
  x.appendChild(nodeDom);
  return nodeDom;
};

const subRow = createAndAppend('div', showDataDev, 'sub-row');

const getInformation = (arr) => {
  arr.forEach((element) => {
    const nameHoliday = createAndAppend('p', subRow, 'name', element.name);
    const dateHoliday = createAndAppend('p', subRow, 'date', element.date.iso);
  });
};
