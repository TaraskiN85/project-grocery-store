import './JS/pagination';
import {
  appendDiscountProductsMarkup,
  appendPopularProductsMarkup,
} from './JS/markup-popular-discount-product-cards';
import {
  renderSelect,
  fetchBasedOnScreenSize,
  checkedForm,
} from './JS/filters';
import { getProductsCategories } from './JS/API';

window.addEventListener('resize', fetchBasedOnScreenSize);
checkedForm();
fetchBasedOnScreenSize();
getProductsCategories()
  .then(data => {
    renderSelect(data);
  })
  .catch(er => {
    console.log(er);
  });

appendPopularProductsMarkup();
appendDiscountProductsMarkup();

import './JS/modal';
