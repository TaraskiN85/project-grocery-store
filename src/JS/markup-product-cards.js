import icons from '../img/icons.svg';

const refs = {
  divProdCards: document.querySelector('.js-product-cards'),
};

export function appendMarkup(data) {
  refs.divProdCards.innerHTML = '';
  refs.divProdCards.insertAdjacentHTML('afterbegin', createMarkup(data));
}

function createMarkup(data) {
  console.log(data.results);
  if (data.results.length === 0) {
    return `<div clas="products-nothing-container">
              <p class="products-nothing-headline">Nothing was found for the selected
                <span class="nothing-headline-span">filters...</span>
              </p>
              <p class="products-nothing-text">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
            </div>`;
  } else {
    const discountMarkup = `<span class="discount-svg">
    <svg width="60" height="60" >
        <use  href="${icons}#icon-discount"></use>
    </svg>
    </span>`;

    return data.results
      .map(
        ({
          _id,
          name,
          img,
          category,
          price,
          size,
          popularity,
          is10PercentOff,
        }) =>
          `<div class="product-card-prod" id="${_id}">
          <div class="product-card-img-prod">
            <img class="card-img-prod" src="${img}" alt="${name}">
            ${is10PercentOff ? discountMarkup : ''}
          </div>
          <h3 class="produc-card-name-prod">${name}</h3>
          <div class="product-card-description-prod">
            <div class="card-description-prod">
              <p>Category:</p>
              <p class="card-description-value-prod">${category}</p>
            </div>
            <div class="card-description-prod">
              <p>Size:</p>
              <p class="card-description-value-prod">${size}</p>
            </div>
            <div class="card-description-prod">
              <p>Popularity:</p>
              <p class="card-description-value-prod">${popularity}</p>
            </div>
          </div>
          
          <div class="product-card-price-btn-prod">
            <p class="product-card-price-prod">${price}</p>
            <button type="button" class="product-card-btn-prod id="${_id}">
              <svg width="18" height="18">
                <use class="button-icon-prod" href="${icons}#icon-cart"></use>
              </svg>
            </button>
          </div>
        </div>`
      )
      .join('');
  }
}
