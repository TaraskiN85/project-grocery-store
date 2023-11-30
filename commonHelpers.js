import{i as r,s as _,c as f}from"./assets/footer-subscription-37f98d9c.js";import"./assets/vendor-8a888f22.js";const o=document.querySelector(".cart");JSON.parse(localStorage.getItem("cart-products-list"));const S=e=>{const t=e.map(({_id:c,name:a,img:l,category:s,price:h,size:b,popularity:x,quantity:N,is10PercentOff:P,desc:w})=>`<li class="card_container_product" id="${c}">

         <div class="description">
          <div class="card_container-product_img">
            <img class="card_product_img" src="${l}" alt="${a}" />
          </div>

          <div class="card_container_product_fullDs">
            <div class="card_container_product_name">
              <h3 class="card_product_name">${a}</h3>
            </div>
            <div class="card_container_product_description">
              <div class="card-description">
                <p class="cart_product_description">
                  <span class="cart_product_span">Category:</span>${s}
                </p>
                <p class="cart_product_description">
                  <span class="cart_product_span">Size:</span>${b}
                </p>
              </div>
            </div>
            <div class="card_container_price">
              <p class="card_product_price">$${h}</p>
            </div>
          </div>
          <div class="card-product-delete-button">
            <button type="button" class="cart-product-delete-button id="${c}">
              <svg class="cart-icon-close-" width="18" height="18">
                 <use href="${r}#icon-delete-close"></use>
              </svg>
            </button>
          </div>
        </div>

    </li>`).join("");return`  <div class="container">
  <ul class="cart_list">
    <li class="cart-item">
      <svg class="cart-svg" width="18" height="18">
        <use href="${r}#icon-cart"></use>
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
            <use href="${r}#icon-delete-close"></use>
          </svg>
        </button>
      </div>
      <ul class="cart-list">
        ${t}
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
</div>`},n=()=>{const e=JSON.parse(localStorage.getItem("cart-products-list"))||[];if(e.length>0)console.log("full"),o.innerHTML="",o.insertAdjacentHTML("afterbegin",S(e));else{o.innerHTML="",console.log("empty");const t=document.querySelector(".cart");t.innerHTML+=`<div class="container">
    <div class="empty-basket">
      <div class="basket_container">
        <ul class="basket_list">
          <li class="basket_item">
            <svg class="basket_svg" width="18" height="18">
              <use href="${r}#icon-cart"></use>
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
  </div>`}},i=document.querySelector(".modal-cart"),y=document.querySelector(".close-btn");function k(){i.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function C(e){e.target===i&&m()}function m(){i.classList.add("is-hidden"),document.body.style.overflow="visible"}window.addEventListener("click",C);y.addEventListener("click",m);n();function d(){const t=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).length,c=document.querySelector(".quantity_products"),a=document.querySelector(".cart-span");c.textContent="("+t+")",JSON.parse(localStorage.getItem("cart-products-list")).length&&(a.textContent="("+t+")")}d();const I=document.querySelector(".cart-product-delete-all-button");function L(e){let t=JSON.parse(localStorage.getItem("cart-products-list"))||[];const c=t.findIndex(a=>a._id===e);c!==-1&&(t.splice(c,1),localStorage.setItem("cart-products-list",JSON.stringify(t)),n(),d())}const g=document.querySelector(".cart-list");function u(e){const t=e.target.closest(".card-product-delete-button");if(t){const c=t.closest(".card_container_product").id;L(c),p()}}document.addEventListener("click",u);JSON.parse(localStorage.getItem("cart-products-list")).length&&g.addEventListener("click",u);function v(){localStorage.setItem("cart-products-list",JSON.stringify([])),o.innerHTML="",d(),p(),g.removeEventListener("click",u),n()}JSON.parse(localStorage.getItem("cart-products-list")).length&&I.addEventListener("click",v);const O=document.querySelector(".cart_total_cost");function p(){const t=JSON.parse(localStorage.getItem("cart-products-list")).reduce((c,a)=>c+a.price,0);JSON.parse(localStorage.getItem("cart-products-list")).length&&(O.textContent=`$ ${t.toFixed(2)}`)}p();const $=document.querySelector(".cart_form_button");JSON.parse(localStorage.getItem("cart-products-list")).length&&$.addEventListener("click",q);async function q(){const e=document.querySelector(".cart_form_input").value,c=JSON.parse(localStorage.getItem("cart-products-list")).map(s=>({productId:s._id,amount:s.amount}));if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){_("Please, enter valid Email!");return}const l={email:e,products:c};try{const s=await f(l);v(),k(s)}catch(s){console.error("Error creating order:",s),_("Error creating order. Please try again later.")}}
//# sourceMappingURL=commonHelpers.js.map
