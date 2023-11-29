import{g as u,a as K,b as R,d as G,e as U}from"./assets/footer-subscription-0dc6c13c.js";import{P as O}from"./assets/vendor-8a888f22.js";const J={divProdCards:document.querySelector(".js-product-cards")};function m(t){J.divProdCards.innerHTML="",J.divProdCards.insertAdjacentHTML("afterbegin",X(t))}function X(t){return t.results.length===0?`<div clas="products-nothing-container">
              <p class="products-nothing-headline">Nothing was found for the selected
                <span class="nothing-headline-span">filters...</span>
              </p>
              <p class="products-nothing-text">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
            </div>`:t.results.map(({_id:e,name:s,img:r,category:l,price:n,size:g,popularity:h})=>`<div class="product-card-prod" id="${e}">
            <div class="product-card-img-prod">
              <img class="card-img-prod" src="${r}" alt="${s}">
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
                <p class="card-description-value-prod">${h}</p>
              </div>
            </div>
            <div class="product-card-price-btn-prod">
              <p class="product-card-price-prod">$${n}</p>
              <button type="button" class="product-card-btn-prod">
                <svg width="18" height="18">
                  <use class="button-icon-prod" href="./img/icons.svg#icon-cart"></use>
                </svg>
              </button>
            </div>
          </div>`).join("")}const v=document.getElementById("pagination"),f=JSON.parse(localStorage.getItem("search-params"));u().then(t=>{const e=t.page;let s=t.totalPages;const r=f.limit,l=r*s;if(s<=1)return;new O(v,{totalItems:l,itemsPerPage:r,visiblePages:3,page:e,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><svg width="32" height="32"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="32" height="32"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("afterMove",function(g){const h=g.page;async function y(I){try{const p=JSON.parse(localStorage.getItem("search-params"));p.page=I,localStorage.setItem("search-params",JSON.stringify(p));const C=await u(p);m(C)}catch(p){console.error(p)}}y(h)})}).catch(t=>console.log(t));document.querySelector(".category-input").addEventListener("change",Y);function Y(){v.innerHTML="",document.querySelector(".category-input"),JSON.parse(localStorage.getItem("search-params")),u().then(t=>{let e=t.totalPages;const s=f.limit,r=s*e;e<=1||new O(v,{totalItems:r,itemsPerPage:s,visiblePages:4,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><svg width="32" height="32"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="32" height="32"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}})}).catch(t=>console.log(t))}document.querySelector(".js-search-input").addEventListener("change",Z);function Z(t){t.preventDefault(),f.keyword=t.target.value,v.innerHTML="",localStorage.setItem("search-params",JSON.stringify(f)),JSON.parse(localStorage.getItem("search-params")),u().then(e=>{let s=e.totalPages;const r=f.limit,l=r*s;s<=1||new O(v,{totalItems:l,itemsPerPage:r,visiblePages:4,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><svg width="32" height="32"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="32" height="32"><use class="tui-btn-icon" href="../img/icons.svg#{{type}}"></use></svg></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}})}).catch(e=>console.log(e))}const $={popularProductCards:document.querySelector(".js-popular-product-cards"),discountProductCards:document.querySelector(".js-discount-product-cards")};async function tt(){const t=await K();$.popularProductCards.insertAdjacentHTML("beforeend",et(t))}function et(t){return t.map(({_id:e,name:s,img:r,category:l,size:n,popularity:g})=>`<div class="container-for-popular-items">
          <div class="aside-product-card" id="${e}">
                  <div class="aside-card-img">
                      <img class="aside-img"
                          src="${r}"
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
              </div>`).join("")}async function st(){const t=await R();$.discountProductCards.insertAdjacentHTML("beforeend",at(t))}function at(t){return t.slice(0,2).map(({_id:s,name:r,img:l,price:n})=>`<div class="container-for-discount-items">
          <div class="discount-product-card" id="${s}">
                  <div class="discount-product-card-img">
                      <img class="discount-card-img"
                          src="${l}"
                          alt="${r}">
                          <span class="discount-svg">
                          <svg width="60" height="60" >
                              <use  href="./img/icons.svg#icon-discount"></use>
                          </svg>
                          </span>
                  </div>
                  <div class="product-card-prices-btn">
                  <h3 class="discount-product-card-name">${r}</h3>
                 <div class="discount-price-icon-container">
                      <p class="product-card-price">$${n}</p>
                      <button type="button" class="discount-product-card-btn">
                          <svg width="18" height="18">
                              <use class="discount-button-icon" href="./img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
                  </div>
              </div>
              </div>`).join("")}const d=document.querySelector(".js-category"),b=document.querySelector(".js-sorting"),P=document.querySelector(".js-search-input"),q={keyword:"",category:"",page:1,limit:6},N=JSON.parse(localStorage.getItem("search-params"));d.addEventListener("input",rt);b.addEventListener("input",dt);P.addEventListener("submit",nt);function ct(t){const e=t.map(s=>`<option value="${s}">${s}</option>`).join("");d.insertAdjacentHTML("afterbegin",e),it()}function A(){const t=window.innerWidth;if(t<768){const e=JSON.parse(localStorage.getItem("search-params"));e.limit=6,localStorage.setItem("search-params",JSON.stringify(e)),u().then(s=>m(s)).catch(s=>console.log(s))}else if(t>=768&&t<1440){const e=JSON.parse(localStorage.getItem("search-params"));e.limit=8,localStorage.setItem("search-params",JSON.stringify(e)),u().then(s=>m(s)).catch(s=>console.log(s))}else{const e=JSON.parse(localStorage.getItem("search-params"));e.limit=9,localStorage.setItem("search-params",JSON.stringify(e)),u().then(s=>m(s)).catch(s=>console.log(s))}}function ot(){const t=JSON.parse(localStorage.getItem("search-params"));t&&(P.elements.searchQuery.value=t.keyword??"",d.options[d.selectedIndex].value=t.category??"")}function rt(){const t=JSON.parse(localStorage.getItem("search-params"));d.options[d.selectedIndex].value==="All"?(console.log("categAll"),b.selectedIndex=0,d.selectedIndex=13,localStorage.setItem("search-params",JSON.stringify(q))):(t.category=d.options[d.selectedIndex].value,localStorage.setItem("search-params",JSON.stringify(t))),u().then(e=>m(e)).catch(e=>console.log(e))}function nt(t){t.preventDefault(),P.elements.searchQuery.value===""?(b.selectedIndex=0,d.selectedIndex=13,localStorage.setItem("search-params",JSON.stringify(q))):(N.keyword=P.elements.searchQuery.value,localStorage.setItem("search-params",JSON.stringify(N))),u().then(e=>m(e)).catch(e=>console.log(e))}function it(){for(let t=0;t<d.options.length;t++)if(d.options[t].value===N.category){d.options[t].selected=!0;break}}function dt(){const t=JSON.parse(localStorage.getItem("search-params"));switch(b.options[b.selectedIndex].value){case"a_z":t.byABC=!0,delete t.byPrice,delete t.byPopularity;break;case"z_a":t.byABC=!1,delete t.byPrice,delete t.byPopularity;break;case"cheap":t.byPrice=!0,delete t.byABC,delete t.byPopularity;break;case"expensive":t.byPrice=!1,delete t.byABC,delete t.byPopularity;break;case"popular":t.byPopularity=!0,delete t.byPrice,delete t.byABC;break;case"not_popular":t.byPopularity=!1,delete t.byPrice,delete t.byABC;break;case"All":t.page=1,delete t.byPrice,delete t.byPopularity,delete t.byABC;break}localStorage.setItem("search-params",JSON.stringify(t)),u().then(e=>m(e)).catch(e=>console.log(e))}document.addEventListener("DOMContentLoaded",async function(){const t=document.querySelector(".container-product-cards-prod"),e=document.querySelector(".modal"),s=document.querySelector(".modal-close-btn"),r=document.querySelector(".container-aside-cards"),l=document.querySelector(".container-discount-product-cards"),n=document.querySelector(".addtocart-btn"),g=document.querySelector(".modal-discount-svg");async function h(c){try{const a=await S(c),o=JSON.parse(localStorage.getItem("cart-products-list"))||[],i=o.findIndex(k=>k._id===a._id);i!==-1?(o.splice(i,1),localStorage.setItem("cart-products-list",JSON.stringify(o)),y(),L()):(o.push(a),localStorage.setItem("cart-products-list",JSON.stringify(o)),y(),L())}catch(a){console.error("Error managing cart:",a)}}function y(){n.disabled=!1;const c=n.id;(JSON.parse(localStorage.getItem("cart-products-list"))||[]).some(i=>i._id===c)?n.innerHTML='Remove from <svg width="18" height="18"><use class="button-icon" href="./img/icons.svg#icon-cart"></use></svg>':n.innerHTML='Add to <svg width="18" height="18"><use class="button-icon" href="./img/icons.svg#icon-cart"></use></svg>'}function I(){e.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function p(){e.classList.add("is-hidden"),document.body.style.overflow="visible"}document.addEventListener("keydown",function(c){c.key==="Escape"&&p()});function C(c){c.target===e&&p()}window.addEventListener("click",C),s.addEventListener("click",p);const S=async c=>{try{return await G(c)}catch(a){return console.error("Error fetching product details:",a),null}};async function M(c){const a=c.target.closest(".product-card-img-prod");if(a){const o=a.closest(".product-card-prod").id;n.setAttribute("id",o),e.setAttribute("id",o);const i=await S(o);i?w(i):console.log("Product ID not found in fetched-products")}}async function x(c){const a=c.target.closest(".aside-card-img");if(a){const o=a.closest(".aside-product-card").id;n.setAttribute("id",o),e.setAttribute("id",o);const i=await S(o);i?w(i):console.log("Product ID not found in fetched-products")}}async function B(c){const a=c.target.closest(".discount-product-card-img");if(a){const o=a.closest(".discount-product-card").id;n.setAttribute("id",o),e.setAttribute("id",o);const i=await S(o);i?w(i):console.log("Product ID not found in fetched-products")}}function w(c){const{name:a,price:o,desc:i,img:k,category:E,size:D,popularity:j,is10PercentOff:T}=c;I(),y(),c.is10PercentOff===!0?g.style.display="block":g.style.display="none",console.log(T);const z=document.querySelector(".modal-title"),H=document.querySelector(".price"),_=document.querySelector(".modal-text"),Q=document.querySelector(".img-content"),F=document.querySelector(".modal-size"),V=document.querySelector(".modal-category"),W=document.querySelector(".modal-pop");z.textContent=a,H.textContent=`$${o}`,_.textContent=i,Q.setAttribute("src",k),F.textContent=D,V.textContent=E,W.textContent=j}r.addEventListener("click",x),t.addEventListener("click",M),l.addEventListener("click",B),n.addEventListener("click",async c=>{c.preventDefault();const a=n.id;await h(a)})});window.addEventListener("resize",A);ot();A();U().then(t=>{ct(t)}).catch(t=>{console.log(t)});tt();st();const lt=JSON.parse(localStorage.getItem("cart-products-list"));lt||localStorage.setItem("cart-products-list",JSON.stringify([]));function L(){const e=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).length,s=document.querySelector(".quantity_products");s.textContent="("+e+")"}L();
//# sourceMappingURL=commonHelpers2.js.map
