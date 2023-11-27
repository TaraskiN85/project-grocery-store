import { renderCartProducts,cartProductsList } from './JS/markup-cart-products';

renderCartProducts();
const deleteProductBtn = document.querySelector('.card-product-delete-button').parentNode;
const deleteAllBtn = document.querySelector('.cart-product-delete-all-button').parentNode;
  
deleteProductBtn.addEventListener('click', deleteFromCart);
deleteAllBtn.addEventListener('click', deleteAllFromCart);

console.log(deleteProductBtn);

function deleteFromCart() {
  const clickedElement = deleteProductBtn.parentNode.id;
  console.log(clickedElement);
  
  const productsArr = JSON.parse(localStorage.getItem('cart-products-list'))
  console.log(productsArr)
  const newProductArr = productsArr.filter(product => {
    return product._id !== clickedElement 
  })
  localStorage.setItem('cart-products-list', JSON.stringify(newProductArr));
  console.log(newProductArr)
  cartProductsList.innerHTML = ''
  renderCartProducts();
};

function deleteAllFromCart() { 
  localStorage.setItem('cart-products-list', JSON.stringify([]));
  cartProductsList.innerHTML = ''
  
};

