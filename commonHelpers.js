import{i as o,s as p,c as f}from"./assets/footer-subscription-115f49fa.js";import"./assets/vendor-8a888f22.js";const l=document.querySelector(".cart");JSON.parse(localStorage.getItem("cart-products-list"));const y=t=>{const e=t.map(({_id:c,name:a,img:r,category:s,price:b,size:h,popularity:x,quantity:$,is10PercentOff:w,desc:P})=>`<li class="card_container_product" id="${c}">

         <div class="description">
          <div class="card_container-product_img">
            <img class="card_product_img" src="${r}" alt="${a}" />
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
                  <span class="cart_product_span">Size:</span>${h}
                </p>
              </div>
            </div>
            <div class="card_container_price">
              <p class="card_product_price">$${b}</p>
            </div>
          </div>
          <div class="card-product-delete-button">
            <button type="button" class="cart-product-delete-button" id="${c}">
              <svg class="cart-icon-close-" width="18" height="18">
                 <use href="${o}#icon-delete-close"></use>
              </svg>
            </button>
          </div>
        </div>

    </li>`).join("");return`  <div class="container">
  <ul class="cart_list">
    <li class="cart-item">
      <svg class="cart-svg" width="18" height="18">
        <use href="${o}#icon-cart"></use>
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
            <use href="${o}#icon-delete-close"></use>
          </svg>
        </button>
      </div>
      <ul class="cart-list">
        ${e}
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
</div>`},n=()=>{const t=JSON.parse(localStorage.getItem("cart-products-list"))||[];if(t.length>0)console.log("full"),l.innerHTML="",l.insertAdjacentHTML("afterbegin",y(t));else{l.innerHTML="",console.log("empty");const e=document.querySelector(".cart");e.innerHTML+=`<div class="container">
    <div class="empty-basket">
      <div class="basket_container">
        <ul class="basket_list">
          <li class="basket_item">
            <svg class="basket_svg" width="18" height="18">
              <use href="${o}#icon-cart"></use>
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
  </div>`}},i=document.querySelector(".modal-cart"),S=document.querySelector(".close-btn");function k(){i.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function C(t){t.target===i&&_()}function _(){i.classList.add("is-hidden"),document.body.style.overflow="visible"}window.addEventListener("click",C);S.addEventListener("click",_);n();function d(){const e=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).length,c=document.querySelector(".quantity_products"),a=document.querySelector(".cart-span");c.textContent="("+e+")",JSON.parse(localStorage.getItem("cart-products-list")).length&&(a.textContent="("+e+")")}d();const I=document.querySelector(".cart-product-delete-all-button");function L(t){let e=JSON.parse(localStorage.getItem("cart-products-list"))||[];const c=e.findIndex(a=>a._id===t);c!==-1&&(e.splice(c,1),localStorage.setItem("cart-products-list",JSON.stringify(e)),n(),d())}const m=document.querySelector(".cart-list");function u(t){const e=t.target.closest(".card-product-delete-button");if(e){const c=e.closest(".card_container_product").id;L(c),v()}}document.addEventListener("click",u);JSON.parse(localStorage.getItem("cart-products-list")).length&&m.addEventListener("click",u);function g(){localStorage.setItem("cart-products-list",JSON.stringify([])),l.innerHTML="",d(),m.removeEventListener("click",u),n()}JSON.parse(localStorage.getItem("cart-products-list")).length&&I.addEventListener("click",g);async function v(){const t=document.querySelector(".cart_total_cost"),c=(await JSON.parse(localStorage.getItem("cart-products-list"))||[]).reduce((a,r)=>a+r.price,0);t.textContent=`${c.toFixed(2)}`}v();const O=document.querySelector(".cart_form_button");JSON.parse(localStorage.getItem("cart-products-list")).length&&O.addEventListener("click",q);async function q(){const t=document.querySelector(".cart_form_input").value,c=JSON.parse(localStorage.getItem("cart-products-list")).map(s=>({productId:s._id,amount:s.amount}));if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){p("Please, enter valid Email!");return}const r={email:t,products:c};try{const s=await f(r);g(),k(s)}catch(s){console.error("Error creating order:",s),p("Error creating order. Please try again later.")}}
//# sourceMappingURL=commonHelpers.js.map
