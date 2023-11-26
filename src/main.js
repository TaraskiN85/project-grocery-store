import './JS/pagination';
import { getProductsCategories, getProductById } from './JS/API';
import {
  appendDiscountProductsMarkup,
  appendPopularProductsMarkup,
} from './JS/markup-popular-discount-product-cards';
import {
  renderSelect,
  fetchBasedOnScreenSize,
  checkedForm,
} from './JS/filters';

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
// getProductsCategories();
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
