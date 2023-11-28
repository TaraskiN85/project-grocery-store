import"./assets/footer-subscription-63044206.js";import"./assets/vendor-8a888f22.js";const r=document.querySelector(".cart-list"),m=JSON.parse(localStorage.getItem("cart-products-list")),d=e=>e.map(({_id:t,name:c,img:o,category:l,price:u,size:p,popularity:h,quantity:$,is10PercentOff:k,desc:M})=>`<li class="card_container_product" id="${t}">

         <div class="description">
          <div class="card_container-product_img">
            <img class="card_product_img" src="${o}" alt="${c}" />
          </div>

          <div class="card_container_product_fullDs">
            <div class="card_container_product_name">
              <h3 class="card_product_name">${c}</h3>
            </div>
            <div class="card_container_product_description">
              <div class="card-description">
                <p class="cart_product_description">
                  <span class="cart_product_span">Category:</span>${l}
                </p>
                <p class="cart_product_description">
                  <span class="cart_product_span">Size:</span>${p}
                </p>
              </div>
            </div>
            <div class="card_container_price">
              <p class="card_product_price">$${u}</p>
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

    </li>`).join(""),_=()=>{r.innerHTML="",r.insertAdjacentHTML("afterbegin",d(m))},g=()=>{const e=JSON.parse(localStorage.getItem("cart-products-list"))||[];r.innerHTML="",r.insertAdjacentHTML("afterbegin",d(e))};_();function a(){const t=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).length,c=document.querySelector(".quantity_products"),o=document.querySelector(".cart-span");c.textContent="("+t+")",o.textContent="("+t+")"}a();const v=document.querySelector(".cart-product-delete-all-button");function y(e){let t=JSON.parse(localStorage.getItem("cart-products-list"))||[];const c=t.findIndex(o=>o._id===e);c!==-1?(t.splice(c,1),localStorage.setItem("cart-products-list",JSON.stringify(t)),g(),a()):console.log("Product not found in cart")}const S=document.querySelector(".cart-list");async function f(e){const t=e.target.closest(".card-product-delete-button");if(t){const c=t.closest(".card_container_product").id;y(c)}n()}S.addEventListener("click",f);function b(){localStorage.setItem("cart-products-list",JSON.stringify([])),r.innerHTML="",a(),n()}v.addEventListener("click",b);const C=document.querySelector(".cart_total_cost");function n(){const t=JSON.parse(localStorage.getItem("cart-products-list")).reduce((c,o)=>c+o.price,0);C.textContent=`$ ${t.toFixed(2)}`}n();const L=document.querySelector(".cart_form_button"),s=document.querySelector(".modal-cart"),P=document.querySelector(".close-btn");function q(e){e.preventDefault();const t=document.querySelector(".cart_form_input").value;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){alert("Please, enter valid Email.");return}s.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function I(e){e.target===s&&i()}function i(){s.classList.add("is-hidden"),document.body.style.overflow="visible"}L.addEventListener("click",q);window.addEventListener("click",I);P.addEventListener("click",i);
//# sourceMappingURL=commonHelpers.js.map
