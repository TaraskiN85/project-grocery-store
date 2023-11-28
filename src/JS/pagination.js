import Pagination from 'tui-pagination';
import { getProductsByParams } from './API';
import { appendMarkup } from './markup-product-cards';

const container = document.getElementById('pagination');

const options = JSON.parse(localStorage.getItem('search-params'));
getProductsByParams(options)
  .then(data => {
    const totalPages = data.totalPages;
    const itemsPerPage = options.limit;
    const totalItems = itemsPerPage * totalPages;
    const numCardsResult = data.results.length;

    if (numCardsResult !== itemsPerPage) {
      return;
    }

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
      },
    });

    pagination.on('afterMove', function (eventData) {
      const currentPage = eventData.page;
      async function fetchDataPagination(pageNum) {
        try {
          const options = JSON.parse(localStorage.getItem('search-params'));
          options.page = pageNum;
          localStorage.setItem('search-params', JSON.stringify(options));
          const data = await getProductsByParams(options);
          appendMarkup(data);
        } catch (error) {
          console.error(error);
        }
      }
      fetchDataPagination(currentPage);
    });
  })
  .catch(er => console.log(er));

document
  .querySelector('.category-input')
  .addEventListener('change', handleSelectChange);

function handleSelectChange() {
  container.innerHTML = '';
  const selectedValue = document.querySelector('.category-input');
  const newOptions = JSON.parse(localStorage.getItem('search-params'));
  getProductsByParams(newOptions)
    .then(data => {
      const totalPages = data.totalPages;
      const itemsPerPage = options.limit;
      const totalItems = itemsPerPage * totalPages;
      const numCardsResult = data.results.length;
      if (numCardsResult !== itemsPerPage) {
        return;
      }
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
        },
      });
    })
    .catch(er => console.log(er));
}



document
  .querySelector('.js-search-input')
  .addEventListener('change', handlInputChange);

function handlInputChange(event) {
  event.preventDefault();
  container.innerHTML = '';

  const newOptions = JSON.parse(localStorage.getItem('search-params'));
  getProductsByParams(newOptions)
    .then(data => {
      const totalPages = data.totalPages;
      const itemsPerPage = options.limit;
      const totalItems = itemsPerPage * totalPages;
      const numCardsResult = data.results.length;
      if (numCardsResult !== itemsPerPage) {
        return;
      }
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
        },
      });
    })
    .catch(er => console.log(er));
}
