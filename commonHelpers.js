import{i as l,s as u,c as y}from"./assets/footer-subscription-368acc3f.js";import"./assets/vendor-8a888f22.js";const p="/project-grocery-store/assets/basket_1x-97a514f0.png",S="/project-grocery-store/assets/basket_2x-e387b499.png",o=document.querySelector(".cart"),i=()=>{const e=JSON.parse(localStorage.getItem("cart-products-list")).map(({_id:s,name:r,img:a,category:b,price:h,size:f})=>`<li class="card_container_product" id="${s}">

         <div class="description">
          <div class="card_container-product_img">
            <img class="card_product_img" src="${a}" alt="${r}" />
          </div>

          <div class="card_container_product_fullDs">
            <div class="card_container_product_name">
              <h3 class="card_product_name">${r}</h3>
            </div>
            <div class="card_container_product_description">
              <div class="card-description">
                <p class="cart_product_description">
                  <span class="cart_product_span">Category:</span>${b}
                </p>
                <p class="cart_product_description">
                  <span class="cart_product_span">Size:</span>${f}
                </p>
              </div>
            </div>
            <div class="card_container_price">
              <p class="card_product_price">$${h}</p>
            </div>
          </div>
          <div class="card-product-delete-button">
            <button type="button" class="cart-product-delete-button" id="${s}">
              <svg class="cart-icon-close" width="18" height="18">
                 <use href="${l}#icon-delete-close"></use>
              </svg>
            </button>
          </div>
        </div>

    </li>`).join(""),c=o.querySelector(".cart-list");c.innerHTML="",c.insertAdjacentHTML("afterbegin",e)},k=()=>`<div class="container">
  <ul class="cart_list">
    <li class="cart-item">
      <svg class="cart-svg" width="18" height="18">
        <use href="${l}#icon-cart"></use>
      </svg>
    </li>
    <li class="cart-item">
      <p class="cart_text">Cart<span class="cart-span">()</span></p>
    </li>
  </ul>
  <div class="container_full_cart">
    <div class="full">
      <div class="cart-container-delete">
        <button type="button" 
          class="cart-product-delete-all-button" aria-label="Delete">
          <span class="cart-product-delete-span">Delete all</span>
          <svg aria-hidden="true" class="cart-icon-delete-all" width="20" height="20">
            <use width="20" height="20" href="${l}#icon-delete-close"></use>
          </svg>
        </button>
      </div>
      <ul class="cart-list">
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
</div>`,_=()=>{if((JSON.parse(localStorage.getItem("cart-products-list"))||[]).length>0)o.innerHTML="",o.insertAdjacentHTML("afterbegin",k()),i();else{o.innerHTML="";const e=document.querySelector(".cart");e.innerHTML+=`<div class="container">
    <div class="empty-basket">
      <div class="basket_container">
        <ul class="basket_list">
          <li class="basket_item">
            <svg class="basket_svg" width="18" height="18">
              <use href="${l}#icon-cart"></use>
            </svg>
          </li>
          <li class="basket_item">
            <p class="basket_text">Cart<span class="basket_span">(0)</span></p>
          </li>
        </ul>
      </div>
      <img
        class="basket_img"
        srcset="${p}, ${S}"
        src="${p}"
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
  </div>`}};_();const n=document.querySelector(".modal-cart"),C=document.querySelector(".close-btn");function L(){n.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function $(t){t.target===n&&g()}function g(){n.classList.add("is-hidden"),document.body.style.overflow="visible"}window.addEventListener("click",$);C.addEventListener("click",g);const I=document.querySelector(".container_full_cart"),O=t=>{if(t.target.classList.contains("cart-icon-close")){const e=t.target.closest(".cart-product-delete-button");q(e.id),i(),v()}(t.target.classList.contains("cart-product-delete-all-button")||t.target.classList.contains("cart-icon-delete-all"))&&m()};JSON.parse(localStorage.getItem("cart-products-list")).length&&I.addEventListener("click",O);function d(){const t=JSON.parse(localStorage.getItem("cart-products-list")).length,e=document.querySelector(".quantity_products"),c=document.querySelector(".cart-span");e.textContent="("+t+")",JSON.parse(localStorage.getItem("cart-products-list")).length&&(c.textContent="("+t+")")}d();function q(t){let e=JSON.parse(localStorage.getItem("cart-products-list"))||[];const c=e.findIndex(s=>s._id===t);c!==-1&&(e.splice(c,1),localStorage.setItem("cart-products-list",JSON.stringify(e)),i(),d())}function m(){localStorage.setItem("cart-products-list",JSON.stringify([])),d(),_()}function v(){const e=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).reduce((c,s)=>c+s.price,0);if(JSON.parse(localStorage.getItem("cart-products-list")).length){const c=document.querySelector(".cart_total_cost");c.textContent=`$ ${e.toFixed(2)}`}}v();const x=document.querySelector(".cart_form_button");JSON.parse(localStorage.getItem("cart-products-list")).length&&x.addEventListener("click",P);async function P(){const t=document.querySelector(".cart_form_input").value,c=JSON.parse(localStorage.getItem("cart-products-list")).map(a=>({productId:a._id,amount:a.amount}));if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){u("Please, enter valid Email!");return}const r={email:t,products:c};try{const a=await y(r);m(),L(a)}catch(a){console.error("Error creating order:",a),u("Error creating order. Please try again later.")}}
//# sourceMappingURL=commonHelpers.js.map
