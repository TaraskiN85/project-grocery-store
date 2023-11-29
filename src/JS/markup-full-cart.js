import { createMarkup, renderCartProducts } from "./markup-cart-products";



const refs = {
  containerFullCart: document.querySelector('.container_full_cart'),
  cardList: document.querySelector('.cart-list'),
}




const cardProducts = JSON.parse(localStorage.getItem('cart-products-list'));



function renderMarkup() {



if (cardProducts.length === 0) {
  return `<img
  class="basket_img"
  srcset="../img/basket_1x.png, ../img/basket_2x.png"
  src="../img/basket_1x.png"
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
</div>`
} else {
  return `<div class="full">
  <div class="cart-container-delete">
    <span class="cart-product-delete-span">Delete all</span>
    <button type="button" class="cart-product-delete-all-button">
      <svg class="cart-icon-delete-all" width="24" height="24">
        <use src="./img/icons.svg#icon-delete-close"></use>
      </svg>
    </button>
  </div>
  <ul class="cart-list"></ul>
</div>
<div class="cart_container_total_price">
  <h3 class="cart_title">Your Order</h3>
  <div class="cart_total_price">
    <p class="cart_total_price_text">Total</p>
    <p class="cart_total_cost">
      <span class="cart_total_cost_span">Sum: </span>$
    </p>
  </div>
  <div class="cart_container_form">
    <form action=""></form>
    <input
      class="cart_form_input"
      type="email"
      id="checkout"
      name="checkout"
      placeholder="Mail"
    />
    <button class="cart_form_button" type="submit">Checkout</button>
  </div>
</div>`
};

};

renderMarkup(cardProducts);

const renderCartProduct = () => {
  refs.containerFullCart.innerHTML = '';
  
  refs.containerFullCart.insertAdjacentHTML('afterbegin', renderMarkup());


 if(cardProducts.length > 0 ) {
  const cardList = document.querySelector('.cart-list');
  cardList.insertAdjacentHTML('afterbegin', createMarkup(cardProducts))


createMarkup(cardProducts);
 }

};
renderCartProduct();

