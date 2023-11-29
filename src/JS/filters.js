import { getProductsByParams } from './API';
import { appendMarkup } from './markup-product-cards';
import Choices from 'choices.js';
// import 'choices.js/public/assets/styles/base.min.css';
// import 'choices.js/public/assets/styles/choices.min.css';

const select = document.querySelector('.js-category');
export const sorting = document.querySelector('.js-sorting');
const search_input = document.querySelector('.js-search-input');
const storage_key = 'search-params';
const params = {
  keyword: '',
  category: '',
  page: 1,
  limit: 9,
};

select.addEventListener('input', changeCategoryInLocal);
sorting.addEventListener('input', changeSortingInLocal);
search_input.addEventListener('submit', changeKeywordInLocal);

export function renderSelect(categories) {
  const markup = categories
    .map(category => {
      const wordsArray = category.split('_');
      const formattedText = wordsArray.join(' ');
      return `<option value="${category}">${formattedText}</option>`;
    })
    .join('');
  select.insertAdjacentHTML('afterbegin', markup);
  getCategoryInput();
  const choicesCategory = new Choices(select, {
    searchEnabled: false,
    itemSelectText: '',
    allowHTML: true,
    shouldSort: false,
  });
}

export function fetchBasedOnScreenSize() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    params.limit = 6;
    localStorage.setItem(storage_key, JSON.stringify(params));
    getProductsByParams()
      .then(data => appendMarkup(data))
      .catch(er => console.log(er));
  } else if (windowWidth >= 768 && windowWidth < 1440) {
    params.limit = 8;
    localStorage.setItem(storage_key, JSON.stringify(params));
    getProductsByParams()
      .then(data => appendMarkup(data))
      .catch(er => console.log(er));
  } else {
    params.limit = 9;
    localStorage.setItem(storage_key, JSON.stringify(params));
    getProductsByParams()
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

function changeCategoryInLocal() {
  const options = JSON.parse(localStorage.getItem('search-params'));
  if (select.option.value === 'All') {
    options.category = '';
    options.page = 1;
  } else {
    options.category = select.option.value;
  }
  localStorage.setItem(storage_key, JSON.stringify(options));
  getProductsByParams()
    .then(data => appendMarkup(data))
    .catch(er => console.log(er));
}

function changeKeywordInLocal(evt) {
  evt.preventDefault();
  const options = JSON.parse(localStorage.getItem('search-params'));
  options.keyword = search_input.elements.searchQuery.value;
  localStorage.setItem(storage_key, JSON.stringify(options));
  getProductsByParams()
    .then(data => appendMarkup(data))
    .catch(er => console.log(er));
}

function getCategoryInput() {
  const savedParams = localStorage.getItem(storage_key);
  const parsedData = JSON.parse(savedParams);
  for (let i = 0; i < select.options.length; i++) {
    if (select.options[i].value === parsedData.category) {
      select.options[i].selected = true;
      break;
    }
  }
}

function changeSortingInLocal() {
  const options = JSON.parse(localStorage.getItem('search-params'));
  switch (sorting.options[sorting.selectedIndex].value) {
    case 'a_z':
      options.byABC = true;
      delete options.byPrice;
      delete options.byPopularity;
      break;

    case 'z_a':
      options.byABC = false;
      delete options.byPrice;
      delete options.byPopularity;
      break;

    case 'cheap':
      options.byPrice = true;
      delete options.byABC;
      delete options.byPopularity;
      break;

    case 'expensive':
      options.byPrice = false;
      delete options.byABC;
      delete options.byPopularity;
      break;

    case 'popular':
      options.byPopularity = true;
      delete options.byPrice;
      delete options.byABC;
      break;

    case 'not_popular':
      options.byPopularity = false;
      delete options.byPrice;
      delete options.byABC;
      break;

    case 'All':
      options.page = 1;
      delete options.byPrice;
      delete options.byPopularity;
      delete options.byABC;
      break;
  }
  localStorage.setItem(storage_key, JSON.stringify(options));
  getProductsByParams()
    .then(data => appendMarkup(data))
    .catch(er => console.log(er));
}
