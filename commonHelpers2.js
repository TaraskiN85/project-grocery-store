import{g as u,a as U,b as X,d as Y,e as Z}from"./assets/footer-subscription-6a804ea6.js";import{P as E}from"./assets/vendor-8a888f22.js";const M={divProdCards:document.querySelector(".js-product-cards")};function f(t){M.divProdCards.innerHTML="",M.divProdCards.insertAdjacentHTML("afterbegin",tt(t))}function tt(t){return t.results.length===0?`<div clas="products-nothing-container">
              <p class="products-nothing-headline">Nothing was found for the selected
                <span class="nothing-headline-span">filters...</span>
              </p>
              <p class="products-nothing-text">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
            </div>`:t.results.map(({_id:e,name:s,img:n,category:l,price:i,size:g,popularity:m})=>`<div class="product-card-prod" id="${e}">
            <div class="product-card-img-prod">
              <img class="card-img-prod" src="${n}" alt="${s}">
            </div>
            <h3 class="produc-card-name-prod">${s}</h3>
            <div class="product-card-description-prod">
              <div class="card-description-prod">
                <p>Category:</p>
                <p class="card-description-value-prod">${l}</p>
              </div>
              <div class="card-description-prod">
                <p>Size:</p>
                <p class="card-description-value-prod">${g}</p>
              </div>
              <div class="card-description-prod">
                <p>Popularity:</p>
                <p class="card-description-value-prod">${m}</p>
              </div>
            </div>
            <div class="product-card-price-btn-prod">

              <p class="product-card-price-prod">${i}</p>
              <button type="button" class="product-card-btn-prod id="${e}">
                <svg width="18" height="18">
                  <use class="button-icon-prod" href="./img/icons.svg#icon-cart"></use>
                </svg>
              </button>
            </div>
          </div>`).join("")}const S=document.getElementById("pagination"),b=JSON.parse(localStorage.getItem("search-params"));u().then(t=>{const e=t.page;let s=t.totalPages;const n=b.limit,l=n*s;if(s<=1)return;new E(S,{totalItems:l,itemsPerPage:n,visiblePages:3,page:e,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("afterMove",function(g){const m=g.page;async function h(w){try{const p=JSON.parse(localStorage.getItem("search-params"));p.page=w,localStorage.setItem("search-params",JSON.stringify(p));const L=await u(p);f(L)}catch(p){console.error(p)}}h(m)})}).catch(t=>console.log(t));document.querySelector(".category-input").addEventListener("change",et);function et(){S.innerHTML="",document.querySelector(".category-input"),JSON.parse(localStorage.getItem("search-params")),u().then(t=>{let e=t.totalPages;const s=b.limit,n=s*e;e<=1||new E(S,{totalItems:n,itemsPerPage:s,visiblePages:4,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><svg width="32" height="32"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="32" height="32"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}})}).catch(t=>console.log(t))}document.querySelector(".js-search-input").addEventListener("change",st);function st(t){t.preventDefault(),b.keyword=t.target.value,S.innerHTML="",localStorage.setItem("search-params",JSON.stringify(b)),JSON.parse(localStorage.getItem("search-params")),u().then(e=>{let s=e.totalPages;const n=b.limit,l=n*s;s<=1||new E(S,{totalItems:l,itemsPerPage:n,visiblePages:4,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><svg width="32" height="32"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="32" height="32"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}})}).catch(e=>console.log(e))}const $={popularProductCards:document.querySelector(".js-popular-product-cards"),discountProductCards:document.querySelector(".js-discount-product-cards")};async function ct(){const t=await U();$.popularProductCards.insertAdjacentHTML("beforeend",at(t))}function at(t){return t.map(({_id:e,name:s,img:n,category:l,size:i,popularity:g})=>`<div class="container-for-popular-items">
          <div class="aside-product-card" id="${e}">
                  <div class="aside-card-img">
                      <img class="aside-img"
                          src="${n}"
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
                          <p class="card-descr-value">${i}</p>
                      </div>
                      <div class="aside-card-description">
                          <p class="descr-p">Popularity:</p>
                          <p class="card-descr-value">${g}</p>
                      </div>
                  </div>
                  </div>
                  </div>
                  <div class="product-card-prices-btn">
                      <button type="button" class="products-card-btn">
                          <svg width="16" height="16">
                              <use class="popular-button-icon" href="./img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
              </div>
              </div>`).join("")}async function ot(){const t=await X();$.discountProductCards.insertAdjacentHTML("beforeend",rt(t))}function rt(t){return t.slice(0,2).map(({_id:s,name:n,img:l,price:i})=>`<div class="container-for-discount-items">
          <div class="discount-product-card" id="${s}">
                  <div class="discount-product-card-img">
                      <img class="discount-card-img"
                          src="${l}"
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
                      <p class="product-card-price">$${i}</p>
                      <button type="button" class="discount-product-card-btn">
                          <svg width="18" height="18">
                              <use class="discount-button-icon" href="./img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
                  </div>
              </div>
              </div>`).join("")}const d=document.querySelector(".js-category"),P=document.querySelector(".js-sorting"),k=document.querySelector(".js-search-input"),nt={keyword:"",category:"",page:1,limit:6},it=JSON.parse(localStorage.getItem("search-params"));d.addEventListener("input",ut);P.addEventListener("input",mt);k.addEventListener("submit",pt);function dt(t){const e=t.map(s=>`<option value="${s}">${s}</option>`).join("");d.insertAdjacentHTML("afterbegin",e),gt()}function A(){const t=window.innerWidth;if(t<768){const e=JSON.parse(localStorage.getItem("search-params"));e.limit=6,localStorage.setItem("search-params",JSON.stringify(e)),u().then(s=>f(s)).catch(s=>console.log(s))}else if(t>=768&&t<1440){const e=JSON.parse(localStorage.getItem("search-params"));e.limit=8,localStorage.setItem("search-params",JSON.stringify(e)),u().then(s=>f(s)).catch(s=>console.log(s))}else{const e=JSON.parse(localStorage.getItem("search-params"));e.limit=9,localStorage.setItem("search-params",JSON.stringify(e)),u().then(s=>f(s)).catch(s=>console.log(s))}}function lt(){const t=JSON.parse(localStorage.getItem("search-params"));t&&(k.elements.searchQuery.value=t.keyword??"",d.options[d.selectedIndex].value=t.category??"")}function ut(){const t=JSON.parse(localStorage.getItem("search-params"));d.options[d.selectedIndex].value==="All"?(console.log("categAll"),P.selectedIndex=0,d.selectedIndex=d.options.length-1,console.log(d.options),localStorage.setItem("search-params",JSON.stringify(nt))):(t.category=d.options[d.selectedIndex].value,localStorage.setItem("search-params",JSON.stringify(t))),u().then(e=>f(e)).catch(e=>console.log(e))}function pt(t){if(t.preventDefault(),k.elements.searchQuery.value===""){const e=JSON.parse(localStorage.getItem("search-params"));e.page=1,P.selectedIndex=0,e.sorting="",localStorage.setItem("search-params",JSON.stringify(e))}else{const e=JSON.parse(localStorage.getItem("search-params"));e.page=1,e.keyword=k.elements.searchQuery.value,localStorage.setItem("search-params",JSON.stringify(e))}u().then(e=>f(e)).catch(e=>console.log(e))}function gt(){for(let t=0;t<d.options.length;t++)if(d.options[t].value===it.category){d.options[t].selected=!0;break}}function mt(){const t=JSON.parse(localStorage.getItem("search-params"));switch(P.options[P.selectedIndex].value){case"a_z":t.byABC=!0,delete t.byPrice,delete t.byPopularity;break;case"z_a":t.byABC=!1,delete t.byPrice,delete t.byPopularity;break;case"cheap":t.byPrice=!0,delete t.byABC,delete t.byPopularity;break;case"expensive":t.byPrice=!1,delete t.byABC,delete t.byPopularity;break;case"popular":t.byPopularity=!0,delete t.byPrice,delete t.byABC;break;case"not_popular":t.byPopularity=!1,delete t.byPrice,delete t.byABC;break;case"All":t.page=1,delete t.byPrice,delete t.byPopularity,delete t.byABC;break}localStorage.setItem("search-params",JSON.stringify(t)),u().then(e=>f(e)).catch(e=>console.log(e))}document.addEventListener("DOMContentLoaded",async function(){const t=document.querySelector(".container-product-cards-prod"),e=document.querySelector(".modal"),s=document.querySelector(".modal-close-btn"),n=document.querySelector(".container-aside-cards"),l=document.querySelector(".container-discount-product-cards"),i=document.querySelector(".addtocart-btn"),g=document.querySelector(".modal-discount-svg");async function m(a){try{const c=await I(a),o=JSON.parse(localStorage.getItem("cart-products-list"))||[],r=o.findIndex(v=>v._id===c._id);r!==-1?(o.splice(r,1),localStorage.setItem("cart-products-list",JSON.stringify(o)),h(),q(),p()):(c.amount=1,o.push(c),localStorage.setItem("cart-products-list",JSON.stringify(o)),p(),h(),q())}catch(c){console.error("Error managing cart:",c)}}function h(){const a=i.id,o=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).some(r=>r._id===a);w(o),p()}function w(a){a?i.innerHTML='Remove from <svg width="18" height="18"><use class="button-icon" href="./img/icons.svg#icon-cart"></use></svg>':i.innerHTML='Add to <svg width="18" height="18"><use class="button-icon" href="./img/icons.svg#icon-cart"></use></svg>'}async function p(){try{const a=await JSON.parse(localStorage.getItem("cart-products-list"))||[],c=document.querySelector(".container-product-cards-prod");c&&c.querySelectorAll(".product-card-prod").forEach(r=>{const v=r.id,y=r.querySelector(".product-card-price-btn-prod .product-card-btn-prod");if(y){const C=a.some(J=>J._id===v);y.disabled=C,C?y.innerHTML='<svg width="18" height="18"><use class="button-icon" href="./src/img/icons.svg#icon-check"></use></svg>':y.innerHTML='<svg width="18" height="18"><use class="button-icon" href="./img/icons.svg#icon-cart"></use></svg>'}})}catch(a){console.error("Error updating button content:",a)}}function L(){e.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function N(){e.classList.add("is-hidden"),document.body.style.overflow="visible"}document.addEventListener("keydown",function(a){a.key==="Escape"&&N()});function B(a){a.target===e&&N()}window.addEventListener("click",B),s.addEventListener("click",N);const I=async a=>{try{return await Y(a)}catch(c){return console.error("Error fetching product details:",c),null}};async function D(a){const c=a.target.closest(".product-card-img-prod");if(c){const o=c.closest(".product-card-prod").id;i.setAttribute("id",o),e.setAttribute("id",o);const r=await I(o);r?O(r):console.log("Product ID not found in fetched-products")}}async function x(a){const c=a.target.closest(".product-card-btn-prod");if(c){const o=c.closest(".product-card-prod").id;o?(m(o),h()):console.log("Product ID not found in fetched-products")}}async function j(a){const c=a.target.closest(".products-card-btn");if(c){const o=c.closest(".aside-product-card").id;o?(m(o),h()):console.log("Product ID not found in fetched-products")}}async function T(a){const c=a.target.closest(".aside-card-img");if(c){const o=c.closest(".aside-product-card").id;i.setAttribute("id",o),e.setAttribute("id",o);const r=await I(o);r?O(r):console.log("Product ID not found in fetched-products")}}async function H(a){const c=a.target.closest(".discount-product-card-btn");if(c){const o=c.closest(".discount-product-card").id;o?(m(o),h()):console.log("Product ID not found in fetched-products")}}async function z(a){const c=a.target.closest(".discount-product-card-img");if(c){const o=c.closest(".discount-product-card").id;i.setAttribute("id",o),e.setAttribute("id",o);const r=await I(o);r?O(r):console.log("Product ID not found in fetched-products")}}function O(a){const{name:c,price:o,desc:r,img:v,category:y,size:C,popularity:J,is10PercentOff:_}=a;L(),h(),a.is10PercentOff===!0?g.style.display="block":g.style.display="none",console.log(_);const Q=document.querySelector(".modal-title"),F=document.querySelector(".price"),V=document.querySelector(".modal-text"),W=document.querySelector(".img-content"),K=document.querySelector(".modal-size"),R=document.querySelector(".modal-category"),G=document.querySelector(".modal-pop");Q.textContent=c,F.textContent=`$${o}`,V.textContent=r,W.setAttribute("src",v),K.textContent=C,R.textContent=y,G.textContent=J}t.addEventListener("click",D),t.addEventListener("click",x),n.addEventListener("click",T),n.addEventListener("click",j),l.addEventListener("click",z),l.addEventListener("click",H),i.addEventListener("click",async a=>{a.preventDefault();const c=i.id;await m(c)})});window.addEventListener("resize",A);lt();A();Z().then(t=>{dt(t)}).catch(t=>{console.log(t)});ct();ot();const ht=JSON.parse(localStorage.getItem("cart-products-list"));ht||localStorage.setItem("cart-products-list",JSON.stringify([]));function q(){const e=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).length,s=document.querySelector(".quantity_products");s.textContent="("+e+")"}q();
//# sourceMappingURL=commonHelpers2.js.map
