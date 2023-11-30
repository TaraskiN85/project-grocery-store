import { getProductsByParams } from './API';
import { appendMarkup } from './markup-product-cards';
import { handleSelectChange } from './pagination';

const categoryList = document.querySelector('.js-category-list');
const search_input = document.querySelector('.js-search-input');
const dropDownCatBtn = document.querySelector('.dropdown-categoryBtn');
const categoryInput = document.querySelector('.js-category-input');

const dropDownBtn = document.querySelector('.dropdown-sortingBtn');
const dropDownList = document.querySelector('.js-sorting-list');
const dropDownListItems = dropDownList.querySelectorAll('.js-sorting-item');
const dropDownInput = document.querySelector('.js-sorting-input');

const defaultParams = {
  keyword: '',
  category: '',
  page: 1,
  limit: 6,
};

if (!JSON.parse(localStorage.getItem('search-params'))) {
  localStorage.setItem('search-params', JSON.stringify(defaultParams));
}

search_input.addEventListener('submit', changeKeywordInLocal);

export function renderSelect(categories) {
  const markup = categories
    .map(category => {
      const wordsArray = category.split('_');
      const formattedText = wordsArray.join(' ');
      return `<li class="dropdown-sorting__item js-category-item" data-value="${category}">${formattedText}</li>`;
    })
    .join('');
  categoryList.insertAdjacentHTML('afterbegin', markup);
  const catListItems = document.querySelectorAll('.js-category-item');
  catListItems.forEach(function (listItems) {
    listItems.addEventListener('click', function (e) {
      console.log('dropinner');
      e.stopPropagation();
      dropDownCatBtn.innerText = this.innerText;
      categoryInput.value = this.dataset.value;
      changeCategoryInLocal(categoryInput);
      categoryList.classList.remove('dropdown__list--visible');
    });
  });
  getCategoryInput();
}

export function fetchBasedOnScreenSize() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    const searchParams = JSON.parse(localStorage.getItem('search-params'));
    searchParams.limit = 6;
    localStorage.setItem('search-params', JSON.stringify(searchParams));
    getProductsByParams()
      .then(data => appendMarkup(data))
      .catch(er => console.log(er));
  } else if (windowWidth >= 768 && windowWidth < 1440) {
    const searchParams = JSON.parse(localStorage.getItem('search-params'));
    searchParams.limit = 8;
    localStorage.setItem('search-params', JSON.stringify(searchParams));
    getProductsByParams()
      .then(data => appendMarkup(data))
      .catch(er => console.log(er));
  } else {
    const searchParams = JSON.parse(localStorage.getItem('search-params'));
    searchParams.limit = 9;
    localStorage.setItem('search-params', JSON.stringify(searchParams));
    getProductsByParams()
      .then(data => appendMarkup(data))
      .catch(er => console.log(er));
  }
}

export function checkedForm() {
  const searchParams = JSON.parse(localStorage.getItem('search-params'));
  if (searchParams) {
    search_input.elements.searchQuery.value = searchParams.keyword ?? '';
    categoryInput.value = searchParams.category;
  }
}

function changeCategoryInLocal(info) {
  const searchParams = JSON.parse(localStorage.getItem('search-params'));
  if (info.value === 'All') {
    searchParams.category = '';
    localStorage.setItem('search-params', JSON.stringify(searchParams));
  } else {
    searchParams.category = info.value;
    localStorage.setItem('search-params', JSON.stringify(searchParams));
  }
  getProductsByParams()
    .then(data => appendMarkup(data))
    .catch(er => console.log(er));
    handleSelectChange();
}

function changeKeywordInLocal(evt) {
  evt.preventDefault();
  if (search_input.elements.searchQuery.value === '') {
    const searchParams = JSON.parse(localStorage.getItem('search-params'));
    searchParams.page = 1;
    dropDownCatBtn.innerText = 'Category';
    dropDownBtn.innerText = 'A to Z';
    searchParams.category = '';
    delete searchParams.byPopularity;
    delete searchParams.byPrice;
    delete searchParams.byABC;
    localStorage.setItem('search-params', JSON.stringify(searchParams));
  } else {
    const searchParams = JSON.parse(localStorage.getItem('search-params'));
    searchParams.page = 1;
    console.log('sort');
    delete searchParams.byPopularity;
    delete searchParams.byPrice;
    delete searchParams.byABC;
    searchParams.keyword = search_input.elements.searchQuery.value;
    localStorage.setItem('search-params', JSON.stringify(searchParams));
  }
  getProductsByParams()
    .then(data => appendMarkup(data))
    .catch(er => console.log(er));
}

function getCategoryInput() {
  const searchParams = JSON.parse(localStorage.getItem('search-params'));
  if (searchParams) {
    if (searchParams.category === '') {
      dropDownCatBtn.innerText = 'Category';
    } else {
      categoryInput.value = searchParams.category;
      const wordsArray = categoryInput.value.split('_');
      const formattedText = wordsArray.join(' ');
      dropDownCatBtn.innerText = formattedText;
    }
  }
}

function changeSortingInLocal(sort) {
  const searchParams = JSON.parse(localStorage.getItem('search-params'));
  switch (sort.value) {
    case 'a_z':
      searchParams.byABC = true;
      delete searchParams.byPrice;
      delete searchParams.byPopularity;
      break;

    case 'z_a':
      searchParams.byABC = false;
      delete searchParams.byPrice;
      delete searchParams.byPopularity;
      break;

    case 'cheap':
      searchParams.byPrice = true;
      delete searchParams.byABC;
      delete searchParams.byPopularity;
      break;

    case 'expensive':
      searchParams.byPrice = false;
      delete searchParams.byABC;
      delete searchParams.byPopularity;
      break;

    case 'popular':
      searchParams.byPopularity = true;
      delete searchParams.byPrice;
      delete searchParams.byABC;
      break;

    case 'not_popular':
      searchParams.byPopularity = false;
      delete searchParams.byPrice;
      delete searchParams.byABC;
      break;

    case 'All':
      searchParams.page = 1;
      delete searchParams.byPrice;
      delete searchParams.byPopularity;
      delete searchParams.byABC;
      break;
  }
  localStorage.setItem('search-params', JSON.stringify(searchParams));
  getProductsByParams()
    .then(data => appendMarkup(data))
    .catch(er => console.log(er));
}

// ========Filter Sorting Markup========

// Клик по кнопке. Открыть/Закрыть select
dropDownBtn.addEventListener('click', function (e) {
  dropDownList.classList.toggle('dropdown__list--visible');
  this.classList.add('dropdown__button--active');
});

// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
dropDownListItems.forEach(function (listItem) {
  listItem.addEventListener('click', function (e) {
    e.stopPropagation();
    dropDownBtn.innerText = this.innerText;
    dropDownInput.value = this.dataset.value;
    changeSortingInLocal(dropDownInput);
    dropDownList.classList.remove('dropdown__list--visible');
  });
});

// Клик снаружи дропдауна. Закрыть дропдаун
document.addEventListener('click', function (e) {
  if (e.target !== dropDownBtn) {
    dropDownBtn.classList.remove('dropdown__button--active');
    dropDownList.classList.remove('dropdown__list--visible');
  }
});

// =====Filter Category Markup====

// Клик по кнопке. Открыть/Закрыть select
dropDownCatBtn.addEventListener('click', function (e) {
  console.log('дропліст');
  categoryList.classList.toggle('dropdown__list--visible');
  this.classList.add('dropdown__button--active');
});

// Клик снаружи дропдауна. Закрыть дропдаун
document.addEventListener('click', function (e) {
  console.log('dropout');
  if (e.target !== dropDownCatBtn) {
    dropDownCatBtn.classList.remove('dropdown__button--active');
    categoryList.classList.remove('dropdown__list--visible');
  }
});
