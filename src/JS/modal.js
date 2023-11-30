import { getProductById } from './API';

import { updateCartFromLocalStorage } from '../main';


document.addEventListener('DOMContentLoaded', async function () {
  const productContainer = document.querySelector(
    '.container-product-cards-prod'
  );
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
      const cartProducts =
        JSON.parse(localStorage.getItem('cart-products-list')) || [];

      const existingProductIndex = cartProducts.findIndex(
        p => p._id === product._id
      );

      if (existingProductIndex !== -1) {
        cartProducts.splice(existingProductIndex, 1);
        localStorage.setItem(
          'cart-products-list',
          JSON.stringify(cartProducts)
        );
        checkProductCart();
        updateCartFromLocalStorage();
        
      } else {
        product.amount = 1;
        cartProducts.push(product);
        localStorage.setItem(
          'cart-products-list',
          JSON.stringify(cartProducts)
        );
        checkProductCart();
        updateCartFromLocalStorage();
      
      }
    } catch (error) {
      console.error('Error managing cart:', error);
    }
  }

  function checkProductCart() {
    const productId = addToCartBtn.id;
    const cartProductsList =
      JSON.parse(localStorage.getItem('cart-products-list')) || [];

    const isInCart = cartProductsList.some(
      product => product._id === productId
    );
    updateIconModal(isInCart);
    updateButtonContent();
    updateButtonDiscounts()
    updateButtonPopular()

  }

  function updateIconModal(isInCart) {
    if (isInCart) {
      addToCartBtn.innerHTML =
        'Remove from <svg width="18" height="18"><use class="button-icon" href="../img/icons.svg#icon-cart"></use></svg>';
    } else {
      addToCartBtn.innerHTML =
        'Add to <svg width="18" height="18"><use class="button-icon" href="../img/icons.svg#icon-cart"></use></svg>';
    }
  }

  async function updateButtonContent() {
    try {
      const cartProductsList =
        (await JSON.parse(localStorage.getItem('cart-products-list'))) || [];

      const cardContainer = document.querySelector(
        '.container-product-cards-prod'
      );
      if (cardContainer) {
        const cards = cardContainer.querySelectorAll('.product-card-prod');
        cards.forEach(card => {
          const cardId = card.id;
          const addButton = card.querySelector(
            '.product-card-price-btn-prod .product-card-btn-prod'
          );

          if (addButton) {
            const isInCart = cartProductsList.some(
              product => product._id === cardId
            );
            addButton.disabled = isInCart;

            if (isInCart) {
              addButton.innerHTML =
                '<svg width="18" height="18"><use class="button-icon" href="../img/icons.svg#icon-check"></use></svg>';
            } else {
              addButton.innerHTML =
                '<svg width="18" height="18"><use class="button-icon" href="../img/icons.svg#icon-cart"></use></svg>';
            }
          }
        });
      }
    } catch (error) {
      console.error('Error updating button content:', error);
    }
  }

  async function updateButtonDiscounts() {
    try {
      const cartProductsList =
        (await JSON.parse(localStorage.getItem('cart-products-list'))) || [];

      const cardContainers = document.querySelector(
        '.container-discount-product-cards'
      );
      if (cardContainers) {
        const cards = cardContainers.querySelectorAll(
          '.container-for-discount-items'
        );
        cards.forEach(card => {
          const cardId = card.id;
          const addButtons = card.querySelector('.discount-product-card-btn');

          if (addButtons) {
            const isInCart = cartProductsList.some(
              product => product._id === cardId
            );
            addButtons.disabled = isInCart;

            if (isInCart) {
              addButtons.innerHTML =
                '<svg width="16" height="16"><use class="discount-button-icon" href="../img/icons.svg#icon-check"></use></svg>';
            } else {
              addButtons.innerHTML =
                '<svg width="16" height="16"><use class="discount-button-icon" href="../img/icons.svg#icon-cart"></use></svg>';
            }
          }
        });
      }
    } catch (error) {
      console.error('Error updating button content:', error);
    }
  }

  async function updateButtonPopular() {
    try {
      const cartProductsList =
        (await JSON.parse(localStorage.getItem('cart-products-list'))) || [];

      const cardContainers = document.querySelector('.container-aside-cards');
      if (cardContainers) {
        const cards = cardContainers.querySelectorAll(
          '.container-for-popular-items'
        );
        cards.forEach(card => {
          const cardId = card.id;
          const addButtons = card.querySelector('.products-card-btn');

          if (addButtons) {
            const isInCart = cartProductsList.some(
              product => product._id === cardId
            );
            addButtons.disabled = isInCart;

            if (isInCart) {
              addButtons.innerHTML =
                '<svg width="16" height="16" fill="#6d8434"><use class="popular-button-icon" href="../img/icons.svg#icon-check"></use></svg>';
            } else {
              addButtons.innerHTML =
                '<svg width="16" height="16" fill="#6d8434"><use class="popular-button-icon" href="../img/icons.svg#icon-cart"></use></svg>';
            }
          }
        });
      }
    } catch (error) {
      console.error('Error updating button content:', error);
    }
  }

  setTimeout(() => {
    updateButtonDiscounts();
}, 2000);

setTimeout(() => {
    updateButtonContent();
}, 2000);

setTimeout(() => {
    updateButtonPopular();
}, 2000);

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

  const getProductDetails = async productId => {
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

  async function productClick(event) {
    const clickedCard = event.target.closest('.product-card-btn-prod');

    if (clickedCard) {
      const productId = clickedCard.closest('.product-card-prod').id;

      if (productId) {
        manageCart(productId);
        checkProductCart();
      } else {
        console.log('Product ID not found in fetched-products');
      }
    }
  }

  async function popularClick(event) {
    const clickedCard = event.target.closest('.products-card-btn');

    if (clickedCard) {
      const productId = clickedCard.closest('.aside-product-card').id;

      if (productId) {
        manageCart(productId);
        checkProductCart();
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

  async function dicountClick(event) {
    const clickedCard = event.target.closest('.discount-product-card-btn');

    if (clickedCard) {
      const productId = clickedCard.closest('.discount-product-card').id;

      if (productId) {
        manageCart(productId);
        checkProductCart();
      } else {
        console.log('Product ID not found in fetched-products');
      }
    }
  }

  async function handleDicountClick(event) {
    const clickedDiscount = event.target.closest('.discount-product-card-img');

    if (clickedDiscount) {
      const discountId = clickedDiscount.closest('.discount-product-card').id;

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
    checkProductCart();

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

  productContainer.addEventListener('click', handleProductClick);
  productContainer.addEventListener('click', productClick);
  popularContainer.addEventListener('click', handlePopularClick);
  popularContainer.addEventListener('click', popularClick);

  discountContainer.addEventListener('click', handleDicountClick);
  discountContainer.addEventListener('click', dicountClick);
  addToCartBtn.addEventListener('click', async event => {
    event.preventDefault();
    const productId = addToCartBtn.id;
    await manageCart(productId);
  });
});
