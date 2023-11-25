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
                  <div class="card-product-name-container">
                  <h3 class="aside-card-name">${name}</h3>
                     </div>
                  <div class="product-card-description">
                      <div class="aside-card-description">
                          <p>Category:</p>
                          <p class="card-description-value">${category}</p>
                      </div>
                      <div class="size-popularity-container">
                      <div class="aside-card-description">
                          <p>Size:</p>
                          <p class="card-description-value">${size}</p>
                      </div>
                      <div class="aside-card-description">
                          <p>Popularity:</p>
                          <p class="card-description-value">${popularity}</p>
                      </div>
                  </div>
                  </div>
                  <div class="product-card-price-btn">
                      <button type="button" class="product-card-btn">
                          <svg width="18" height="18">
                              <use class="button-icon" href="../img/icons.svg#icon-cart"></use>
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
                  </div>
                  <div class="product-card-price-btn">
                  <h3 class="discount-product-card-name">${name}</h3>
                      <p class="product-card-price">${price}</p>
                      <button type="button" class="discount-product-card-btn">
                          <svg width="18" height="18">
                              <use class="discount-button-icon" href="../img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
                  
              </div>
              </div>`
    )
    .join('');
}
