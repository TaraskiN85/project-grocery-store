import Pagination from 'tui-pagination';
import { getProductsByParams } from './API';
import { appendMarkup } from './markup-product-cards';
import icons from '../img/icons.svg';

const container = document.getElementById('pagination');

const options = JSON.parse(localStorage.getItem('search-params'));

getProductsByParams(options)
  .then(data => {
    const page = data.page;
    let totalPages = data.totalPages;
    const itemsPerPage = options.limit;
    const totalItems = itemsPerPage * totalPages;

    if (totalPages <= 1) {
      return;
    }
    const pagination = new Pagination(container, {
      totalItems,
      itemsPerPage,
      visiblePages: 3,
      page,
      centerAlign: true,
      firstItemClassName: 'tui-first-child',
      lastItemClassName: 'tui-last-child',
      template: {
        page: '<a href="#" class="tui-page-btn">{{page}}</a>',
        currentPage:
          '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
        moveButton:
          '<a href="#" class="tui-page-btn tui-{{type}}">' +
          '<svg width="14" height="14">' +
          `<use class="tui-btn-icon" href="${icons}#{{type}}"></use>` +
          '</svg>' +
          '</a>',
        disabledMoveButton:
          '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
          '<svg width="14" height="14">' +
          `<use class="tui-btn-icon" href="${icons}#{{type}}"></use>` +
          '</svg>' +
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
      scrollToFilters()
    });
  })
  .catch(er => console.log(er));


export function handleSelectChange() {
  container.innerHTML = '';
  const newOptions = JSON.parse(localStorage.getItem('search-params'));

  getProductsByParams(newOptions)
    .then(data => {
      let totalPages = data.totalPages;
      const itemsPerPage = options.limit;
      const totalItems = itemsPerPage * totalPages;

      if (totalPages <= 1) {
        return;
      }

      const pagination = new Pagination(container, {
        totalItems,
        itemsPerPage,
        visiblePages: 3,
        page: 1,
        centerAlign: true,
        firstItemClassName: 'tui-first-child',
        lastItemClassName: 'tui-last-child',
        template: {
          page: '<a href="#" class="tui-page-btn">{{page}}</a>',
          currentPage:
            '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
          moveButton:
            '<a href="#" class="tui-page-btn tui-{{type}}">' +
            '<svg width="14" height="14">' +
            `<use class="tui-btn-icon" href="${icons}#{{type}}"></use>` +
            '</svg>' +
            '</a>',
          disabledMoveButton:
            '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
            '<svg width="14" height="14">' +
            `<use class="tui-btn-icon" href="${icons}#{{type}}"></use>` +
            '</svg>' +
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
        scrollToFilters()
      });
    })
    .catch(er => console.log(er));
    
}


export function handlInputChange() {
  event.preventDefault();

  container.innerHTML = '';

  const newOptions = JSON.parse(localStorage.getItem('search-params'));
  getProductsByParams(newOptions)
    .then(data => {
      let totalPages = data.totalPages;
      const itemsPerPage = options.limit;
      const totalItems = itemsPerPage * totalPages;

      if (totalPages <= 1) {
        return;
      }

      const pagination = new Pagination(container, {
        totalItems,
        itemsPerPage,
        visiblePages: 3,
        page: 1,
        centerAlign: true,
        firstItemClassName: 'tui-first-child',
        lastItemClassName: 'tui-last-child',
        template: {
          page: '<a href="#" class="tui-page-btn">{{page}}</a>',
          currentPage:
            '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
          moveButton:
            '<a href="#" class="tui-page-btn tui-{{type}}">' +
            '<svg width="14" height="14">' +
            `<use class="tui-btn-icon" href="${icons}#{{type}}"></use>` +
            '</svg>' +
            '</a>',
          disabledMoveButton:
            '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
            '<svg width="14" height="14">' +
            `<use class="tui-btn-icon" href="${icons}#{{type}}"></use>` +
            '</svg>' +
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
        scrollToFilters()
      });
    })
    .catch(er => console.log(er));
}

function scrollToFilters() {
  const scrollUp = document.querySelector(".catalog-container"); 
    if (scrollUp) {
      scrollUp.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  }