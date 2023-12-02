import{i as r,s as p,c as y}from"./assets/footer-subscription-a67d3235.js";import"./assets/vendor-8a888f22.js";const _="/project-grocery-store/assets/basket_1x-97a514f0.png",S="/project-grocery-store/assets/basket_2x-e387b499.png",o=document.querySelector(".cart");JSON.parse(localStorage.getItem("cart-products-list"));const k=e=>{const t=e.map(({_id:c,name:s,img:l,category:a,price:h,size:f,popularity:w,quantity:N,is10PercentOff:P,desc:J})=>`<li class="card_container_product" id="${c}">

         <div class="description">
          <div class="card_container-product_img">
            <img class="card_product_img" src="${l}" alt="${s}" />
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
                  <span class="cart_product_span">Size:</span>${f}
                </p>
              </div>
            </div>
            <div class="card_container_price">
              <p class="card_product_price">$${h}</p>
            </div>
          </div>
          <div class="card-product-delete-button">
            <button type="button" class="cart-product-delete-button" id="${c}">
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
</div>`},n=()=>{const e=JSON.parse(localStorage.getItem("cart-products-list"))||[];if(e.length>0)o.innerHTML="",o.insertAdjacentHTML("afterbegin",k(e));else{o.innerHTML="";const t=document.querySelector(".cart");t.innerHTML+=`<div class="container">
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
        srcset="${_}, ${S}"
        src="${_}"
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
  </div>`}},i=document.querySelector(".modal-cart"),C=document.querySelector(".close-btn");function I(){i.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function $(e){e.target===i&&m()}function m(){i.classList.add("is-hidden"),document.body.style.overflow="visible"}window.addEventListener("click",$);C.addEventListener("click",m);n();function d(){const t=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).length,c=document.querySelector(".quantity_products"),s=document.querySelector(".cart-span");c.textContent="("+t+")",JSON.parse(localStorage.getItem("cart-products-list")).length&&(s.textContent="("+t+")")}d();const L=document.querySelector(".cart-product-delete-all-button");function O(e){let t=JSON.parse(localStorage.getItem("cart-products-list"))||[];const c=t.findIndex(s=>s._id===e);c!==-1&&(t.splice(c,1),localStorage.setItem("cart-products-list",JSON.stringify(t)),n(),d())}const g=document.querySelector(".cart-list");function u(e){const t=e.target.closest(".card-product-delete-button");if(t){const c=t.closest(".card_container_product").id;O(c),b()}}document.addEventListener("click",u);JSON.parse(localStorage.getItem("cart-products-list")).length&&g.addEventListener("click",u);function v(){localStorage.setItem("cart-products-list",JSON.stringify([])),o.innerHTML="",d(),g.removeEventListener("click",u),n()}JSON.parse(localStorage.getItem("cart-products-list")).length&&L.addEventListener("click",v);async function b(){const t=(await JSON.parse(localStorage.getItem("cart-products-list"))||[]).reduce((c,s)=>c+s.price,0);if(JSON.parse(localStorage.getItem("cart-products-list")).length){const c=document.querySelector(".cart_total_cost");c.textContent=`$ ${t.toFixed(2)}`}}b();const q=document.querySelector(".cart_form_button");JSON.parse(localStorage.getItem("cart-products-list")).length&&q.addEventListener("click",x);async function x(){const e=document.querySelector(".cart_form_input").value,c=JSON.parse(localStorage.getItem("cart-products-list")).map(a=>({productId:a._id,amount:a.amount}));if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){p("Please, enter valid Email!");return}const l={email:e,products:c};try{const a=await y(l);v(),I(a)}catch(a){console.error("Error creating order:",a),p("Error creating order. Please try again later.")}}
//# sourceMappingURL=commonHelpers.js.map
