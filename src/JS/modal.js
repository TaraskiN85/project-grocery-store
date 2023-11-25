import { getProductById } from '/js/API.js';
import axios from 'axios';

document.addEventListener('DOMContentLoaded', async function () {
  const productContainer = document.querySelector('.container-product-cards');
  const modal = document.querySelector('.modal');
  const closeModalBtn = document.querySelector('.modal-close-btn');
  const popularContainer = document.querySelector('.container-aside-cards')
  const discountContainer = document.querySelector('.container-discount-product-cards')
  const addToCartBtn = document.querySelector('.addtocart-btn')

  function addToCart(event) {
    const modalId = modal.getAttribute('id')
    console.log(modalId)
  }

  function openModal() {
    modal.classList.remove('is-hidden');
  }
  
  function closeModal() {
    modal.classList.add('is-hidden');
  }
  
  function handleModalClick(event) {
    if (event.target === modal) {
      closeModal();
    }
  }
  
  window.addEventListener('click', handleModalClick);
  
  closeModalBtn.addEventListener('click', closeModal);

 
 async function getProductDetails(productId) {
  try {
    const response = await axios.get(`https://food-boutique.b.goit.study/api/products/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    return null;
  }
}

  
async function handleProductClick(event) {
  const clickedElement = event.target.closest('.product-card');
  
  if (clickedElement) {
    const productId = clickedElement.id;
    console.log('Clicked Product ID:', productId);
    
    modal.setAttribute('id', productId);

    const product = await getProductDetails(productId);

    if (product) {
      displayProductDetails(product);
    } else {
      console.log('Product ID not found in fetched-products');
    }
  }
}

async function handlePopularClick(event) {
  const clickedPopular = event.target.closest('.aside-product-card');
  if (clickedPopular) {
    const popularid = clickedPopular.id;
    console.log('Clicked Product ID:', popularid);

    modal.setAttribute('id', popularid);

    const product = await getProductDetails(popularid);

    if (product) {
      displayProductDetails(product)
    } else {
      console.log('Product ID not found in fetched-products');
    }

  } else {
    console.log('Product ID not found in fetched-products');
  }
}

async function handleDicountClick(event) {
  const clickedDiscount = event.target.closest('.discount-product-card');
  if (clickedDiscount) {
    const discountId = clickedDiscount.id;
    console.log('Clicked Product ID:', discountId);

    modal.setAttribute('id', discountId);

    const product = await getProductDetails(discountId);

    if (product) {
      displayProductDetails(product)
    } else {
      console.log('Product ID not found in fetched-products');
    }

  } else {
    console.log('Product ID not found in fetched-products');
  }
}
  
  function displayProductDetails(product) {
    const { name, price, desc, img, category, size, popularity } = product;
    console.log('Product Details:', { name, price, desc });
  
    
    openModal();
  
    const modalNameElement = document.querySelector('.modal-title');
    const modalPriceElement = document.querySelector('.price');
    const modalTextElement = document.querySelector('.modal-text');
    const modalImageElement = document.querySelector('.img-content');
    const modalSize = document.querySelector('.modal-size');
    const modalCategory = document.querySelector('.modal-category');
    const modalPop = document.querySelector('.modal-pop');
  
    modalNameElement.textContent = name;
    modalPriceElement.textContent = `$${price}`;
    modalTextElement.textContent = desc;
    modalImageElement.setAttribute('src', img);
    modalSize.textContent = size;
    modalCategory.textContent = category;
    modalPop.textContent = popularity;
  }
  
  popularContainer.addEventListener('click', handlePopularClick);
  productContainer.addEventListener('click', handleProductClick);
  discountContainer.addEventListener('click', handleDicountClick);
  addToCartBtn.addEventListener('click', addToCart);
  
});
