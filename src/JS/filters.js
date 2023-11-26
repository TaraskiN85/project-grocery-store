import { getProductsByParams } from './API';
import { appendMarkup } from './markup-product-cards';

const select = document.querySelector('.js-category');
const search_input = document.querySelector('.js-search-input');
const storage_key = 'params-for-fetch';
const params = {
  keyword: '',
  category: '',
  page: 1,
  limit: 9,
};

select.addEventListener('input', changeCategoryInLocal);
search_input.addEventListener('submit', changeKeywordInLocal);

export function renderSelect(categories) {
  const markup = categories
    .map(category => {
      return `<option value="${category}">${category}</option>`;
    })
    .join('');
  select.insertAdjacentHTML('afterbegin', markup);
}

export function fetchBasedOnScreenSize() {
  //   createLocaleStor();
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    params.limit = 6;
    getProductsByParams(params)
      .then(data => appendMarkup(data))
      .catch(er => console.log(er));
  } else if (windowWidth >= 768 && windowWidth < 1440) {
    params.limit = 8;
    getProductsByParams(params)
      .then(data => appendMarkup(data))
      .catch(er => console.log(er));
  } else {
    params.limit = 9;
    getProductsByParams(params)
      .then(data => appendMarkup(data))
      .catch(er => console.log(er));
  }
}

export function checkedForm() {
  const savedParams = localStorage.getItem(storage_key);
  if (savedParams) {
    const parsedData = JSON.parse(savedParams);
    search_input.elements.searchQuery.value = parsedData.keyword ?? '';
    params.keyword = search_input.elements.searchQuery.value;
    select.options[select.selectedIndex].value = parsedData.category ?? '';
    params.category = select.options[select.selectedIndex].value;
  }
}

// function createLocaleStor() {
//   localStorage.setItem(storage_key, JSON.stringify(params));
// }

function changeCategoryInLocal() {
  params.category = select.options[select.selectedIndex].value;
  localStorage.setItem(storage_key, JSON.stringify(params));
  fetchByParams();
}

function changeKeywordInLocal(evt) {
  evt.preventDefault();
  params.keyword = search_input.elements.searchQuery.value;
  localStorage.setItem(storage_key, JSON.stringify(params));
  fetchByParams();
}

function fetchByParams() {
  const savedParams = localStorage.getItem(storage_key);
  const parsedParams = JSON.parse(savedParams);
  getProductsByParams(parsedParams)
    .then(data => appendMarkup(data))
    .catch(er => console.log(er));
}
