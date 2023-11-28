import {
  renderCartProducts,
  cartProductsList,
  updateCartProducts,
} from './JS/markup-cart-products';

renderCartProducts();

function updateCartFromLocalStorage() {
  const productsInLocalStorage =
    JSON.parse(localStorage.getItem('cart-products-list')) || [];
  const objectsCount = productsInLocalStorage.length;
  const quantityCart = document.querySelector('.quantity_products');
  quantityCart.textContent = '(' + objectsCount + ')';
}

updateCartFromLocalStorage();

const deleteProductButtons = document.querySelectorAll(
  '.card-product-delete-button'
);
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

function deleteFromCart(event) {
  const clickedButton = event.target.closest('.card_container_product');

  if (clickedButton) {
    const productId = clickedButton.id;
    deleteProductAndUpdateCart(productId);
  } else {
    console.log('Delete button not found');
  }
}

// Видалення попередніх слухачів подій перед призначенням нових
deleteProductButtons.forEach(button => {
  button.removeEventListener('click', deleteFromCart);
  button.addEventListener('click', deleteFromCart);
});

function deleteAllFromCart() {
  localStorage.setItem('cart-products-list', JSON.stringify([]));
  cartProductsList.innerHTML = '';
  updateCartFromLocalStorage();
}

// Додаємо обробник події для кнопки видалення всіх товарів
deleteAllButton.addEventListener('click', deleteAllFromCart);
