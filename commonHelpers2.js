import{i as d,g as m,a as ct,b as ot,d as at,e as rt}from"./assets/footer-subscription-dbf972ba.js";import{P as B}from"./assets/vendor-8a888f22.js";const E=document.querySelector(".scroll_up");window.addEventListener("scroll",nt);E.addEventListener("click",T);function nt(){window.scrollY>350?E.classList.add("visible"):E.classList.remove("visible")}function T(){window.scrollY>0&&(window.scrollBy(0,-40),setTimeout(T,0))}const A={divProdCards:document.querySelector(".js-product-cards")};function P(e){A.divProdCards.innerHTML="",A.divProdCards.insertAdjacentHTML("afterbegin",it(e))}function it(e){return e.results.length===0?`<div clas="products-nothing-container">
              <p class="products-nothing-headline">Nothing was found for the selected
                <span class="nothing-headline-span">filters...</span>
              </p>
              <p class="products-nothing-text">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
            </div>`:e.results.map(({_id:t,name:s,img:i,category:u,price:n,size:g,popularity:y})=>`<div class="product-card-prod" id="${t}">
            <div class="product-card-img-prod">
              <img class="card-img-prod" src="${i}" alt="${s}">
            </div>
            <h3 class="produc-card-name-prod">${s}</h3>
            <div class="product-card-description-prod">
              <div class="card-description-prod">
                <p>Category:</p>
                <p class="card-description-value-prod">${u}</p>
              </div>
              <div class="card-description-prod">
                <p>Size:</p>
                <p class="card-description-value-prod">${g}</p>
              </div>
              <div class="card-description-prod">
                <p>Popularity:</p>
                <p class="card-description-value-prod">${y}</p>
              </div>
            </div>
            
            <div class="product-card-price-btn-prod">
              <p class="product-card-price-prod">${n}</p>
              <button type="button" class="product-card-btn-prod id="${t}">
                <svg width="18" height="18">
                  <use class="button-icon-prod" href="${d}#icon-cart"></use>
                </svg>
              </button>
            </div>
          </div>`).join("")}const w=document.getElementById("pagination"),I=JSON.parse(localStorage.getItem("search-params"));m().then(e=>{const t=e.page;let s=e.totalPages;const i=I.limit,u=i*s;if(s<=1)return;new B(w,{totalItems:u,itemsPerPage:i,visiblePages:3,page:t,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${d}#{{type}}"></use></svg></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${d}#{{type}}"></use></svg></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("afterMove",function(g){const y=g.page;async function v($){try{const b=JSON.parse(localStorage.getItem("search-params"));b.page=$,localStorage.setItem("search-params",JSON.stringify(b));const C=await m(b);P(C)}catch(b){console.error(b)}}v(y)})}).catch(e=>console.log(e));document.querySelector(".category-input").addEventListener("change",dt);function dt(){w.innerHTML="",document.querySelector(".category-input"),JSON.parse(localStorage.getItem("search-params")),m().then(e=>{let t=e.totalPages;const s=I.limit,i=s*t;t<=1||new B(w,{totalItems:i,itemsPerPage:s,visiblePages:4,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${d}#{{type}}"></use></svg></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${d}#{{type}}"></use></svg></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}})}).catch(e=>console.log(e))}document.querySelector(".js-search-input").addEventListener("change",lt);function lt(e){e.preventDefault(),I.keyword=e.target.value,w.innerHTML="",localStorage.setItem("search-params",JSON.stringify(I)),JSON.parse(localStorage.getItem("search-params")),m().then(t=>{let s=t.totalPages;const i=I.limit,u=i*s;s<=1||new B(w,{totalItems:u,itemsPerPage:i,visiblePages:4,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${d}#{{type}}"></use></svg></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${d}#{{type}}"></use></svg></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}})}).catch(t=>console.log(t))}const D={popularProductCards:document.querySelector(".js-popular-product-cards"),discountProductCards:document.querySelector(".js-discount-product-cards")};async function ut(){const e=await ct();D.popularProductCards.insertAdjacentHTML("beforeend",pt(e))}function pt(e){return e.map(({_id:t,name:s,img:i,category:u,size:n,popularity:g})=>`<div class="container-for-popular-items" id="${t}">
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
                          <p class="card-descr-value">${u}</p>
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
                      <button type="button" class="products-card-btn" id="${t}">
                          <svg width="16" height="16">
                              <use class="popular-button-icon" href="${d}#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
              </div>
              </div>`).join("")}async function gt(){const e=await ot();D.discountProductCards.insertAdjacentHTML("beforeend",ht(e))}function ht(e){return e.slice(0,2).map(({_id:s,name:i,img:u,price:n})=>`<div class="container-for-discount-items" id="${s}">
          <div class="discount-product-card" id="${s}">
                  <div class="discount-product-card-img">
                      <img class="discount-card-img"
                          src="${u}"
                          alt="${i}">
                          <span class="discount-svg">
                          <svg width="60" height="60" >
                              <use  href="${d}#icon-discount"></use>
                          </svg>
                          </span>
                  </div>
                  <div class="product-card-prices-btn">
                  <h3 class="discount-product-card-name">${i}</h3>

                 <div class="discount-price-icon-container">
                      <p class="product-card-price">$${n}</p>
                      <button type="button" class="discount-product-card-btn" id="${s}">
                          <svg width="18" height="18">
                              <use class="discount-button-icon" href="${d}#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
                  </div>
              </div>
              </div>`).join("")}const p=document.querySelector(".js-category"),J=document.querySelector(".dropdown__input-hidden"),k=document.querySelector(".js-search-input"),_={keyword:"",category:"",page:1,limit:6};localStorage.setItem("search-params",JSON.stringify(_));p.addEventListener("input",yt);J.addEventListener("input",j);k.addEventListener("submit",vt);function mt(e){const t=e.map(s=>`<option value="${s}">${s}</option>`).join("");p.insertAdjacentHTML("afterbegin",t),bt()}function x(){const e=window.innerWidth;if(e<768){const t=JSON.parse(localStorage.getItem("search-params"));t.limit=6,localStorage.setItem("search-params",JSON.stringify(t)),m().then(s=>P(s)).catch(s=>console.log(s))}else if(e>=768&&e<1440){const t=JSON.parse(localStorage.getItem("search-params"));t.limit=8,localStorage.setItem("search-params",JSON.stringify(t)),m().then(s=>P(s)).catch(s=>console.log(s))}else{const t=JSON.parse(localStorage.getItem("search-params"));t.limit=9,localStorage.setItem("search-params",JSON.stringify(t)),m().then(s=>P(s)).catch(s=>console.log(s))}}function ft(){const e=JSON.parse(localStorage.getItem("search-params"));e&&(k.elements.searchQuery.value=e.keyword??"",p.options[p.selectedIndex].value=e.category??"")}function yt(){const e=JSON.parse(localStorage.getItem("search-params"));p.options[p.selectedIndex].value==="All"?(J.selectedIndex=0,p.selectedIndex=p.options.length-1,localStorage.setItem("search-params",JSON.stringify(_))):(e.category=p.options[p.selectedIndex].value,localStorage.setItem("search-params",JSON.stringify(e))),m().then(t=>P(t)).catch(t=>console.log(t))}function vt(e){if(e.preventDefault(),k.elements.searchQuery.value===""){const t=JSON.parse(localStorage.getItem("search-params"));t.page=1,J.selectedIndex=0,localStorage.setItem("search-params",JSON.stringify(t))}else{const t=JSON.parse(localStorage.getItem("search-params"));t.page=1,console.log("sort"),delete t.byPopularity,delete t.byPrice,delete t.byABC,t.keyword=k.elements.searchQuery.value,localStorage.setItem("search-params",JSON.stringify(t))}m().then(t=>P(t)).catch(t=>console.log(t))}function bt(){for(let e=0;e<p.options.length;e++)if(p.options[e].value===searchParams.category){p.options[e].selected=!0;break}}function j(e){console.log("Hi");const t=JSON.parse(localStorage.getItem("search-params"));switch(e.value){case"a_z":t.byABC=!0,delete t.byPrice,delete t.byPopularity;break;case"z_a":t.byABC=!1,delete t.byPrice,delete t.byPopularity;break;case"cheap":t.byPrice=!0,delete t.byABC,delete t.byPopularity;break;case"expensive":t.byPrice=!1,delete t.byABC,delete t.byPopularity;break;case"popular":t.byPopularity=!0,delete t.byPrice,delete t.byABC;break;case"not_popular":t.byPopularity=!1,delete t.byPrice,delete t.byABC;break;case"All":t.page=1,delete t.byPrice,delete t.byPopularity,delete t.byABC;break}localStorage.setItem("search-params",JSON.stringify(t)),m().then(s=>P(s)).catch(s=>console.log(s))}document.querySelectorAll(".dropdown-wrapper").forEach(function(e){const t=e.querySelector(".dropdown-sortingBtn"),s=e.querySelector(".dropdown-sorting__list"),i=s.querySelectorAll(".dropdown-sorting__item"),u=e.querySelector(".dropdown__input-hidden");t.addEventListener("click",function(n){s.classList.toggle("dropdown__list--visible"),this.classList.add("dropdown__button--active")}),i.forEach(function(n){n.addEventListener("click",function(g){g.stopPropagation(),t.innerText=this.innerText,u.value=this.dataset.value,j(u),s.classList.remove("dropdown__list--visible")})}),document.addEventListener("click",function(n){n.target!==t&&(t.classList.remove("dropdown__button--active"),s.classList.remove("dropdown__list--visible"))})});document.addEventListener("DOMContentLoaded",async function(){const e=document.querySelector(".container-product-cards-prod"),t=document.querySelector(".modal"),s=document.querySelector(".modal-close-btn"),i=document.querySelector(".container-aside-cards"),u=document.querySelector(".container-discount-product-cards"),n=document.querySelector(".addtocart-btn"),g=document.querySelector(".modal-discount-svg");async function y(c){try{const o=await L(c),a=JSON.parse(localStorage.getItem("cart-products-list"))||[],r=a.findIndex(f=>f._id===o._id);r!==-1?(a.splice(r,1),localStorage.setItem("cart-products-list",JSON.stringify(a)),v(),O()):(o.amount=1,a.push(o),localStorage.setItem("cart-products-list",JSON.stringify(a)),v(),O())}catch(o){console.error("Error managing cart:",o)}}function v(){const c=n.id,a=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).some(r=>r._id===c);$(a),b(),C(),M()}function $(c){c?n.innerHTML=`Remove from <svg width="18" height="18"><use class="button-icon" href="${d}#icon-cart"></use></svg>`:n.innerHTML=`Add to <svg width="18" height="18"><use class="button-icon" href="${d}#icon-cart"></use></svg>`}async function b(){try{const c=await JSON.parse(localStorage.getItem("cart-products-list"))||[],o=document.querySelector(".container-product-cards-prod");o&&o.querySelectorAll(".product-card-prod").forEach(r=>{const f=r.id,l=r.querySelector(".product-card-price-btn-prod .product-card-btn-prod");if(l){const h=c.some(S=>S._id===f);l.disabled=h,h?l.innerHTML=`<svg width="18" height="18"><use class="button-icon" href="${d}#icon-check"></use></svg>`:l.innerHTML=`<svg width="18" height="18"><use class="button-icon" href="${d}#icon-cart"></use></svg>`}})}catch(c){console.error("Error updating button content:",c)}}async function C(){try{const c=await JSON.parse(localStorage.getItem("cart-products-list"))||[],o=document.querySelector(".container-discount-product-cards");o&&o.querySelectorAll(".container-for-discount-items").forEach(r=>{const f=r.id,l=r.querySelector(".discount-product-card-btn");if(l){const h=c.some(S=>S._id===f);l.disabled=h,h?l.innerHTML=`<svg width="16" height="16"><use class="discount-button-icon" href="${d}#icon-check"></use></svg>`:l.innerHTML='<svg width="16" height="16"><use class="discount-button-icon" href="${icons}#icon-cart"></use></svg>'}})}catch(c){console.error("Error updating button content:",c)}}async function M(){try{const c=await JSON.parse(localStorage.getItem("cart-products-list"))||[],o=document.querySelector(".container-aside-cards");o&&o.querySelectorAll(".container-for-popular-items").forEach(r=>{const f=r.id,l=r.querySelector(".products-card-btn");if(l){const h=c.some(S=>S._id===f);l.disabled=h,h?l.innerHTML=`<svg width="16" height="16" fill="#6d8434"><use class="popular-button-icon" href="${d}#icon-check"></use></svg>`:l.innerHTML=`<svg width="16" height="16" fill="#6d8434"><use class="popular-button-icon" href="${d}#icon-cart"></use></svg>`}})}catch(c){console.error("Error updating button content:",c)}}setTimeout(()=>{C()},2e3),setTimeout(()=>{b()},2e3),setTimeout(()=>{M()},2e3);function H(){t.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function q(){t.classList.add("is-hidden"),document.body.style.overflow="visible"}document.addEventListener("keydown",function(c){c.key==="Escape"&&q()});function z(c){c.target===t&&q()}window.addEventListener("click",z),s.addEventListener("click",q);const L=async c=>{try{return await at(c)}catch(o){return console.error("Error fetching product details:",o),null}};async function Q(c){const o=c.target.closest(".product-card-img-prod");if(o){const a=o.closest(".product-card-prod").id;n.setAttribute("id",a),t.setAttribute("id",a);const r=await L(a);r?N(r):console.log("Product ID not found in fetched-products")}}async function F(c){const o=c.target.closest(".product-card-btn-prod");if(o){const a=o.closest(".product-card-prod").id;a?(y(a),v()):console.log("Product ID not found in fetched-products")}}async function V(c){const o=c.target.closest(".products-card-btn");if(o){const a=o.closest(".aside-product-card").id;a?(y(a),v()):console.log("Product ID not found in fetched-products")}}async function Y(c){const o=c.target.closest(".aside-card-img");if(o){const a=o.closest(".aside-product-card").id;n.setAttribute("id",a),t.setAttribute("id",a);const r=await L(a);r?N(r):console.log("Product ID not found in fetched-products")}}async function K(c){const o=c.target.closest(".discount-product-card-btn");if(o){const a=o.closest(".discount-product-card").id;a?(y(a),v()):console.log("Product ID not found in fetched-products")}}async function R(c){const o=c.target.closest(".discount-product-card-img");if(o){const a=o.closest(".discount-product-card").id;n.setAttribute("id",a),t.setAttribute("id",a);const r=await L(a);r?N(r):console.log("Product ID not found in fetched-products")}}function N(c){const{name:o,price:a,desc:r,img:f,category:l,size:h,popularity:S,is10PercentOff:G}=c;H(),v(),c.is10PercentOff===!0?g.style.display="block":g.style.display="none",console.log(G);const U=document.querySelector(".modal-title"),W=document.querySelector(".price"),X=document.querySelector(".modal-text"),Z=document.querySelector(".img-content"),tt=document.querySelector(".modal-size"),et=document.querySelector(".modal-category"),st=document.querySelector(".modal-pop");U.textContent=o,W.textContent=`$${a}`,X.textContent=r,Z.setAttribute("src",f),tt.textContent=h,et.textContent=l,st.textContent=S}e.addEventListener("click",Q),e.addEventListener("click",F),i.addEventListener("click",Y),i.addEventListener("click",V),u.addEventListener("click",R),u.addEventListener("click",K),n.addEventListener("click",async c=>{c.preventDefault();const o=n.id;await y(o)})});window.addEventListener("resize",x);ft();x();rt().then(e=>{mt(e)}).catch(e=>{console.log(e)});ut();gt();const St=JSON.parse(localStorage.getItem("cart-products-list"));St||localStorage.setItem("cart-products-list",JSON.stringify([]));function O(){const t=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).length,s=document.querySelector(".quantity_products");s.textContent="("+t+")"}O();
//# sourceMappingURL=commonHelpers2.js.map
