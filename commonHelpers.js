import{s as i,c as g}from"./assets/footer-subscription-0dc6c13c.js";import"./assets/vendor-8a888f22.js";const a=document.querySelector(".cart-list"),_=JSON.parse(localStorage.getItem("cart-products-list")),l=e=>e.map(({_id:t,name:c,img:r,category:o,price:p,size:m,popularity:E,quantity:M,is10PercentOff:N,desc:j})=>`<li class="card_container_product" id="${t}">

         <div class="description">
          <div class="card_container-product_img">
            <img class="card_product_img" src="${r}" alt="${c}" />
          </div>

          <div class="card_container_product_fullDs">
            <div class="card_container_product_name">
              <h3 class="card_product_name">${c}</h3>
            </div>
            <div class="card_container_product_description">
              <div class="card-description">
                <p class="cart_product_description">
                  <span class="cart_product_span">Category:</span>${o}
                </p>
                <p class="cart_product_description">
                  <span class="cart_product_span">Size:</span>${m}
                </p>
              </div>
            </div>
            <div class="card_container_price">
              <p class="card_product_price">$${p}</p>
            </div>
          </div>
          <div class="card-product-delete-button">
            <button type="button" class="cart-product-delete-button id="${t}">
              <svg class="cart-icon-close-" width="18" height="18">
                 <use href="./img/icons.svg#icon-delete-close"></use>
              </svg>
            </button>
          </div>
        </div>

    </li>`).join(""),S=()=>{a.innerHTML="",a.insertAdjacentHTML("afterbegin",l(_))},y=()=>{const e=JSON.parse(localStorage.getItem("cart-products-list"))||[];a.innerHTML="",a.insertAdjacentHTML("afterbegin",l(e))},s=document.querySelector(".modal-cart"),v=document.querySelector(".close-btn");function f(){s.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function b(e){e.target===s&&u()}function u(){s.classList.add("is-hidden"),document.body.style.overflow="visible"}window.addEventListener("click",b);v.addEventListener("click",u);S();function n(){const t=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).length,c=document.querySelector(".quantity_products"),r=document.querySelector(".cart-span");c.textContent="("+t+")",r.textContent="("+t+")"}n();const C=document.querySelector(".cart-product-delete-all-button");function L(e){let t=JSON.parse(localStorage.getItem("cart-products-list"))||[];const c=t.findIndex(r=>r._id===e);c!==-1?(t.splice(c,1),localStorage.setItem("cart-products-list",JSON.stringify(t)),y(),n()):console.log("Product not found in cart")}const P=document.querySelector(".cart-list");async function I(e){const t=e.target.closest(".card-product-delete-button");if(t){const c=t.closest(".card_container_product").id;L(c)}d()}P.addEventListener("click",I);function h(){localStorage.setItem("cart-products-list",JSON.stringify([])),a.innerHTML="",n(),d()}C.addEventListener("click",h);const q=document.querySelector(".cart_total_cost");function d(){const t=JSON.parse(localStorage.getItem("cart-products-list")).reduce((c,r)=>c+r.price,0);q.textContent=`$ ${t.toFixed(2)}`}d();const O=document.querySelector(".cart_form_button");O.addEventListener("click",k);function $(){localStorage.removeItem("cart-products-list")}async function k(){const e=document.querySelector(".cart_form_input").value,t=JSON.parse(localStorage.getItem("cart-products-list"));if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){i("Please, enter valid Email!");return}const r={email:e,products:t};console.log(r);try{const o=await g(r);$(),f(o)}catch(o){console.error("Error creating order:",o),i("Error creating order. Please try again later.")}}
//# sourceMappingURL=commonHelpers.js.map
