import './JS/pagination';
import {
  getProductsByParams,
  getProductsCategories,
  getProductById,
} from './JS/API';
import { appendMarkup } from './JS/markup-product-cards';
import {
  appendDiscountProductsMarkup,
  appendPopularProductsMarkup,
} from './JS/markup-popular-discount-product-cards';

window.addEventListener('resize', fetchBasedOnScreenSize);
const options = {
  keyword: '',
  category: '',
  page: 1,
  limit: 6,
};
fetchBasedOnScreenSize();

function fetchBasedOnScreenSize() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    options.limit = 6;
    localStorage.setItem('search-params', JSON.stringify(options));
    getProductsByParams()
      .then(data => appendMarkup(data))
      .catch(er => console.log(er));
  } else if (windowWidth >= 768 && windowWidth < 1440) {
    options.limit = 8;
    localStorage.setItem('search-params', JSON.stringify(options));
    getProductsByParams()
      .then(data => appendMarkup(data))
      .catch(er => console.log(er));
  } else {
    options.limit = 9;
    localStorage.setItem('search-params', JSON.stringify(options));
    getProductsByParams()
      .then(data => appendMarkup(data))
      .catch(er => console.log(er));
  }
}

appendPopularProductsMarkup();
appendDiscountProductsMarkup();
getProductsCategories();
const cartProducts = JSON.parse(localStorage.getItem('cart-products-list'));
if (!cartProducts) {
  localStorage.setItem('cart-products-list', JSON.stringify([]));
}

const prodId = '640c2dd963a319ea671e383b';

const getObjById = async () => {
  const data = await getProductById(prodId);
  console.log(data);
};
getObjById();

import './JS/modal';
