import {
  renderCartProducts,
  createListMarkup,
} from './JS/markup-cart-products';
import { displayByBuyModal } from './JS/modal-cart';
import { createNewOrder } from './JS/API';
import { showError } from './JS/helpers';

const containerFull = document.querySelector('.container_full_cart');
const handleCart = event => {
  if (event.target.classList.contains('cart-icon-close')) {
    const clickedButton = event.target.closest('.cart-product-delete-button');
    deleteProductAndUpdateCart(clickedButton.id);
    createListMarkup();
    calculationTotalPrice();
  }

  if (
    event.target.classList.contains('cart-product-delete-all-button') ||
    event.target.classList.contains('cart-icon-delete-all')
  ) {
    deleteAllFromCart();
  }
};

if (JSON.parse(localStorage.getItem('cart-products-list')).length) {
  containerFull.addEventListener('click', handleCart);
}

function updateCartFromLocalStorage() {
  const productsNumber = JSON.parse(
    localStorage.getItem('cart-products-list')
  ).length;
  const quantityCart = document.querySelector('.quantity_products');
  const quantityInCart = document.querySelector('.cart-span');
  quantityCart.textContent = '(' + productsNumber + ')';
  if (JSON.parse(localStorage.getItem('cart-products-list')).length) {
    quantityInCart.textContent = '(' + productsNumber + ')';
  }
}

updateCartFromLocalStorage();

function deleteProductAndUpdateCart(productId) {
  let productsArr =
    JSON.parse(localStorage.getItem('cart-products-list')) || [];
  const indexToDelete = productsArr.findIndex(
    product => product._id === productId
  );
  if (indexToDelete !== -1) {
    productsArr.splice(indexToDelete, 1);
    localStorage.setItem('cart-products-list', JSON.stringify(productsArr));
    createListMarkup();
    updateCartFromLocalStorage();
  }
}

function deleteAllFromCart() {
  localStorage.setItem('cart-products-list', JSON.stringify([]));
  updateCartFromLocalStorage();
  renderCartProducts();
}

function calculationTotalPrice() {
  const objectProducts =
    JSON.parse(localStorage.getItem('cart-products-list')) || [];
  const totalPrice = objectProducts.reduce((acc, product) => {
    return acc + product.price;
  }, 0);
  if (JSON.parse(localStorage.getItem('cart-products-list')).length) {
    const totalPriceProducts = document.querySelector('.cart_total_cost');
    totalPriceProducts.textContent = `$ ${totalPrice.toFixed(2)}`;
  }
}
calculationTotalPrice();

const cartBtnSubmit = document.querySelector('.cart_form_button');

if (JSON.parse(localStorage.getItem('cart-products-list')).length) {
  cartBtnSubmit.addEventListener('click', makeOrder);
}

async function makeOrder() {
  const emailInputValue = document.querySelector('.cart_form_input').value;
  const objectProducts = JSON.parse(localStorage.getItem('cart-products-list'));
  const orderData = objectProducts.map(product => {
    return {
      productId: product._id,
      amount: product.amount,
    };
  });

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInputValue)) {
    showError('Please, enter valid Email!');
    return;
  }

  const requestObj = {
    email: emailInputValue,
    products: orderData,
  };
  try {
    const response = await createNewOrder(requestObj);
    deleteAllFromCart();
    displayByBuyModal(response);
  } catch (error) {
    console.error('Error creating order:', error);
    showError('Error creating order. Please try again later.');
  }
}
