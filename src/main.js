import './JS/pagination';
import { getProductsByParams } from './JS/API';
import { appendMarkup } from './JS/markup-product-cards';
import {
  appendDiscountProductsMarkup,
  appendPopularProductsMarkup,
} from './JS/markup-popular-discount-product-cards';

window.addEventListener('resize', fetchBasedOnScreenSize);
fetchBasedOnScreenSize();

function fetchBasedOnScreenSize() {
  const options = {
    keyword: '',
    page: 2,
    limit: '',
  };
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    options.limit = 6;
    getProductsByParams(options)
      .then(data => appendMarkup(data))
      .catch(er => console.log(er));
  } else if (windowWidth >= 768 && windowWidth < 1440) {
    options.limit = 8;
    getProductsByParams(options)
      .then(data => appendMarkup(data))
      .catch(er => console.log(er));
  } else {
    options.limit = 9;
    getProductsByParams(options)
      .then(data => appendMarkup(data))
      .catch(er => console.log(er));
  }
}

appendPopularProductsMarkup();
appendDiscountProductsMarkup();

import "./JS/modal"
