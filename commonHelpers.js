import"./assets/styles-2ecbfd29.js";const r=document.querySelector(".cart-list"),p=JSON.parse(localStorage.getItem("cart-products-list")),_=t=>t.map(({_id:e,name:c,img:o,category:i,price:l,size:u,popularity:L,quantity:h,is10PercentOff:k,desc:C})=>`<li class="card_container_product" id="${e}">

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
                  <span class="cart_product_span">Category:</span>${i}
                </p>
                <p class="cart_product_description">
                  <span class="cart_product_span">Size:</span>${u}
                </p>
              </div>
            </div>
            <div class="card_container_price">
              <p class="card_product_price">${l}</p>
            </div>
          </div>
          <div class="card-product-delete-button">
            <button type="button" class="cart-product-delete-button">
              <svg class="cart-icon-close-" width="18" height="18">
                <use src="../img/icons.svg#icon-delete-close"></use>
              </svg>
            </button>
          </div>
        </div>

    </li>`).join(""),n=()=>{r.innerHTML="",r.insertAdjacentHTML("afterbegin",_(p))};n();const s=document.querySelector(".card-product-delete-button").parentNode,m=document.querySelector(".cart-product-delete-all-button").parentNode;s.addEventListener("click",v);m.addEventListener("click",g);console.log(s);function v(){const t=s.parentNode.id;console.log(t);const e=JSON.parse(localStorage.getItem("cart-products-list"));console.log(e);const c=e.filter(o=>o._id!==t);localStorage.setItem("cart-products-list",JSON.stringify(c)),console.log(c),r.innerHTML="",n()}function g(){localStorage.setItem("cart-products-list",JSON.stringify([])),r.innerHTML=""}const y=document.querySelector(".cart_form_button"),d=document.querySelector(".modal-cart"),f=document.querySelector(".close-btn");function S(){d.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function b(t){t.target===d&&a()}function a(){d.classList.add("is-hidden"),document.body.style.overflow="visible"}y.addEventListener("click",S);window.addEventListener("click",b);f.addEventListener("click",a);
//# sourceMappingURL=commonHelpers.js.map
