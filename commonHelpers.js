import{s as l,c as _}from"./assets/footer-subscription-6a804ea6.js";import"./assets/vendor-8a888f22.js";const a=document.querySelector(".cart-list"),y=JSON.parse(localStorage.getItem("cart-products-list")),u=e=>e.map(({_id:t,name:c,img:r,category:s,price:o,size:g,popularity:k,quantity:j,is10PercentOff:E,desc:M})=>`<li class="card_container_product" id="${t}">

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
                  <span class="cart_product_span">Category:</span>${s}
                </p>
                <p class="cart_product_description">
                  <span class="cart_product_span">Size:</span>${g}
                </p>
              </div>
            </div>
            <div class="card_container_price">
              <p class="card_product_price">$${o}</p>
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

    </li>`).join(""),S=()=>{a.innerHTML="",a.insertAdjacentHTML("afterbegin",u(y))},v=()=>{const e=JSON.parse(localStorage.getItem("cart-products-list"))||[];a.innerHTML="",a.insertAdjacentHTML("afterbegin",u(e))},n=document.querySelector(".modal-cart"),f=document.querySelector(".close-btn");function b(){n.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function C(e){e.target===n&&p()}function p(){n.classList.add("is-hidden"),document.body.style.overflow="visible"}window.addEventListener("click",C);f.addEventListener("click",p);S();function d(){const t=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).length,c=document.querySelector(".quantity_products"),r=document.querySelector(".cart-span");c.textContent="("+t+")",r.textContent="("+t+")"}d();const P=document.querySelector(".cart-product-delete-all-button");function I(e){let t=JSON.parse(localStorage.getItem("cart-products-list"))||[];const c=t.findIndex(r=>r._id===e);c!==-1?(t.splice(c,1),localStorage.setItem("cart-products-list",JSON.stringify(t)),v(),d()):console.log("Product not found in cart")}const L=document.querySelector(".cart-list");async function q(e){const t=e.target.closest(".card-product-delete-button");if(t){const c=t.closest(".card_container_product").id;I(c)}i()}L.addEventListener("click",q);function m(){localStorage.setItem("cart-products-list",JSON.stringify([])),a.innerHTML="",d(),i()}P.addEventListener("click",m);const h=document.querySelector(".cart_total_cost");function i(){const t=JSON.parse(localStorage.getItem("cart-products-list")).reduce((c,r)=>c+r.price,0);h.textContent=`$ ${t.toFixed(2)}`}i();const O=document.querySelector(".cart_form_button");O.addEventListener("click",$);async function $(){const e=document.querySelector(".cart_form_input").value,c=JSON.parse(localStorage.getItem("cart-products-list")).map(o=>({productId:o._id,amount:o.amount}));if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){l("Please, enter valid Email!");return}const s={email:e,products:c};try{const o=await _(s);m(),b(o)}catch(o){console.error("Error creating order:",o),l("Error creating order. Please try again later.")}}
//# sourceMappingURL=commonHelpers.js.map
