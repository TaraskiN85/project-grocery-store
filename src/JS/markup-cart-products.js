export const cartProductsList = document.querySelector('.cart-list');

const cartProductsInfo = JSON.parse(localStorage.getItem('cart-products-list'));

const createMarkup = cartProductsInfo => {
  return cartProductsInfo
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
            <button type="button" class="cart-product-delete-button">
              <svg class="cart-icon-close-" width="18" height="18">
                <use src="../img/icons.svg#icon-delete-close"></use>
              </svg>
            </button>
          </div>
        </div>

    </li>`
    )
    .join('');
};

export const renderCartProducts = () => {
  cartProductsList.innerHTML = ''
  cartProductsList.insertAdjacentHTML(
    'afterbegin',
    createMarkup(cartProductsInfo)
  );
};
