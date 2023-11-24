const refs = {
    popularProductCards: document.querySelector(".js-popular-product-cards"),
    discountProductCards: document.querySelector(".js-discount-product-cards"),
  };

  export function appendPopularProductsMarkup(data) {
    refs.popularProductCards.insertAdjacentHTML("beforeend", createPopularMarkup(data));
  }

  function createPopularMarkup(data) {
    return data.results
      .map(
        ({ _id, name, img, category, size, popularity }) =>
          `<div class="container-for-popular-items">
          <div class="product-card" id="${_id}">
                  <div class="product-card-img">
                      <img class="card-img"
                          src="${img}"
                          alt="${name}">
                  </div>
                  <div class="card-product-name-container">
                  <h3 class="product-card-name">${name}</h3>
                     </div>
                  <div class="product-card-description">
                      <div class="card-description">
                          <p>Category:</p>
                          <p class="card-description-value">${category}</p>
                      </div>
                      <div class="size-popularity-container">
                      <div class="card-description">
                          <p>Size:</p>
                          <p class="card-description-value">${size}</p>
                      </div>
                      <div class="card-description">
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
      .join("");
  }


  export function appendDiscountProductsMarkup(data) {
    refs.discountProductCards.insertAdjacentHTML("beforeend", createDiscountMarkup(data));
  }

  function createDiscountMarkup(data) {
    return data.results
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
      .join("");
  }