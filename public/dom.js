const showDataDev = document.querySelector('.show-data');
const selectTag = document.querySelector('#country');
const submit = document.querySelector('.row-sumbit');
const year = document.querySelector('#year');

const createAndAppend = (elementTag, parentNode, className, textShow) => {
  const nodeDom = document.createElement(elementTag);
  nodeDom.classList.add(className);
  nodeDom.textContent = textShow;
  parentNode.appendChild(nodeDom);
  return nodeDom;
};

const getOption = (elementTag, parentNode, attribute, valueAtt, textShow) => {
  const nodeDom = document.createElement(elementTag);
  nodeDom.setAttribute(attribute, valueAtt);
  nodeDom.textContent = textShow;
  parentNode.appendChild(nodeDom);
};

const getInformationResult = (arr) => {
  arr.forEach((element) => {
    const subRow = createAndAppend('div', showDataDev, 'sub-row');
    const nameHoliday = createAndAppend('p', subRow, 'name', element.name);
    const dateHoliday = createAndAppend('p', subRow, 'date', element.date.iso);
  });
};

const getDataToOptions = (obj) => {
  const arrResult = Object.keys(obj);
  arrResult.forEach((ele) => {
    getOption('option', selectTag, 'value', ele, obj[ele]);
  });
};

submit.addEventListener('click', () => getApiData(selectTag.value, year.value));
