import { getProductsByParams } from './API';
import { appendMarkup } from './markup-product-cards';

const select = document.querySelector('.js-category');
// const sorting = document.querySelector('.dropdown__input-hidden');
const search_input = document.querySelector('.js-search-input');
const defaultParams = {
  keyword: '',
  category: '',
  page: 1,
  limit: 6,
};

const searchParams = JSON.parse(localStorage.getItem('search-params'));

select.addEventListener('input', changeCategoryInLocal);
// sorting.addEventListener('input', changeSortingInLocal);
search_input.addEventListener('submit', changeKeywordInLocal);

export function renderSelect(categories) {
  const markup = categories
    .map(category => {
      return `<option value="${category}">${category}</option>`;
    })
    .join('');
  select.insertAdjacentHTML('afterbegin', markup);
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
    select.options[select.selectedIndex].value = searchParams.category ?? '';
  }
}

function changeCategoryInLocal() {
  const searchParams = JSON.parse(localStorage.getItem('search-params'));
  if (select.options[select.selectedIndex].value === 'All') {
    sorting.selectedIndex = 0;
    select.selectedIndex = select.options.length - 1;
    localStorage.setItem('search-params', JSON.stringify(defaultParams));
  } else {
    searchParams.category = select.options[select.selectedIndex].value;
    localStorage.setItem('search-params', JSON.stringify(searchParams));
  }
  getProductsByParams()
    .then(data => appendMarkup(data))
    .catch(er => console.log(er));
}

function changeKeywordInLocal(evt) {
  evt.preventDefault();
  if (search_input.elements.searchQuery.value === '') {
    const searchParams = JSON.parse(localStorage.getItem('search-params'));
    searchParams.page = 1;
    sorting.selectedIndex = 0;
    searchParams.sorting = '';
    // select.selectedIndex = select.options.length - 1;
    localStorage.setItem('search-params', JSON.stringify(searchParams));
  } else {
    const searchParams = JSON.parse(localStorage.getItem('search-params'));
    searchParams.page = 1;
    searchParams.keyword = search_input.elements.searchQuery.value;
    localStorage.setItem('search-params', JSON.stringify(searchParams));
  }
  getProductsByParams()
    .then(data => appendMarkup(data))
    .catch(er => console.log(er));
}

function getCategoryInput() {
  for (let i = 0; i < select.options.length; i++) {
    if (select.options[i].value === searchParams.category) {
      select.options[i].selected = true;
      break;
    }
  }
}

function changeSortingInLocal(sort) {
  console.log('Hi');
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

// ========Filter Markup========
document
  .querySelectorAll('.dropdown-wrapper')
  .forEach(function (dropDownWrapper) {
    const dropDownBtn = dropDownWrapper.querySelector('.dropdown-sortingBtn');
    const dropDownList = dropDownWrapper.querySelector(
      '.dropdown-sorting__list'
    );
    const dropDownListItems = dropDownList.querySelectorAll(
      '.dropdown-sorting__item'
    );
    const dropDownInput = dropDownWrapper.querySelector(
      '.dropdown__input-hidden'
    );

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
  });
