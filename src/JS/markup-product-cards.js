const refs = {
  divProdCards: document.querySelector('.js-product-cards'),
};

export function appendMarkup(data) {
  refs.divProdCards.innerHTML = '';
  refs.divProdCards.insertAdjacentHTML('beforeend', createMarkup(data));
}

function createMarkup(data) {
  return data.results
    .map(
      ({ _id, name, img, category, price, size, popularity }) =>
        `<div class="product-card" id="${_id}">
                  <div class="product-card-img">
                      <img class="card-img"
                          src="${img}"
                          alt="${name}">
                  </div>
                  <h3 class="produc-card-name">${name}</h3>
                  <div class="product-card-description">
                      <div class="card-description">
                          <p>Category:</p>
                          <p class="card-description-value">${category}</p>
                      </div>
                      <div class="card-description">
                          <p>Size:</p>
                          <p class="card-description-value">${size}</p>
                      </div>
                      <div class="card-description">
                          <p>Popularity:</p>
                          <p class="card-description-value">${popularity}</p>
                      </div>
                  </div>
                  <div class="product-card-price-btn">
                      <p class="product-card-price">${price}</p>
                      <button type="button" class="product-card-btn">
                          <svg width="18" height="18">
                              <use class="button-icon" href=""></use>
                          </svg>
                      </button>
                  </div>
              </div>`
    )
    .join('');
}
