import{g,a as Y,b as Z,d as tt,e as et}from"./assets/footer-subscription-6a49ac83.js";import{P as E}from"./assets/vendor-8a888f22.js";const $={divProdCards:document.querySelector(".js-product-cards")};function S(t){$.divProdCards.innerHTML="",$.divProdCards.insertAdjacentHTML("afterbegin",st(t))}function st(t){return t.results.length===0?`<div clas="products-nothing-container">
              <p class="products-nothing-headline">Nothing was found for the selected
                <span class="nothing-headline-span">filters...</span>
              </p>
              <p class="products-nothing-text">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
            </div>`:t.results.map(({_id:e,name:o,img:n,category:u,price:d,size:h,popularity:f})=>`<div class="product-card-prod" id="${e}">
            <div class="product-card-img-prod">
              <img class="card-img-prod" src="${n}" alt="${o}">
            </div>
            <h3 class="produc-card-name-prod">${o}</h3>
            <div class="product-card-description-prod">
              <div class="card-description-prod">
                <p>Category:</p>
                <p class="card-description-value-prod">${u}</p>
              </div>
              <div class="card-description-prod">
                <p>Size:</p>
                <p class="card-description-value-prod">${h}</p>
              </div>
              <div class="card-description-prod">
                <p>Popularity:</p>
                <p class="card-description-value-prod">${f}</p>
              </div>
            </div>
            
            <div class="product-card-price-btn-prod">
              <p class="product-card-price-prod">${d}</p>
              <button type="button" class="product-card-btn-prod id="${e}">
                <svg width="18" height="18">
                  <use class="button-icon-prod" href="./img/icons.svg#icon-cart"></use>
                </svg>
              </button>
            </div>
          </div>`).join("")}const I=document.getElementById("pagination"),P=JSON.parse(localStorage.getItem("search-params"));g().then(t=>{const e=t.page;let o=t.totalPages;const n=P.limit,u=n*o;if(o<=1)return;new E(I,{totalItems:u,itemsPerPage:n,visiblePages:3,page:e,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("afterMove",function(h){const f=h.page;async function v(N){try{const y=JSON.parse(localStorage.getItem("search-params"));y.page=N,localStorage.setItem("search-params",JSON.stringify(y));const w=await g(y);S(w)}catch(y){console.error(y)}}v(f)})}).catch(t=>console.log(t));document.querySelector(".category-input").addEventListener("change",ct);function ct(){I.innerHTML="",document.querySelector(".category-input"),JSON.parse(localStorage.getItem("search-params")),g().then(t=>{let e=t.totalPages;const o=P.limit,n=o*e;e<=1||new E(I,{totalItems:n,itemsPerPage:o,visiblePages:4,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><svg width="32" height="32"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="32" height="32"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}})}).catch(t=>console.log(t))}document.querySelector(".js-search-input").addEventListener("change",ot);function ot(t){t.preventDefault(),P.keyword=t.target.value,I.innerHTML="",localStorage.setItem("search-params",JSON.stringify(P)),JSON.parse(localStorage.getItem("search-params")),g().then(e=>{let o=e.totalPages;const n=P.limit,u=n*o;o<=1||new E(I,{totalItems:u,itemsPerPage:n,visiblePages:4,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><svg width="32" height="32"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="32" height="32"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}})}).catch(e=>console.log(e))}const A={popularProductCards:document.querySelector(".js-popular-product-cards"),discountProductCards:document.querySelector(".js-discount-product-cards")};async function at(){const t=await Y();A.popularProductCards.insertAdjacentHTML("beforeend",rt(t))}function rt(t){return t.map(({_id:e,name:o,img:n,category:u,size:d,popularity:h})=>`<div class="container-for-popular-items" id="${e}">
          <div class="aside-product-card" id="${e}">
                  <div class="aside-card-img">
                      <img class="aside-img"
                          src="${n}"
                          alt="${o}">
                  </div>
                 <div class="container-for-name-descr">
                  <div class="card-product-name-container">
                  <h3 class="aside-card-name">${o}</h3>
                     </div>
                  <div class="products-card-description">
                      <div class="aside-card-description">
                          <p class="descr-p">Category:</p>
                          <p class="card-descr-value">${u}</p>
                      </div>
                      <div class="size-popularity-container">
                      <div class="aside-card-description">
                          <p class="descr-p">Size:</p>
                          <p class="card-descr-value">${d}</p>
                      </div>
                      <div class="aside-card-description">
                          <p class="descr-p">Popularity:</p>
                          <p class="card-descr-value">${h}</p>
                      </div>
                  </div>
                  </div>
                  </div>
                  <div class="product-card-prices-btn">
                      <button type="button" class="products-card-btn" id="${e}">
                          <svg width="16" height="16">
                              <use class="popular-button-icon" href="./img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
              </div>
              </div>`).join("")}async function nt(){const t=await Z();A.discountProductCards.insertAdjacentHTML("beforeend",it(t))}function it(t){return t.slice(0,2).map(({_id:o,name:n,img:u,price:d})=>`<div class="container-for-discount-items" id="${o}">
          <div class="discount-product-card" id="${o}">
                  <div class="discount-product-card-img">
                      <img class="discount-card-img"
                          src="${u}"
                          alt="${n}">
                          <span class="discount-svg">
                          <svg width="60" height="60" >
                              <use  href="./img/icons.svg#icon-discount"></use>
                          </svg>
                          </span>
                  </div>
                  <div class="product-card-prices-btn">
                  <h3 class="discount-product-card-name">${n}</h3>

                 <div class="discount-price-icon-container">
                      <p class="product-card-price">$${d}</p>
                      <button type="button" class="discount-product-card-btn" id="${o}">
                          <svg width="18" height="18">
                              <use class="discount-button-icon" href="./img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
                  </div>
              </div>
              </div>`).join("")}const l=document.querySelector(".js-category"),C=document.querySelector(".js-sorting"),L=document.querySelector(".js-search-input"),dt={keyword:"",category:"",page:1,limit:6},lt=JSON.parse(localStorage.getItem("search-params"));l.addEventListener("input",gt);C.addEventListener("input",ft);L.addEventListener("submit",mt);function ut(t){const e=t.map(o=>`<option value="${o}">${o}</option>`).join("");l.insertAdjacentHTML("afterbegin",e),ht()}function B(){const t=window.innerWidth;if(t<768){const e=JSON.parse(localStorage.getItem("search-params"));e.limit=6,localStorage.setItem("search-params",JSON.stringify(e)),g().then(o=>S(o)).catch(o=>console.log(o))}else if(t>=768&&t<1440){const e=JSON.parse(localStorage.getItem("search-params"));e.limit=8,localStorage.setItem("search-params",JSON.stringify(e)),g().then(o=>S(o)).catch(o=>console.log(o))}else{const e=JSON.parse(localStorage.getItem("search-params"));e.limit=9,localStorage.setItem("search-params",JSON.stringify(e)),g().then(o=>S(o)).catch(o=>console.log(o))}}function pt(){const t=JSON.parse(localStorage.getItem("search-params"));t&&(L.elements.searchQuery.value=t.keyword??"",l.options[l.selectedIndex].value=t.category??"")}function gt(){const t=JSON.parse(localStorage.getItem("search-params"));l.options[l.selectedIndex].value==="All"?(console.log("categAll"),C.selectedIndex=0,l.selectedIndex=l.options.length-1,console.log(l.options),localStorage.setItem("search-params",JSON.stringify(dt))):(t.category=l.options[l.selectedIndex].value,localStorage.setItem("search-params",JSON.stringify(t))),g().then(e=>S(e)).catch(e=>console.log(e))}function mt(t){if(t.preventDefault(),L.elements.searchQuery.value===""){const e=JSON.parse(localStorage.getItem("search-params"));e.page=1,C.selectedIndex=0,e.sorting="",localStorage.setItem("search-params",JSON.stringify(e))}else{const e=JSON.parse(localStorage.getItem("search-params"));e.page=1,e.keyword=L.elements.searchQuery.value,localStorage.setItem("search-params",JSON.stringify(e))}g().then(e=>S(e)).catch(e=>console.log(e))}function ht(){for(let t=0;t<l.options.length;t++)if(l.options[t].value===lt.category){l.options[t].selected=!0;break}}function ft(){const t=JSON.parse(localStorage.getItem("search-params"));switch(C.options[C.selectedIndex].value){case"a_z":t.byABC=!0,delete t.byPrice,delete t.byPopularity;break;case"z_a":t.byABC=!1,delete t.byPrice,delete t.byPopularity;break;case"cheap":t.byPrice=!0,delete t.byABC,delete t.byPopularity;break;case"expensive":t.byPrice=!1,delete t.byABC,delete t.byPopularity;break;case"popular":t.byPopularity=!0,delete t.byPrice,delete t.byABC;break;case"not_popular":t.byPopularity=!1,delete t.byPrice,delete t.byABC;break;case"All":t.page=1,delete t.byPrice,delete t.byPopularity,delete t.byABC;break}localStorage.setItem("search-params",JSON.stringify(t)),g().then(e=>S(e)).catch(e=>console.log(e))}document.addEventListener("DOMContentLoaded",async function(){const t=document.querySelector(".container-product-cards-prod"),e=document.querySelector(".modal"),o=document.querySelector(".modal-close-btn"),n=document.querySelector(".container-aside-cards"),u=document.querySelector(".container-discount-product-cards"),d=document.querySelector(".addtocart-btn"),h=document.querySelector(".modal-discount-svg");async function f(s){try{const c=await k(s),a=JSON.parse(localStorage.getItem("cart-products-list"))||[],r=a.findIndex(m=>m._id===c._id);r!==-1?(a.splice(r,1),localStorage.setItem("cart-products-list",JSON.stringify(a)),v(),J()):(c.amount=1,a.push(c),localStorage.setItem("cart-products-list",JSON.stringify(a)),v(),J())}catch(c){console.error("Error managing cart:",c)}}function v(){const s=d.id,a=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).some(r=>r._id===s);N(a),y(),w(),M()}function N(s){s?d.innerHTML='Remove from <svg width="18" height="18"><use class="button-icon" href="../img/icons.svg#icon-cart"></use></svg>':d.innerHTML='Add to <svg width="18" height="18"><use class="button-icon" href="../img/icons.svg#icon-cart"></use></svg>'}async function y(){try{const s=await JSON.parse(localStorage.getItem("cart-products-list"))||[],c=document.querySelector(".container-product-cards-prod");c&&c.querySelectorAll(".product-card-prod").forEach(r=>{const m=r.id,i=r.querySelector(".product-card-price-btn-prod .product-card-btn-prod");if(i){const p=s.some(b=>b._id===m);i.disabled=p,p?i.innerHTML='<svg width="18" height="18"><use class="button-icon" href="../img/icons.svg#icon-check"></use></svg>':i.innerHTML='<svg width="18" height="18"><use class="button-icon" href="../img/icons.svg#icon-cart"></use></svg>'}})}catch(s){console.error("Error updating button content:",s)}}async function w(){try{const s=await JSON.parse(localStorage.getItem("cart-products-list"))||[],c=document.querySelector(".container-discount-product-cards");c&&c.querySelectorAll(".container-for-discount-items").forEach(r=>{const m=r.id,i=r.querySelector(".discount-product-card-btn");if(i){const p=s.some(b=>b._id===m);i.disabled=p,p?i.innerHTML='<svg width="16" height="16"><use class="discount-button-icon" href="../img/icons.svg#icon-check"></use></svg>':i.innerHTML='<svg width="16" height="16"><use class="discount-button-icon" href="../img/icons.svg#icon-cart"></use></svg>'}})}catch(s){console.error("Error updating button content:",s)}}async function M(){try{const s=await JSON.parse(localStorage.getItem("cart-products-list"))||[],c=document.querySelector(".container-aside-cards");c&&c.querySelectorAll(".container-for-popular-items").forEach(r=>{const m=r.id,i=r.querySelector(".products-card-btn");if(i){const p=s.some(b=>b._id===m);i.disabled=p,p?i.innerHTML='<svg width="16" height="16" fill="#6d8434"><use class="popular-button-icon" href="../img/icons.svg#icon-check"></use></svg>':i.innerHTML='<svg width="16" height="16" fill="#6d8434"><use class="popular-button-icon" href="../img/icons.svg#icon-cart"></use></svg>'}})}catch(s){console.error("Error updating button content:",s)}}setInterval(w,2e3),setInterval(y,2e3),setInterval(M,2e3);function D(){e.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function O(){e.classList.add("is-hidden"),document.body.style.overflow="visible"}document.addEventListener("keydown",function(s){s.key==="Escape"&&O()});function x(s){s.target===e&&O()}window.addEventListener("click",x),o.addEventListener("click",O);const k=async s=>{try{return await tt(s)}catch(c){return console.error("Error fetching product details:",c),null}};async function T(s){const c=s.target.closest(".product-card-img-prod");if(c){const a=c.closest(".product-card-prod").id;d.setAttribute("id",a),e.setAttribute("id",a);const r=await k(a);r?q(r):console.log("Product ID not found in fetched-products")}}async function j(s){const c=s.target.closest(".product-card-btn-prod");if(c){const a=c.closest(".product-card-prod").id;a?(f(a),v()):console.log("Product ID not found in fetched-products")}}async function H(s){const c=s.target.closest(".products-card-btn");if(c){const a=c.closest(".aside-product-card").id;a?(f(a),v()):console.log("Product ID not found in fetched-products")}}async function z(s){const c=s.target.closest(".aside-card-img");if(c){const a=c.closest(".aside-product-card").id;d.setAttribute("id",a),e.setAttribute("id",a);const r=await k(a);r?q(r):console.log("Product ID not found in fetched-products")}}async function _(s){const c=s.target.closest(".discount-product-card-btn");if(c){const a=c.closest(".discount-product-card").id;a?(f(a),v()):console.log("Product ID not found in fetched-products")}}async function Q(s){const c=s.target.closest(".discount-product-card-img");if(c){const a=c.closest(".discount-product-card").id;d.setAttribute("id",a),e.setAttribute("id",a);const r=await k(a);r?q(r):console.log("Product ID not found in fetched-products")}}function q(s){const{name:c,price:a,desc:r,img:m,category:i,size:p,popularity:b,is10PercentOff:F}=s;D(),v(),s.is10PercentOff===!0?h.style.display="block":h.style.display="none",console.log(F);const V=document.querySelector(".modal-title"),W=document.querySelector(".price"),K=document.querySelector(".modal-text"),R=document.querySelector(".img-content"),G=document.querySelector(".modal-size"),U=document.querySelector(".modal-category"),X=document.querySelector(".modal-pop");V.textContent=c,W.textContent=`$${a}`,K.textContent=r,R.setAttribute("src",m),G.textContent=p,U.textContent=i,X.textContent=b}t.addEventListener("click",T),t.addEventListener("click",j),n.addEventListener("click",z),n.addEventListener("click",H),u.addEventListener("click",Q),u.addEventListener("click",_),d.addEventListener("click",async s=>{s.preventDefault();const c=d.id;await f(c)})});window.addEventListener("resize",B);pt();B();et().then(t=>{ut(t)}).catch(t=>{console.log(t)});at();nt();const vt=JSON.parse(localStorage.getItem("cart-products-list"));vt||localStorage.setItem("cart-products-list",JSON.stringify([]));function J(){const e=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).length,o=document.querySelector(".quantity_products");o.textContent="("+e+")"}J();
//# sourceMappingURL=commonHelpers2.js.map
