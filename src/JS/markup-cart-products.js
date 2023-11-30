import icons from '../img/icons.svg';

export const cartProductsList = document.querySelector('.cart');

const cartProductsInfo = JSON.parse(localStorage.getItem('cart-products-list'));

const createMarkup = cartProductsInfo => {
  const cardsList = cartProductsInfo
    .map(
      ({
        _id,
        name,
        img,
        category,
        price,
        size,
        popularity,
        quantity,
        is10PercentOff,
        desc,
      }) =>
        `<li class="card_container_product" id="${_id}">

         <div class="description">
          <div class="card_container-product_img">
            <img class="card_product_img" src="${img}" alt="${name}" />
          </div>

          <div class="card_container_product_fullDs">
            <div class="card_container_product_name">
              <h3 class="card_product_name">${name}</h3>
            </div>
            <div class="card_container_product_description">
              <div class="card-description">
                <p class="cart_product_description">
                  <span class="cart_product_span">Category:</span>${category}
                </p>
                <p class="cart_product_description">
                  <span class="cart_product_span">Size:</span>${size}
                </p>
              </div>
            </div>
            <div class="card_container_price">
              <p class="card_product_price">$${price}</p>
            </div>
          </div>
          <div class="card-product-delete-button">
            <button type="button" class="cart-product-delete-button" id="${_id}">
              <svg class="cart-icon-close-" width="18" height="18">
                 <use href="${icons}#icon-delete-close"></use>
              </svg>
            </button>
          </div>
        </div>

    </li>`
    )
    .join('');
  return `  <div class="container">
  <ul class="cart_list">
    <li class="cart-item">
      <svg class="cart-svg" width="18" height="18">
        <use href="${icons}#icon-cart"></use>
      </svg>
    </li>
    <li class="cart-item">
      <p class="cart_text">Cart<span class="cart-span">()</span></p>
    </li>
  </ul>
  <div class="container_full_cart">
    <div class="full">
      <div class="cart-container-delete">
        <span class="cart-product-delete-span">Delete all</span>
        <button type="button" class="cart-product-delete-all-button">
          <svg class="cart-icon-delete-all" width="24" height="24">
            <use href="${icons}#icon-delete-close"></use>
          </svg>
        </button>
      </div>
      <ul class="cart-list">
        ${cardsList}
      </ul>
    </div>
    <div class="cart_container_total_price">
      <h3 class="cart_title">Your Order</h3>
      <div class="cart_total_price">
        <p class="cart_total_price_text">Total</p>
        <p class="cart_total_cost_span">
          Sum:
          <span class="cart_total_cost"> </span>
        </p>
      </div>
      <div class="cart_container_form">
        <form action=""></form>
        <input
          class="cart_form_input"
          type="email"
          id="checkout"
          name="checkout"
          placeholder="Mail: Enter your email"
        />
        <button class="cart_form_button" type="submit">Checkout</button>
      </div>
    </div>
  </div>
</div>`;
};

export const renderCartProducts = () => {
  const productsArr =
    JSON.parse(localStorage.getItem('cart-products-list')) || [];
  if (productsArr.length > 0) {
    console.log('full');
    cartProductsList.innerHTML = '';
    cartProductsList.insertAdjacentHTML(
      'afterbegin',
      createMarkup(productsArr)
    );
  } else {
    cartProductsList.innerHTML = '';
    console.log('empty');
    const cartContainer = document.querySelector('.cart');
    cartContainer.innerHTML += `<div class="container">
    <div class="empty-basket">
      <div class="basket_container">
        <ul class="basket_list">
          <li class="basket_item">
            <svg class="basket_svg" width="18" height="18">
              <use href="${icons}#icon-cart"></use>
            </svg>
          </li>
          <li class="basket_item">
            <p class="basket_text">Cart<span class="basket_span">(0)</span></p>
          </li>
        </ul>
      </div>
      <img
        class="basket_img"
        srcset="./img/basket_1x.png, ./img/basket_2x.png"
        src="./img/basket_1x.png"
        alt="yellow shopping basket"
        width="132"
        height="114"
      />
      <div class="basket_container_text">
        <h3 class="basket_title">
          Your basket is <span class="basket_title_span">empty...</span>
        </h3>
        <p class="basket-text">
          Go to the main page to select your favorite products and add them to the
          cart.
        </p>
      </div>
    </div>
  </div>`;
  }
};
