import{s as u,c as v}from"./assets/footer-subscription-6a49ac83.js";import"./assets/vendor-8a888f22.js";const r=document.querySelector(".cart");JSON.parse(localStorage.getItem("cart-products-list"));const h=t=>`  <div class="container">
  <ul class="cart_list">
    <li class="cart-item">
      <svg class="cart-svg" width="18" height="18">
        <use href="./img/icons.svg#icon-cart"></use>
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
            <use href="./img/icons.svg#icon-delete-close"></use>
          </svg>
        </button>
      </div>
      <ul class="cart-list">
        ${t.map(({_id:c,name:s,img:o,category:a,price:g,size:_,popularity:x,quantity:P,is10PercentOff:w,desc:N})=>`<li class="card_container_product" id="${c}">

         <div class="description">
          <div class="card_container-product_img">
            <img class="card_product_img" src="${o}" alt="${s}" />
          </div>

          <div class="card_container_product_fullDs">
            <div class="card_container_product_name">
              <h3 class="card_product_name">${s}</h3>
            </div>
            <div class="card_container_product_description">
              <div class="card-description">
                <p class="cart_product_description">
                  <span class="cart_product_span">Category:</span>${a}
                </p>
                <p class="cart_product_description">
                  <span class="cart_product_span">Size:</span>${_}
                </p>
              </div>
            </div>
            <div class="card_container_price">
              <p class="card_product_price">$${g}</p>
            </div>
          </div>
          <div class="card-product-delete-button">
            <button type="button" class="cart-product-delete-button id="${c}">
              <svg class="cart-icon-close-" width="18" height="18">
                 <use href="./img/icons.svg#icon-delete-close"></use>
              </svg>
            </button>
          </div>
        </div>

    </li>`).join("")}
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
</div>`,l=()=>{const t=JSON.parse(localStorage.getItem("cart-products-list"))||[];if(t.length>0)console.log("full"),r.innerHTML="",r.insertAdjacentHTML("afterbegin",h(t));else{r.innerHTML="",console.log("empty");const e=document.querySelector(".cart");e.innerHTML+=`<div class="container">
    <div class="empty-basket">
      <div class="basket_container">
        <ul class="basket_list">
          <li class="basket_item">
            <svg class="basket_svg" width="18" height="18">
              <use href="./img/icons.svg#icon-cart"></use>
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
  </div>`}},i=document.querySelector(".modal-cart"),b=document.querySelector(".close-btn");function f(){i.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function y(t){t.target===i&&p()}function p(){i.classList.add("is-hidden"),document.body.style.overflow="visible"}window.addEventListener("click",y);b.addEventListener("click",p);l();function n(){const e=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).length,c=document.querySelector(".quantity_products"),s=document.querySelector(".cart-span");c.textContent="("+e+")",JSON.parse(localStorage.getItem("cart-products-list")).length&&(s.textContent="("+e+")")}n();const S=document.querySelector(".cart-product-delete-all-button");function k(t){let e=JSON.parse(localStorage.getItem("cart-products-list"))||[];const c=e.findIndex(s=>s._id===t);c!==-1&&(e.splice(c,1),localStorage.setItem("cart-products-list",JSON.stringify(e)),l(),n())}const C=document.querySelector(".cart-list");function I(t){const e=t.target.closest(".card-product-delete-button");if(e){const c=e.closest(".card_container_product").id;k(c),d()}}document.addEventListener("click",I);function m(){localStorage.setItem("cart-products-list",JSON.stringify([])),r.innerHTML="",n(),d(),C.removeEventListener("click",handleProductClick),l()}JSON.parse(localStorage.getItem("cart-products-list")).length&&S.addEventListener("click",m);const L=document.querySelector(".cart_total_cost");function d(){const e=JSON.parse(localStorage.getItem("cart-products-list")).reduce((c,s)=>c+s.price,0);JSON.parse(localStorage.getItem("cart-products-list")).length&&(L.textContent=`$ ${e.toFixed(2)}`)}d();const O=document.querySelector(".cart_form_button");JSON.parse(localStorage.getItem("cart-products-list")).length&&O.addEventListener("click",q);async function q(){const t=document.querySelector(".cart_form_input").value,c=JSON.parse(localStorage.getItem("cart-products-list")).map(a=>({productId:a._id,amount:a.amount}));if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){u("Please, enter valid Email!");return}const o={email:t,products:c};try{const a=await v(o);m(),f(a)}catch(a){console.error("Error creating order:",a),u("Error creating order. Please try again later.")}}
//# sourceMappingURL=commonHelpers.js.map
