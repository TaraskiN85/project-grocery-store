import{g as m,a as X,b as Y,d as Z,e as tt}from"./assets/footer-subscription-27fb641b.js";import{P as E}from"./assets/vendor-8a888f22.js";const M={divProdCards:document.querySelector(".js-product-cards")};function S(e){M.divProdCards.innerHTML="",M.divProdCards.insertAdjacentHTML("afterbegin",et(e))}function et(e){return e.results.length===0?`<div clas="products-nothing-container">
              <p class="products-nothing-headline">Nothing was found for the selected
                <span class="nothing-headline-span">filters...</span>
              </p>
              <p class="products-nothing-text">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
            </div>`:e.results.map(({_id:t,name:s,img:i,category:l,price:n,size:p,popularity:f})=>`<div class="product-card-prod" id="${t}">
            <div class="product-card-img-prod">
              <img class="card-img-prod" src="${i}" alt="${s}">
            </div>
            <h3 class="produc-card-name-prod">${s}</h3>
            <div class="product-card-description-prod">
              <div class="card-description-prod">
                <p>Category:</p>
                <p class="card-description-value-prod">${l}</p>
              </div>
              <div class="card-description-prod">
                <p>Size:</p>
                <p class="card-description-value-prod">${p}</p>
              </div>
              <div class="card-description-prod">
                <p>Popularity:</p>
                <p class="card-description-value-prod">${f}</p>
              </div>
            </div>
            
            <div class="product-card-price-btn-prod">
              <p class="product-card-price-prod">${n}</p>
              <button type="button" class="product-card-btn-prod id="${t}">
                <svg width="18" height="18">
                  <use class="button-icon-prod" href="./img/icons.svg#icon-cart"></use>
                </svg>
              </button>
            </div>
          </div>`).join("")}const I=document.getElementById("pagination"),P=JSON.parse(localStorage.getItem("search-params"));m().then(e=>{const t=e.page;let s=e.totalPages;const i=P.limit,l=i*s;if(s<=1)return;new E(I,{totalItems:l,itemsPerPage:i,visiblePages:3,page:t,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("afterMove",function(p){const f=p.page;async function v(k){try{const y=JSON.parse(localStorage.getItem("search-params"));y.page=k,localStorage.setItem("search-params",JSON.stringify(y));const w=await m(y);S(w)}catch(y){console.error(y)}}v(f)})}).catch(e=>console.log(e));document.querySelector(".category-input").addEventListener("change",st);function st(){I.innerHTML="",document.querySelector(".category-input"),JSON.parse(localStorage.getItem("search-params")),m().then(e=>{let t=e.totalPages;const s=P.limit,i=s*t;t<=1||new E(I,{totalItems:i,itemsPerPage:s,visiblePages:4,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><svg width="32" height="32"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="32" height="32"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}})}).catch(e=>console.log(e))}document.querySelector(".js-search-input").addEventListener("change",ct);function ct(e){e.preventDefault(),P.keyword=e.target.value,I.innerHTML="",localStorage.setItem("search-params",JSON.stringify(P)),JSON.parse(localStorage.getItem("search-params")),m().then(t=>{let s=t.totalPages;const i=P.limit,l=i*s;s<=1||new E(I,{totalItems:l,itemsPerPage:i,visiblePages:4,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><svg width="32" height="32"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="32" height="32"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}})}).catch(t=>console.log(t))}const $={popularProductCards:document.querySelector(".js-popular-product-cards"),discountProductCards:document.querySelector(".js-discount-product-cards")};async function ot(){const e=await X();$.popularProductCards.insertAdjacentHTML("beforeend",at(e))}function at(e){return e.map(({_id:t,name:s,img:i,category:l,size:n,popularity:p})=>`<div class="container-for-popular-items" id="${t}">
          <div class="aside-product-card" id="${t}">
                  <div class="aside-card-img">
                      <img class="aside-img"
                          src="${i}"
                          alt="${s}">
                  </div>
                 <div class="container-for-name-descr">
                  <div class="card-product-name-container">
                  <h3 class="aside-card-name">${s}</h3>
                     </div>
                  <div class="products-card-description">
                      <div class="aside-card-description">
                          <p class="descr-p">Category:</p>
                          <p class="card-descr-value">${l}</p>
                      </div>
                      <div class="size-popularity-container">
                      <div class="aside-card-description">
                          <p class="descr-p">Size:</p>
                          <p class="card-descr-value">${n}</p>
                      </div>
                      <div class="aside-card-description">
                          <p class="descr-p">Popularity:</p>
                          <p class="card-descr-value">${p}</p>
                      </div>
                  </div>
                  </div>
                  </div>
                  <div class="product-card-prices-btn">
                      <button type="button" class="products-card-btn" id="${t}">
                          <svg width="16" height="16">
                              <use class="popular-button-icon" href="./img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
              </div>
              </div>`).join("")}async function rt(){const e=await Y();$.discountProductCards.insertAdjacentHTML("beforeend",nt(e))}function nt(e){return e.slice(0,2).map(({_id:s,name:i,img:l,price:n})=>`<div class="container-for-discount-items" id="${s}">
          <div class="discount-product-card" id="${s}">
                  <div class="discount-product-card-img">
                      <img class="discount-card-img"
                          src="${l}"
                          alt="${i}">
                          <span class="discount-svg">
                          <svg width="60" height="60" >
                              <use  href="./img/icons.svg#icon-discount"></use>
                          </svg>
                          </span>
                  </div>
                  <div class="product-card-prices-btn">
                  <h3 class="discount-product-card-name">${i}</h3>

                 <div class="discount-price-icon-container">
                      <p class="product-card-price">$${n}</p>
                      <button type="button" class="discount-product-card-btn" id="${s}">
                          <svg width="18" height="18">
                              <use class="discount-button-icon" href="./img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
                  </div>
              </div>
              </div>`).join("")}const u=document.querySelector(".js-category"),L=document.querySelector(".js-search-input"),it={keyword:"",category:"",page:1,limit:6},dt=JSON.parse(localStorage.getItem("search-params"));u.addEventListener("input",pt);L.addEventListener("submit",gt);function lt(e){const t=e.map(s=>`<option value="${s}">${s}</option>`).join("");u.insertAdjacentHTML("afterbegin",t),mt()}function B(){const e=window.innerWidth;if(e<768){const t=JSON.parse(localStorage.getItem("search-params"));t.limit=6,localStorage.setItem("search-params",JSON.stringify(t)),m().then(s=>S(s)).catch(s=>console.log(s))}else if(e>=768&&e<1440){const t=JSON.parse(localStorage.getItem("search-params"));t.limit=8,localStorage.setItem("search-params",JSON.stringify(t)),m().then(s=>S(s)).catch(s=>console.log(s))}else{const t=JSON.parse(localStorage.getItem("search-params"));t.limit=9,localStorage.setItem("search-params",JSON.stringify(t)),m().then(s=>S(s)).catch(s=>console.log(s))}}function ut(){const e=JSON.parse(localStorage.getItem("search-params"));e&&(L.elements.searchQuery.value=e.keyword??"",u.options[u.selectedIndex].value=e.category??"")}function pt(){const e=JSON.parse(localStorage.getItem("search-params"));u.options[u.selectedIndex].value==="All"?(sorting.selectedIndex=0,u.selectedIndex=u.options.length-1,localStorage.setItem("search-params",JSON.stringify(it))):(e.category=u.options[u.selectedIndex].value,localStorage.setItem("search-params",JSON.stringify(e))),m().then(t=>S(t)).catch(t=>console.log(t))}function gt(e){if(e.preventDefault(),L.elements.searchQuery.value===""){const t=JSON.parse(localStorage.getItem("search-params"));t.page=1,sorting.selectedIndex=0,t.sorting="",localStorage.setItem("search-params",JSON.stringify(t))}else{const t=JSON.parse(localStorage.getItem("search-params"));t.page=1,t.keyword=L.elements.searchQuery.value,localStorage.setItem("search-params",JSON.stringify(t))}m().then(t=>S(t)).catch(t=>console.log(t))}function mt(){for(let e=0;e<u.options.length;e++)if(u.options[e].value===dt.category){u.options[e].selected=!0;break}}function ht(e){console.log("Hi");const t=JSON.parse(localStorage.getItem("search-params"));switch(e.value){case"a_z":t.byABC=!0,delete t.byPrice,delete t.byPopularity;break;case"z_a":t.byABC=!1,delete t.byPrice,delete t.byPopularity;break;case"cheap":t.byPrice=!0,delete t.byABC,delete t.byPopularity;break;case"expensive":t.byPrice=!1,delete t.byABC,delete t.byPopularity;break;case"popular":t.byPopularity=!0,delete t.byPrice,delete t.byABC;break;case"not_popular":t.byPopularity=!1,delete t.byPrice,delete t.byABC;break;case"All":t.page=1,delete t.byPrice,delete t.byPopularity,delete t.byABC;break}localStorage.setItem("search-params",JSON.stringify(t)),m().then(s=>S(s)).catch(s=>console.log(s))}document.querySelectorAll(".dropdown-wrapper").forEach(function(e){const t=e.querySelector(".dropdown-sortingBtn"),s=e.querySelector(".dropdown-sorting__list"),i=s.querySelectorAll(".dropdown-sorting__item"),l=e.querySelector(".dropdown__input-hidden");t.addEventListener("click",function(n){s.classList.toggle("dropdown__list--visible"),this.classList.add("dropdown__button--active")}),i.forEach(function(n){n.addEventListener("click",function(p){p.stopPropagation(),t.innerText=this.innerText,l.value=this.dataset.value,ht(l),s.classList.remove("dropdown__list--visible")})}),document.addEventListener("click",function(n){n.target!==t&&(t.classList.remove("dropdown__button--active"),s.classList.remove("dropdown__list--visible"))})});document.addEventListener("DOMContentLoaded",async function(){const e=document.querySelector(".container-product-cards-prod"),t=document.querySelector(".modal"),s=document.querySelector(".modal-close-btn"),i=document.querySelector(".container-aside-cards"),l=document.querySelector(".container-discount-product-cards"),n=document.querySelector(".addtocart-btn"),p=document.querySelector(".modal-discount-svg");async function f(c){try{const o=await C(c),a=JSON.parse(localStorage.getItem("cart-products-list"))||[],r=a.findIndex(h=>h._id===o._id);r!==-1?(a.splice(r,1),localStorage.setItem("cart-products-list",JSON.stringify(a)),v(),O()):(o.amount=1,a.push(o),localStorage.setItem("cart-products-list",JSON.stringify(a)),v(),O())}catch(o){console.error("Error managing cart:",o)}}function v(){const c=n.id,a=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).some(r=>r._id===c);k(a),y(),w(),J()}function k(c){c?n.innerHTML='Remove from <svg width="18" height="18"><use class="button-icon" href="../img/icons.svg#icon-cart"></use></svg>':n.innerHTML='Add to <svg width="18" height="18"><use class="button-icon" href="../img/icons.svg#icon-cart"></use></svg>'}async function y(){try{const c=await JSON.parse(localStorage.getItem("cart-products-list"))||[],o=document.querySelector(".container-product-cards-prod");o&&o.querySelectorAll(".product-card-prod").forEach(r=>{const h=r.id,d=r.querySelector(".product-card-price-btn-prod .product-card-btn-prod");if(d){const g=c.some(b=>b._id===h);d.disabled=g,g?d.innerHTML='<svg width="18" height="18"><use class="button-icon" href="../img/icons.svg#icon-check"></use></svg>':d.innerHTML='<svg width="18" height="18"><use class="button-icon" href="../img/icons.svg#icon-cart"></use></svg>'}})}catch(c){console.error("Error updating button content:",c)}}async function w(){try{const c=await JSON.parse(localStorage.getItem("cart-products-list"))||[],o=document.querySelector(".container-discount-product-cards");o&&o.querySelectorAll(".container-for-discount-items").forEach(r=>{const h=r.id,d=r.querySelector(".discount-product-card-btn");if(d){const g=c.some(b=>b._id===h);d.disabled=g,g?d.innerHTML='<svg width="16" height="16"><use class="discount-button-icon" href="../img/icons.svg#icon-check"></use></svg>':d.innerHTML='<svg width="16" height="16"><use class="discount-button-icon" href="../img/icons.svg#icon-cart"></use></svg>'}})}catch(c){console.error("Error updating button content:",c)}}async function J(){try{const c=await JSON.parse(localStorage.getItem("cart-products-list"))||[],o=document.querySelector(".container-aside-cards");o&&o.querySelectorAll(".container-for-popular-items").forEach(r=>{const h=r.id,d=r.querySelector(".products-card-btn");if(d){const g=c.some(b=>b._id===h);d.disabled=g,g?d.innerHTML='<svg width="16" height="16" fill="#6d8434"><use class="popular-button-icon" href="../img/icons.svg#icon-check"></use></svg>':d.innerHTML='<svg width="16" height="16" fill="#6d8434"><use class="popular-button-icon" href="../img/icons.svg#icon-cart"></use></svg>'}})}catch(c){console.error("Error updating button content:",c)}}setInterval(w,2e3),setInterval(y,2e3),setInterval(J,2e3);function A(){t.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function N(){t.classList.add("is-hidden"),document.body.style.overflow="visible"}document.addEventListener("keydown",function(c){c.key==="Escape"&&N()});function D(c){c.target===t&&N()}window.addEventListener("click",D),s.addEventListener("click",N);const C=async c=>{try{return await Z(c)}catch(o){return console.error("Error fetching product details:",o),null}};async function x(c){const o=c.target.closest(".product-card-img-prod");if(o){const a=o.closest(".product-card-prod").id;n.setAttribute("id",a),t.setAttribute("id",a);const r=await C(a);r?q(r):console.log("Product ID not found in fetched-products")}}async function _(c){const o=c.target.closest(".product-card-btn-prod");if(o){const a=o.closest(".product-card-prod").id;a?(f(a),v()):console.log("Product ID not found in fetched-products")}}async function T(c){const o=c.target.closest(".products-card-btn");if(o){const a=o.closest(".aside-product-card").id;a?(f(a),v()):console.log("Product ID not found in fetched-products")}}async function j(c){const o=c.target.closest(".aside-card-img");if(o){const a=o.closest(".aside-product-card").id;n.setAttribute("id",a),t.setAttribute("id",a);const r=await C(a);r?q(r):console.log("Product ID not found in fetched-products")}}async function H(c){const o=c.target.closest(".discount-product-card-btn");if(o){const a=o.closest(".discount-product-card").id;a?(f(a),v()):console.log("Product ID not found in fetched-products")}}async function z(c){const o=c.target.closest(".discount-product-card-img");if(o){const a=o.closest(".discount-product-card").id;n.setAttribute("id",a),t.setAttribute("id",a);const r=await C(a);r?q(r):console.log("Product ID not found in fetched-products")}}function q(c){const{name:o,price:a,desc:r,img:h,category:d,size:g,popularity:b,is10PercentOff:Q}=c;A(),v(),c.is10PercentOff===!0?p.style.display="block":p.style.display="none",console.log(Q);const F=document.querySelector(".modal-title"),V=document.querySelector(".price"),K=document.querySelector(".modal-text"),R=document.querySelector(".img-content"),G=document.querySelector(".modal-size"),U=document.querySelector(".modal-category"),W=document.querySelector(".modal-pop");F.textContent=o,V.textContent=`$${a}`,K.textContent=r,R.setAttribute("src",h),G.textContent=g,U.textContent=d,W.textContent=b}e.addEventListener("click",x),e.addEventListener("click",_),i.addEventListener("click",j),i.addEventListener("click",T),l.addEventListener("click",z),l.addEventListener("click",H),n.addEventListener("click",async c=>{c.preventDefault();const o=n.id;await f(o)})});window.addEventListener("resize",B);ut();B();tt().then(e=>{lt(e)}).catch(e=>{console.log(e)});ot();rt();const ft=JSON.parse(localStorage.getItem("cart-products-list"));ft||localStorage.setItem("cart-products-list",JSON.stringify([]));function O(){const t=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).length,s=document.querySelector(".quantity_products");s.textContent="("+t+")"}O();
//# sourceMappingURL=commonHelpers2.js.map
