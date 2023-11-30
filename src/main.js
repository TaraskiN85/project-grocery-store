import './JS/pagination';
import { getProductsCategories, getProductById } from './JS/API';
import {
  appendDiscountProductsMarkup,
  appendPopularProductsMarkup,
} from './JS/markup-popular-discount-product-cards';
import './JS/footer-subscription';
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
// catListItems.forEach(function (listItems) {
//   listItems.addEventListener('click', function (e) {
//     console.log('dropinner');
//     e.stopPropagation();
//     dropDownCatBtn.innerText = this.innerText;
//     categoryInput.value = this.dataset.value;
//     changeCategoryInLocal(categoryInput);
//     categoryList.classList.remove('dropdown__list--visible');
//   });

appendPopularProductsMarkup();
appendDiscountProductsMarkup();
// getProductsCategories();
const cartProducts = JSON.parse(localStorage.getItem('cart-products-list'));
if (!cartProducts) {
  localStorage.setItem('cart-products-list', JSON.stringify([]));
}

import './JS/modal';

export function updateCartFromLocalStorage() {
  const productsInLocalStorage =
    JSON.parse(localStorage.getItem('cart-products-list')) || [];
  const objectsCount = productsInLocalStorage.length;
  const quantityCart = document.querySelector('.quantity_products');
  quantityCart.textContent = '(' + objectsCount + ')';
}

updateCartFromLocalStorage();
