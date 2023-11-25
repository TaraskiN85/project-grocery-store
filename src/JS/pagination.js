
import Pagination from 'tui-pagination';
import { getProductsByParams } from './API';
import { appendMarkup } from './markup-product-cards';

const container = document.getElementById('pagination');

const totalItems = 600;
const itemsPerPage = 9;
const keyword = '';
const category = '';

const pagination = new Pagination(container, {
  totalItems,
  itemsPerPage,
  visiblePages: 3,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
    firstPage: '<a href="#" class="tui-page-btn tui-first-child"><<</a>',
    lastPage: '<a href="#" class="tui-page-btn tui-last-child">>></a>',
    prevPage: '<a href="#" class="tui-page-btn tui-prev"><</a>',
    nextPage: '<a href="#" class="tui-page-btn tui-next">></a>',
  },
});

const prevButton = container.querySelector('.tui-prev');
const nextButton = container.querySelector('.tui-next');
const firstButton = container.querySelector('.tui-first');
const lastButton = container.querySelector('.tui-last');

prevButton.textContent = '\u2039';
nextButton.textContent = '\u203A';
firstButton.textContent = '\u00AB';
lastButton.textContent = '\u00BB';

pagination.on('afterMove', function (eventData) {
  const currentPage = eventData.page;

  async function fetchData(pageNum) {
    try {
      const options = {
        keyword,
        category,
        page: pageNum,
        limit: itemsPerPage,
      };
      const data = await getProductsByParams(options);
      appendMarkup(data);
      const prevButton = container.querySelector('.tui-prev');
      const nextButton = container.querySelector('.tui-next');
      const firstButton = container.querySelector('.tui-first');
      const lastButton = container.querySelector('.tui-last');

      prevButton.textContent = '\u2039';
      nextButton.textContent = '\u203A';
      firstButton.textContent = '\u00AB';
      lastButton.textContent = '\u00BB';
    } catch (error) {
      console.error(error);
    }
  }
  fetchData(currentPage);
});
