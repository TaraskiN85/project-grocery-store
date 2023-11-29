import {
  renderCartProducts,
  cartProductsList,
  updateCartProducts,
} from './JS/markup-cart-products';
import { displayByBuyModal } from './JS/modal-cart';
import { createNewOrder } from './JS/API';
import { showError } from './JS/helpers';

renderCartProducts();

function updateCartFromLocalStorage() {
  const productsInLocalStorage =
    JSON.parse(localStorage.getItem('cart-products-list')) || [];
  const objectsCount = productsInLocalStorage.length;
  const quantityCart = document.querySelector('.quantity_products');
  const quantityCartIcon = document.querySelector('.cart-span');
  quantityCart.textContent = '(' + objectsCount + ')';
  quantityCartIcon.textContent = '(' + objectsCount + ')';
}

updateCartFromLocalStorage();

const deleteAllButton = document.querySelector(
  '.cart-product-delete-all-button'
);

function deleteProductAndUpdateCart(productId) {
  let productsArr =
    JSON.parse(localStorage.getItem('cart-products-list')) || [];
  const indexToDelete = productsArr.findIndex(
    product => product._id === productId
  );

  if (indexToDelete !== -1) {
    productsArr.splice(indexToDelete, 1);
    localStorage.setItem('cart-products-list', JSON.stringify(productsArr));
    updateCartProducts();
    updateCartFromLocalStorage();
  } else {
    console.log('Product not found in cart');
  }
}

const cartContainer = document.querySelector('.cart-list');

async function handleProductClick(event) {
  const clickedButton = event.target.closest('.card-product-delete-button');
  if (clickedButton) {
    const productId = clickedButton.closest('.card_container_product').id;
    deleteProductAndUpdateCart(productId);
  }
  calculationTotalPrice();
}

cartContainer.addEventListener('click', handleProductClick);

function deleteAllFromCart() {
  localStorage.setItem('cart-products-list', JSON.stringify([]));
  cartProductsList.innerHTML = '';
  updateCartFromLocalStorage();
  calculationTotalPrice();
}

deleteAllButton.addEventListener('click', deleteAllFromCart);
const totalPriceProducts = document.querySelector('.cart_total_cost');
function calculationTotalPrice() {
  const objectProducts = JSON.parse(localStorage.getItem('cart-products-list'));
  const totalPrice = objectProducts.reduce((acc, product) => {
    return acc + product.price;
  }, 0);
  totalPriceProducts.textContent = `$ ${totalPrice.toFixed(2)}`;
}
calculationTotalPrice();

const cartBtnSubmit = document.querySelector('.cart_form_button');
cartBtnSubmit.addEventListener('click', makeOrder);

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
