import"./assets/footer-subscription-05dc7ea4.js";import"./assets/vendor-8a888f22.js";const o=document.querySelector(".cart-list"),p=JSON.parse(localStorage.getItem("cart-products-list")),s=e=>e.map(({_id:t,name:c,img:r,category:i,price:l,size:u,popularity:I,quantity:h,is10PercentOff:$,desc:k})=>`<li class="card_container_product" id="${t}">

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
                  <span class="cart_product_span">Category:</span>${i}
                </p>
                <p class="cart_product_description">
                  <span class="cart_product_span">Size:</span>${u}
                </p>
              </div>
            </div>
            <div class="card_container_price">
              <p class="card_product_price">$${l}</p>
            </div>
          </div>
          <div class="card-product-delete-button">
            <button type="button" class="cart-product-delete-button id="${t}">
              <svg class="cart-icon-close-" width="18" height="18">
                <use src="./img/icons.svg#icon-delete-close"></use>
              </svg>
            </button>
          </div>
        </div>

    </li>`).join(""),m=()=>{o.innerHTML="",o.insertAdjacentHTML("afterbegin",s(p))},_=()=>{const e=JSON.parse(localStorage.getItem("cart-products-list"))||[];o.innerHTML="",o.insertAdjacentHTML("afterbegin",s(e))};m();function n(){const t=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).length,c=document.querySelector(".quantity_products"),r=document.querySelector(".cart-span");c.textContent="("+t+")",r.textContent="("+t+")"}n();const g=document.querySelector(".cart-product-delete-all-button");function v(e){let t=JSON.parse(localStorage.getItem("cart-products-list"))||[];const c=t.findIndex(r=>r._id===e);c!==-1?(t.splice(c,1),localStorage.setItem("cart-products-list",JSON.stringify(t)),_(),n()):console.log("Product not found in cart")}const y=document.querySelector(".cart-list");async function f(e){const t=e.target.closest(".card-product-delete-button");if(t){const c=t.closest(".card_container_product").id;v(c)}}y.addEventListener("click",f);function S(){localStorage.setItem("cart-products-list",JSON.stringify([])),o.innerHTML="",n()}g.addEventListener("click",S);const C=document.querySelector(".cart_form_button"),a=document.querySelector(".modal-cart"),b=document.querySelector(".close-btn");function L(e){e.preventDefault();const t=document.querySelector(".cart_form_input").value;if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)){alert("Please, enter valid Email.");return}a.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function q(e){e.target===a&&d()}function d(){a.classList.add("is-hidden"),document.body.style.overflow="visible"}C.addEventListener("click",L);window.addEventListener("click",q);b.addEventListener("click",d);
//# sourceMappingURL=commonHelpers.js.map
