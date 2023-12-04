import{i as d,g as y,a as at,b as rt,d as nt,e as it}from"./assets/footer-subscription-368acc3f.js";import{P as T}from"./assets/vendor-8a888f22.js";const E=document.querySelector(".scroll_up");window.addEventListener("scroll",dt);E.addEventListener("click",H);function dt(){window.scrollY>350?E.classList.add("visible"):E.classList.remove("visible")}function H(){window.scrollY>0&&(window.scrollBy(0,-40),setTimeout(H,0))}const x={divProdCards:document.querySelector(".js-product-cards")};function S(e){x.divProdCards.innerHTML="",x.divProdCards.insertAdjacentHTML("afterbegin",lt(e))}function lt(e){if(e.results.length===0)return`<div clas="products-nothing-container">
              <p class="products-nothing-headline">Nothing was found for the selected
                <span class="nothing-headline-span">filters...</span>
              </p>
              <p class="products-nothing-text">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
            </div>`;{const t=`<span class="discount-svg">
    <svg width="60" height="60" >
        <use  href="${d}#icon-discount"></use>
    </svg>
    </span>`;return e.results.map(({_id:s,name:n,img:p,category:i,price:m,size:h,popularity:g,is10PercentOff:l})=>`<div class="product-card-prod" id="${s}">
          <div class="product-card-img-prod">
            <img class="card-img-prod" src="${p}" alt="${n}">
            ${l?t:""}
          </div>
          <h3 class="produc-card-name-prod">${n}</h3>
          <div class="product-card-description-prod">
            <div class="card-description-prod">
              <p>Category:</p>
              <p class="card-description-value-prod">${i}</p>
            </div>
            <div class="card-description-prod">
              <p>Size:</p>
              <p class="card-description-value-prod">${h}</p>
            </div>
            <div class="card-description-prod">
              <p>Popularity:</p>
              <p class="card-description-value-prod">${g}</p>
            </div>
          </div>
          <div class="product-card-price-btn-prod">
            <p class="product-card-price-prod">$${m}</p>
            <button type="button" class="product-card-btn-prod id="${s}">
              <svg width="18" height="18">
                <use class="button-icon-prod" href="${d}#icon-cart"></use>
              </svg>
            </button>
          </div>
        </div>`).join("")}}const w=document.getElementById("pagination"),M=JSON.parse(localStorage.getItem("search-params"));y().then(e=>{const t=e.page;let s=e.totalPages;const n=M.limit,p=n*s;if(s<=1)return;new T(w,{totalItems:p,itemsPerPage:n,visiblePages:3,page:t,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${d}#{{type}}"></use></svg></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${d}#{{type}}"></use></svg></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("afterMove",function(m){const h=m.page;async function g(l){try{const f=JSON.parse(localStorage.getItem("search-params"));f.page=l,localStorage.setItem("search-params",JSON.stringify(f));const k=await y(f);S(k)}catch(f){console.error(f)}}g(h),_()})}).catch(e=>console.log(e));function ut(){w.innerHTML="",JSON.parse(localStorage.getItem("search-params")),y().then(e=>{let t=e.totalPages;const s=M.limit,n=s*t;if(t<=1)return;new T(w,{totalItems:n,itemsPerPage:s,visiblePages:3,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${d}#{{type}}"></use></svg></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${d}#{{type}}"></use></svg></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("afterMove",function(i){const m=i.page;async function h(g){try{const l=JSON.parse(localStorage.getItem("search-params"));l.page=g,localStorage.setItem("search-params",JSON.stringify(l));const f=await y(l);S(f)}catch(l){console.error(l)}}h(m),_()})}).catch(e=>console.log(e))}function pt(){event.preventDefault(),w.innerHTML="",JSON.parse(localStorage.getItem("search-params")),y().then(e=>{let t=e.totalPages;const s=M.limit,n=s*t;if(t<=1)return;new T(w,{totalItems:n,itemsPerPage:s,visiblePages:3,page:1,centerAlign:!0,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${d}#{{type}}"></use></svg></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${d}#{{type}}"></use></svg></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("afterMove",function(i){const m=i.page;async function h(g){try{const l=JSON.parse(localStorage.getItem("search-params"));l.page=g,localStorage.setItem("search-params",JSON.stringify(l));const f=await y(l);S(f)}catch(l){console.error(l)}}h(m),_()})}).catch(e=>console.log(e))}function _(){const e=document.querySelector(".catalog-container");e&&e.scrollIntoView({behavior:"smooth",block:"start"})}const z={popularProductCards:document.querySelector(".js-popular-product-cards"),discountProductCards:document.querySelector(".js-discount-product-cards")};async function gt(){const e=await at();z.popularProductCards.insertAdjacentHTML("beforeend",mt(e))}function mt(e){return e.map(({_id:t,name:s,img:n,category:p,size:i,popularity:m})=>`<div class="container-for-popular-items" id="${t}">
          <div class="aside-product-card" id="${t}">
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
                          <p class="card-descr-value">${p}</p>
                      </div>
                      <div class="size-popularity-container">
                      <div class="aside-card-description">
                          <p class="descr-p">Size:</p>
                          <p class="card-descr-value">${i}</p>
                      </div>
                      <div class="aside-card-description">
                          <p class="descr-p">Popularity:</p>
                          <p class="card-descr-value">${m}</p>
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
              </div>`).join("")}async function ht(){const e=await rt();z.discountProductCards.insertAdjacentHTML("beforeend",ft(e))}function ft(e){return e.slice(0,2).map(({_id:s,name:n,img:p,price:i})=>`<div class="container-for-discount-items" id="${s}">
          <div class="discount-product-card" id="${s}">
                  <div class="discount-product-card-img">
                      <img class="discount-card-img"
                          src="${p}"
                          alt="${n}">
                          <span class="discount-svg">
                          <svg width="60" height="60" >
                              <use  href="${d}#icon-discount"></use>
                          </svg>
                          </span>
                  </div>
                  <div class="product-card-prices-btn">
                  <h3 class="discount-product-card-name">${n}</h3>

                 <div class="discount-price-icon-container">
                      <p class="product-card-price">$${i}</p>
                      <button type="button" class="discount-product-card-btn" id="${s}">
                          <svg width="18" height="18">
                              <use class="discount-button-icon" href="${d}#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
                  </div>
              </div>
              </div>`).join("")}const N=document.querySelector(".js-category-list"),O=document.querySelector(".js-search-input"),I=document.querySelector(".dropdown-categoryBtn"),C=document.querySelector(".js-category-input"),L=document.querySelector(".dropdown-sortingBtn"),q=document.querySelector(".js-sorting-list"),yt=q.querySelectorAll(".js-sorting-item"),j=document.querySelector(".js-sorting-input"),vt={keyword:"",category:"",page:1,limit:6};JSON.parse(localStorage.getItem("search-params"))||localStorage.setItem("search-params",JSON.stringify(vt));O.addEventListener("submit",It);function bt(e){const t=e.map(n=>{const i=n.split("_").join(" ");return`<li class="dropdown-sorting__item js-category-item" data-value="${n}">${i}</li>`}).join("");N.insertAdjacentHTML("afterbegin",t),document.querySelectorAll(".js-category-item").forEach(function(n){n.addEventListener("click",function(p){p.stopPropagation(),I.innerText=this.innerText,C.value=this.dataset.value,Pt(C),N.classList.remove("dropdown__list--visible")})}),wt()}function F(){const e=window.innerWidth;if(e<768){const t=JSON.parse(localStorage.getItem("search-params"));t.limit=6,localStorage.setItem("search-params",JSON.stringify(t)),y().then(s=>S(s)).catch(s=>console.log(s))}else if(e>=768&&e<1440){const t=JSON.parse(localStorage.getItem("search-params"));t.limit=8,localStorage.setItem("search-params",JSON.stringify(t)),y().then(s=>S(s)).catch(s=>console.log(s))}else{const t=JSON.parse(localStorage.getItem("search-params"));t.limit=9,localStorage.setItem("search-params",JSON.stringify(t)),y().then(s=>S(s)).catch(s=>console.log(s))}}function St(){const e=JSON.parse(localStorage.getItem("search-params"));e&&(O.elements.searchQuery.value=e.keyword??"",C.value=e.category)}function Pt(e){const t=JSON.parse(localStorage.getItem("search-params"));e.value==="All"?(t.category="",localStorage.setItem("search-params",JSON.stringify(t))):(t.category=e.value,localStorage.setItem("search-params",JSON.stringify(t))),y().then(s=>S(s)).catch(s=>console.log(s)),ut()}function It(e){if(e.preventDefault(),O.elements.searchQuery.value===""){const t=JSON.parse(localStorage.getItem("search-params"));t.page=1,I.innerText="Category",L.innerText="A to Z",t.category="",t.keyword="",delete t.byPopularity,delete t.byPrice,delete t.byABC,localStorage.setItem("search-params",JSON.stringify(t))}else{const t=JSON.parse(localStorage.getItem("search-params"));t.page=1,delete t.byPopularity,delete t.byPrice,delete t.byABC,t.keyword=O.elements.searchQuery.value,localStorage.setItem("search-params",JSON.stringify(t))}y().then(t=>S(t)).catch(t=>console.log(t)),pt()}function wt(){const e=JSON.parse(localStorage.getItem("search-params"));if(e)if(e.category==="")I.innerText="Category";else{C.value=e.category;const s=C.value.split("_").join(" ");I.innerText=s}}function Ct(e){const t=JSON.parse(localStorage.getItem("search-params"));switch(e.value){case"a_z":t.byABC=!0,delete t.byPrice,delete t.byPopularity;break;case"z_a":t.byABC=!1,delete t.byPrice,delete t.byPopularity;break;case"cheap":t.byPrice=!0,delete t.byABC,delete t.byPopularity;break;case"expensive":t.byPrice=!1,delete t.byABC,delete t.byPopularity;break;case"popular":t.byPopularity=!0,delete t.byPrice,delete t.byABC;break;case"not_popular":t.byPopularity=!1,delete t.byPrice,delete t.byABC;break;case"All":t.page=1,delete t.byPrice,delete t.byPopularity,delete t.byABC;break}localStorage.setItem("search-params",JSON.stringify(t)),y().then(s=>S(s)).catch(s=>console.log(s))}L.addEventListener("click",function(e){q.classList.toggle("dropdown__list--visible"),this.classList.add("dropdown__button--active")});yt.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),L.innerText=this.innerText,j.value=this.dataset.value,Ct(j),q.classList.remove("dropdown__list--visible")})});document.addEventListener("click",function(e){e.target!==L&&(L.classList.remove("dropdown__button--active"),q.classList.remove("dropdown__list--visible"))});I.addEventListener("click",function(e){N.classList.toggle("dropdown__list--visible"),this.classList.add("dropdown__button--active")});document.addEventListener("click",function(e){e.target!==I&&(I.classList.remove("dropdown__button--active"),N.classList.remove("dropdown__list--visible"))});document.addEventListener("DOMContentLoaded",async function(){const e=document.querySelector(".container-product-cards-prod"),t=document.querySelector(".modal"),s=document.querySelector(".modal-close-btn"),n=document.querySelector(".container-aside-cards"),p=document.querySelector(".container-discount-product-cards"),i=document.querySelector(".addtocart-btn"),m=document.querySelector(".modal-discount-svg");async function h(o){try{const c=await $(o),a=JSON.parse(localStorage.getItem("cart-products-list"))||[],r=a.findIndex(b=>b._id===c._id);r!==-1?(a.splice(r,1),localStorage.setItem("cart-products-list",JSON.stringify(a)),g(),A()):(c.amount=1,a.push(c),localStorage.setItem("cart-products-list",JSON.stringify(a)),g(),A())}catch(c){console.error("Error managing cart:",c)}}function g(){const o=i.id,a=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).some(r=>r._id===o);l(a),f(),k(),D()}function l(o){o?i.innerHTML=`Remove from <svg width="18" height="18"><use class="button-icon" href="${d}#icon-cart"></use></svg>`:i.innerHTML=`Add to <svg width="18" height="18"><use class="button-icon" href="${d}#icon-cart"></use></svg>`}async function f(){try{const o=await JSON.parse(localStorage.getItem("cart-products-list"))||[],c=document.querySelector(".container-product-cards-prod");c&&c.querySelectorAll(".product-card-prod").forEach(r=>{const b=r.id,u=r.querySelector(".product-card-price-btn-prod .product-card-btn-prod");if(u){const v=o.some(P=>P._id===b);u.disabled=v,v?u.innerHTML=`<svg width="18" height="18"><use class="button-icon" href="${d}#icon-check"></use></svg>`:u.innerHTML=`<svg width="18" height="18"><use class="button-icon" href="${d}#icon-cart"></use></svg>`}})}catch(o){console.error("Error updating button content:",o)}}async function k(){try{const o=await JSON.parse(localStorage.getItem("cart-products-list"))||[],c=document.querySelector(".container-discount-product-cards");c&&c.querySelectorAll(".container-for-discount-items").forEach(r=>{const b=r.id,u=r.querySelector(".discount-product-card-btn");if(u){const v=o.some(P=>P._id===b);u.disabled=v,v?u.innerHTML=`<svg width="18" height="18"><use class="discount-button-icon" href="${d}#icon-check"></use></svg>`:u.innerHTML=`<svg width="18" height="18"><use class="discount-button-icon" href="${d}#icon-cart"></use></svg>`}})}catch(o){console.error("Error updating button content:",o)}}async function D(){try{const o=await JSON.parse(localStorage.getItem("cart-products-list"))||[],c=document.querySelector(".container-aside-cards");c&&c.querySelectorAll(".container-for-popular-items").forEach(r=>{const b=r.id,u=r.querySelector(".products-card-btn");if(u){const v=o.some(P=>P._id===b);u.disabled=v,v?u.innerHTML=`<svg width="16" height="16" fill="#6d8434"><use class="popular-button-icon" href="${d}#icon-check"></use></svg>`:u.innerHTML=`<svg width="16" height="16" fill="#6d8434"><use class="popular-button-icon" href="${d}#icon-cart"></use></svg>`}})}catch(o){console.error("Error updating button content:",o)}}setTimeout(()=>{k()},2e3),setTimeout(()=>{f()},2e3),setTimeout(()=>{D()},2e3);function Q(){t.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function B(){t.classList.add("is-hidden"),document.body.style.overflow="visible"}document.addEventListener("keydown",function(o){o.key==="Escape"&&B()});function V(o){o.target===t&&B()}window.addEventListener("click",V),s.addEventListener("click",B);const $=async o=>{try{return await nt(o)}catch(c){return console.error("Error fetching product details:",c),null}};async function W(o){const c=o.target.closest(".product-card-img-prod");if(c){const a=c.closest(".product-card-prod").id;i.setAttribute("id",a),t.setAttribute("id",a);const r=await $(a);r?J(r):console.log("Product ID not found in fetched-products")}}async function Y(o){const c=o.target.closest(".product-card-btn-prod");if(c){const a=c.closest(".product-card-prod").id;a?(h(a),g()):console.log("Product ID not found in fetched-products")}}async function K(o){const c=o.target.closest(".products-card-btn");if(c){const a=c.closest(".aside-product-card").id;a?(h(a),g()):console.log("Product ID not found in fetched-products")}}async function R(o){const c=o.target.closest(".aside-card-img");if(c){const a=c.closest(".aside-product-card").id;i.setAttribute("id",a),t.setAttribute("id",a);const r=await $(a);r?J(r):console.log("Product ID not found in fetched-products")}}async function U(o){const c=o.target.closest(".discount-product-card-btn");if(c){const a=c.closest(".discount-product-card").id;a?(h(a),g()):console.log("Product ID not found in fetched-products")}}async function Z(o){const c=o.target.closest(".discount-product-card-img");if(c){const a=c.closest(".discount-product-card").id;i.setAttribute("id",a),t.setAttribute("id",a);const r=await $(a);r?J(r):console.log("Product ID not found in fetched-products")}}function J(o){const{name:c,price:a,desc:r,img:b,category:u,size:v,popularity:P,is10PercentOff:kt}=o;Q(),g(),o.is10PercentOff===!0?m.style.display="block":m.style.display="none";const G=document.querySelector(".modal-title"),X=document.querySelector(".price"),tt=document.querySelector(".modal-text"),et=document.querySelector(".img-content"),st=document.querySelector(".modal-size"),ot=document.querySelector(".modal-category"),ct=document.querySelector(".modal-pop");G.textContent=c,X.textContent=`$${a}`,tt.textContent=r,et.setAttribute("src",b),st.textContent=v,ot.textContent=u,ct.textContent=P}e.addEventListener("click",W),e.addEventListener("click",Y),n.addEventListener("click",R),n.addEventListener("click",K),p.addEventListener("click",Z),p.addEventListener("click",U),i.addEventListener("click",async o=>{o.preventDefault();const c=i.id;await h(c)})});window.addEventListener("resize",F);St();F();it().then(e=>{bt(e)}).catch(e=>{console.log(e)});gt();ht();const Lt=JSON.parse(localStorage.getItem("cart-products-list"));Lt||localStorage.setItem("cart-products-list",JSON.stringify([]));function A(){const t=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).length,s=document.querySelector(".quantity_products");s.textContent="("+t+")"}A();
//# sourceMappingURL=commonHelpers2.js.map
