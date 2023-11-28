import { getPopularProducts, getDiscountProducts } from './API';

const refs = {
  popularProductCards: document.querySelector('.js-popular-product-cards'),
  discountProductCards: document.querySelector('.js-discount-product-cards'),
};

export async function appendPopularProductsMarkup() {
  const data = await getPopularProducts();
  refs.popularProductCards.insertAdjacentHTML(
    'beforeend',
    createPopularMarkup(data)
  );
}

function createPopularMarkup(data) {
  return data
    .map(
      ({ _id, name, img, category, size, popularity }) =>
        `<div class="container-for-popular-items">
          <div class="aside-product-card" id="${_id}">
                  <div class="aside-card-img">
                      <img class="aside-img"
                          src="${img}"
                          alt="${name}">
                  </div>
                 <div class="container-for-name-descr">
                  <div class="card-product-name-container">
                  <h3 class="aside-card-name">${name}</h3>
                     </div>
                  <div class="products-card-description">
                      <div class="aside-card-description">
                          <p class="descr-p">Category:</p>
                          <p class="card-descr-value">${category}</p>
                      </div>
                      <div class="size-popularity-container">
                      <div class="aside-card-description">
                          <p class="descr-p">Size:</p>
                          <p class="card-descr-value">${size}</p>
                      </div>
                      <div class="aside-card-description">
                          <p class="descr-p">Popularity:</p>
                          <p class="card-descr-value">${popularity}</p>
                      </div>
                  </div>
                  </div>
                  </div>
                  <div class="product-card-prices-btn">
                      <button type="button" class="products-card-btn">
                          <svg width="16" height="16">
                              <use class="popular-button-icon" href="./img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
              </div>
              </div>`
    )
    .join('');
}

export async function appendDiscountProductsMarkup() {
  const data = await getDiscountProducts();
  refs.discountProductCards.insertAdjacentHTML(
    'beforeend',
    createDiscountMarkup(data)
  );
}

function createDiscountMarkup(data) {
  const renderData = data.slice(0, 2);
  return renderData
    .map(
      ({ _id, name, img, price }) =>
        `<div class="container-for-discount-items">
          <div class="discount-product-card" id="${_id}">
                  <div class="discount-product-card-img">
                      <img class="discount-card-img"
                          src="${img}"
                          alt="${name}">
                          <span class="discount-svg">
                          <svg width="60" height="60" >
                              <use  href="./img/icons.svg#icon-discount"></use>
                          </svg>
                          </span>
                  </div>
                  <div class="product-card-prices-btn">
                  <h3 class="discount-product-card-name">${name}</h3>
                 <div class="discount-price-icon-container">
                      <p class="product-card-price">${price}</p>
                      <button type="button" class="discount-product-card-btn">
                          <svg width="18" height="18">
                              <use class="discount-button-icon" href="./img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
                  </div>
              </div>
              </div>`
    )
    .join('');
}
