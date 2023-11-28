import { getProductById } from './API';


import { updateCartFromLocalStorage } from '../main';



document.addEventListener('DOMContentLoaded', async function () {
  const productContainer = document.querySelector('.container-product-cards-prod');
  const modal = document.querySelector('.modal');
  const closeModalBtn = document.querySelector('.modal-close-btn');
  const popularContainer = document.querySelector('.container-aside-cards');
  const discountContainer = document.querySelector(
    '.container-discount-product-cards'
  );
  const addToCartBtn = document.querySelector('.addtocart-btn');
  const discountSvg = document.querySelector('.modal-discount-svg');

 

  async function manageCart(productId) {
    try {
      const product = await getProductDetails(productId);
      const cartProducts = JSON.parse(localStorage.getItem('cart-products-list')) || [];
  
      const existingProductIndex = cartProducts.findIndex(p => p._id === product._id);
  
      if (existingProductIndex !== -1) {

        cartProducts.splice(existingProductIndex, 1);
        localStorage.setItem('cart-products-list', JSON.stringify(cartProducts));
        checkProductCart();
  
    
        updateCartFromLocalStorage();

      } else {
        cartProducts.push(product);
        localStorage.setItem('cart-products-list', JSON.stringify(cartProducts));
        checkProductCart();
  
        updateCartFromLocalStorage();
      }
    } catch (error) {
      console.error('Error managing cart:', error);
    }
  }


  function checkProductCart() {
    addToCartBtn.disabled = false;
    const productId = addToCartBtn.id; // Отримуємо ID товару з кнопки (може змінитися залежно від вашого коду)
    const cartProductsList = JSON.parse(localStorage.getItem('cart-products-list')) || [];
  
    const isInCart = cartProductsList.some(product => product._id === productId);
  
    if (isInCart) {
      addToCartBtn.innerHTML =
        'Remove from <svg width="18" height="18"><use class="button-icon" href="./img/icons.svg#icon-cart"></use></svg>';
    } else {
      addToCartBtn.innerHTML =
        'Add to <svg width="18" height="18"><use class="button-icon" href="./img/icons.svg#icon-cart"></use></svg>';
    }
  }

  function openModal() {
    modal.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.add('is-hidden');
    document.body.style.overflow = 'visible';
  }

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });

  function handleModalClick(event) {
    if (event.target === modal) {
      closeModal();
    }
  }

  window.addEventListener('click', handleModalClick);

  closeModalBtn.addEventListener('click', closeModal);


 const getProductDetails = async (productId) => {
    try {
        const productData = await getProductById(productId);
        return productData;
    } catch (error) {
        console.error('Error fetching product details:', error);
        return null;
    }
};

  async function handleProductClick(event) {
    const clickedImage = event.target.closest('.product-card-img-prod');
  
    if (clickedImage) {
      const productId = clickedImage.closest('.product-card-prod').id;
  
      addToCartBtn.setAttribute('id', productId);
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
    const clickedPopular = event.target.closest('.aside-card-img');

    if (clickedPopular) {
      const popularid = clickedPopular.closest('.aside-product-card').id;
  
      addToCartBtn.setAttribute('id', popularid);
      modal.setAttribute('id', popularid);
  
      const product = await getProductDetails(popularid);
  
      if (product) {
        displayProductDetails(product);
      } else {
        console.log('Product ID not found in fetched-products');
      }
    }
  }

  async function handleDicountClick(event) {
    const clickedDiscount = event.target.closest('.discount-product-card-img');

    if (clickedDiscount) {
      const  discountId = clickedDiscount.closest('.discount-product-card').id;
  
      addToCartBtn.setAttribute('id', discountId);
      modal.setAttribute('id', discountId);
  
      const product = await getProductDetails(discountId);
  
      if (product) {
        displayProductDetails(product);
      } else {
        console.log('Product ID not found in fetched-products');
      }
    }
  }

  function displayProductDetails(product) {
    const {
      name,
      price,
      desc,
      img,
      category,
      size,
      popularity,
      is10PercentOff,
    } = product;

    openModal();
    checkProductCart()

    const discountValue = product.is10PercentOff;

    if (discountValue === true) {
      discountSvg.style.display = 'block';
    } else {
      discountSvg.style.display = 'none';
    }

    console.log(is10PercentOff);

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
    addToCartBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    const productId = addToCartBtn.id;
    await manageCart(productId);
  });
});
