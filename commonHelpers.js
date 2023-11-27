import"./assets/styles-fb01c2b2.js";const n=document.querySelector(".cart-list"),l=JSON.parse(localStorage.getItem("cart-products-list")),u=c=>c.map(({_id:d,name:s,img:o,category:a,price:e,size:i,popularity:g,quantity:b,is10PercentOff:f,desc:h})=>`<li class="card_container_product" id="${d}">

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
                  <span class="cart_product_span">Size:</span>${i}
                </p>
              </div>
            </div>
            <div class="card_container_price">
              <p class="card_product_price">${e}</p>
            </div>
          </div>
          <div class="card-product-close-button">
            <button type="button" class="cart-product-close-button">
              <svg class="cart-icon-close-" width="18" height="18">
                <use src="../img/icons.svg#icon-delete-close"></use>
              </svg>
            </button>
          </div>
        </div>

    </li>`).join(""),p=()=>{n.insertAdjacentHTML("afterbegin",u(l))};p();const _=document.querySelector(".cart_form_button"),t=document.querySelector(".modal-cart"),v=document.querySelector(".close-btn");function m(){t.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function y(c){c.target===t&&r()}function r(){t.classList.add("is-hidden"),document.body.style.overflow="visible"}_.addEventListener("click",m);window.addEventListener("click",y);v.addEventListener("click",r);
//# sourceMappingURL=commonHelpers.js.map
