import{i as l,g as f,a as ct,b as at,d as rt,e as nt}from"./assets/footer-subscription-ffe03d18.js";import{P as M}from"./assets/vendor-8a888f22.js";const J=document.querySelector(".scroll_up");window.addEventListener("scroll",it);J.addEventListener("click",j);function it(){window.scrollY>350?J.classList.add("visible"):J.classList.remove("visible")}function j(){window.scrollY>0&&(window.scrollBy(0,-40),setTimeout(j,0))}const D={divProdCards:document.querySelector(".js-product-cards")};function S(e){D.divProdCards.innerHTML="",D.divProdCards.insertAdjacentHTML("afterbegin",dt(e))}function dt(e){if(e.results.length===0)return`<div clas="products-nothing-container">
              <p class="products-nothing-headline">Nothing was found for the selected
                <span class="nothing-headline-span">filters...</span>
              </p>
              <p class="products-nothing-text">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
            </div>`;{const t=`<span class="discount-svg">
    <svg width="60" height="60" >
        <use  href="${l}#icon-discount"></use>
    </svg>
    </span>`;return e.results.map(({_id:s,name:r,img:u,category:d,price:m,size:h,popularity:g,is10PercentOff:v})=>`<div class="product-card-prod" id="${s}">
          <div class="product-card-img-prod">
            <img class="card-img-prod" src="${u}" alt="${r}">
            ${v?t:""}
          </div>
          <h3 class="produc-card-name-prod">${r}</h3>
          <div class="product-card-description-prod">
            <div class="card-description-prod">
              <p>Category:</p>
              <p class="card-description-value-prod">${d}</p>
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
            <p class="product-card-price-prod">${m}</p>
            <button type="button" class="product-card-btn-prod id="${s}">
              <svg width="18" height="18">
                <use class="button-icon-prod" href="${l}#icon-cart"></use>
              </svg>
            </button>
          </div>
        </div>`).join("")}}const C=document.getElementById("pagination"),T=JSON.parse(localStorage.getItem("search-params"));f().then(e=>{const t=e.page;let s=e.totalPages;const r=T.limit,u=r*s;if(s<=1)return;new M(C,{totalItems:u,itemsPerPage:r,visiblePages:3,page:t,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${l}#{{type}}"></use></svg></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${l}#{{type}}"></use></svg></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("afterMove",function(m){const h=m.page;async function g(v){try{const i=JSON.parse(localStorage.getItem("search-params"));i.page=v,localStorage.setItem("search-params",JSON.stringify(i));const P=await f(i);S(P)}catch(i){console.error(i)}}g(h)})}).catch(e=>console.log(e));function lt(){C.innerHTML="";const e=JSON.parse(localStorage.getItem("search-params"));console.log("After change:",e),f().then(t=>{let s=t.totalPages;const r=T.limit,u=r*s;if(s<=1)return;new M(C,{totalItems:u,itemsPerPage:r,visiblePages:4,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${l}#{{type}}"></use></svg></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${l}#{{type}}"></use></svg></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("afterMove",function(m){const h=m.page;async function g(v){try{const i=JSON.parse(localStorage.getItem("search-params"));i.page=v,localStorage.setItem("search-params",JSON.stringify(i));const P=await f(i);S(P)}catch(i){console.error(i)}}g(h)})}).catch(t=>console.log(t))}function ut(){event.preventDefault(),C.innerHTML="";const e=JSON.parse(localStorage.getItem("search-params"));console.log("After search:",e),f().then(t=>{let s=t.totalPages;const r=T.limit,u=r*s;if(s<=1)return;new M(C,{totalItems:u,itemsPerPage:r,visiblePages:4,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${l}#{{type}}"></use></svg></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${l}#{{type}}"></use></svg></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("afterMove",function(m){const h=m.page;async function g(v){try{const i=JSON.parse(localStorage.getItem("search-params"));i.page=v,localStorage.setItem("search-params",JSON.stringify(i));const P=await f(i);S(P)}catch(i){console.error(i)}}g(h)})}).catch(t=>console.log(t))}const H={popularProductCards:document.querySelector(".js-popular-product-cards"),discountProductCards:document.querySelector(".js-discount-product-cards")};async function pt(){const e=await ct();H.popularProductCards.insertAdjacentHTML("beforeend",gt(e))}function gt(e){return e.map(({_id:t,name:s,img:r,category:u,size:d,popularity:m})=>`<div class="container-for-popular-items" id="${t}">
          <div class="aside-product-card" id="${t}">
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
                          <p class="card-descr-value">${u}</p>
                      </div>
                      <div class="size-popularity-container">
                      <div class="aside-card-description">
                          <p class="descr-p">Size:</p>
                          <p class="card-descr-value">${d}</p>
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
                              <use class="popular-button-icon" href="${l}#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
              </div>
              </div>`).join("")}async function mt(){const e=await at();H.discountProductCards.insertAdjacentHTML("beforeend",ht(e))}function ht(e){return e.slice(0,2).map(({_id:s,name:r,img:u,price:d})=>`<div class="container-for-discount-items" id="${s}">
          <div class="discount-product-card" id="${s}">
                  <div class="discount-product-card-img">
                      <img class="discount-card-img"
                          src="${u}"
                          alt="${r}">
                          <span class="discount-svg">
                          <svg width="60" height="60" >
                              <use  href="${l}#icon-discount"></use>
                          </svg>
                          </span>
                  </div>
                  <div class="product-card-prices-btn">
                  <h3 class="discount-product-card-name">${r}</h3>

                 <div class="discount-price-icon-container">
                      <p class="product-card-price">$${d}</p>
                      <button type="button" class="discount-product-card-btn" id="${s}">
                          <svg width="18" height="18">
                              <use class="discount-button-icon" href="${l}#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
                  </div>
              </div>
              </div>`).join("")}const N=document.querySelector(".js-category-list"),O=document.querySelector(".js-search-input"),I=document.querySelector(".dropdown-categoryBtn"),L=document.querySelector(".js-category-input"),k=document.querySelector(".dropdown-sortingBtn"),q=document.querySelector(".js-sorting-list"),ft=q.querySelectorAll(".js-sorting-item"),x=document.querySelector(".js-sorting-input"),yt={keyword:"",category:"",page:1,limit:6};JSON.parse(localStorage.getItem("search-params"))||localStorage.setItem("search-params",JSON.stringify(yt));O.addEventListener("submit",Pt);function vt(e){const t=e.map(r=>{const d=r.split("_").join(" ");return`<li class="dropdown-sorting__item js-category-item" data-value="${r}">${d}</li>`}).join("");N.insertAdjacentHTML("afterbegin",t),document.querySelectorAll(".js-category-item").forEach(function(r){r.addEventListener("click",function(u){u.stopPropagation(),I.innerText=this.innerText,L.value=this.dataset.value,St(L),N.classList.remove("dropdown__list--visible")})}),wt()}function z(){const e=window.innerWidth;if(e<768){const t=JSON.parse(localStorage.getItem("search-params"));t.limit=6,localStorage.setItem("search-params",JSON.stringify(t)),f().then(s=>S(s)).catch(s=>console.log(s))}else if(e>=768&&e<1440){const t=JSON.parse(localStorage.getItem("search-params"));t.limit=8,localStorage.setItem("search-params",JSON.stringify(t)),f().then(s=>S(s)).catch(s=>console.log(s))}else{const t=JSON.parse(localStorage.getItem("search-params"));t.limit=9,localStorage.setItem("search-params",JSON.stringify(t)),f().then(s=>S(s)).catch(s=>console.log(s))}}function bt(){const e=JSON.parse(localStorage.getItem("search-params"));e&&(O.elements.searchQuery.value=e.keyword??"",L.value=e.category)}function St(e){const t=JSON.parse(localStorage.getItem("search-params"));e.value==="All"?(t.category="",localStorage.setItem("search-params",JSON.stringify(t))):(t.category=e.value,localStorage.setItem("search-params",JSON.stringify(t))),f().then(s=>S(s)).catch(s=>console.log(s)),lt()}function Pt(e){if(e.preventDefault(),O.elements.searchQuery.value===""){const t=JSON.parse(localStorage.getItem("search-params"));t.page=1,I.innerText="Category",k.innerText="A to Z",t.category="",t.keyword="",delete t.byPopularity,delete t.byPrice,delete t.byABC,localStorage.setItem("search-params",JSON.stringify(t))}else{const t=JSON.parse(localStorage.getItem("search-params"));t.page=1,delete t.byPopularity,delete t.byPrice,delete t.byABC,t.keyword=O.elements.searchQuery.value,localStorage.setItem("search-params",JSON.stringify(t))}f().then(t=>S(t)).catch(t=>console.log(t)),ut()}function wt(){const e=JSON.parse(localStorage.getItem("search-params"));if(e)if(e.category==="")I.innerText="Category";else{L.value=e.category;const s=L.value.split("_").join(" ");I.innerText=s}}function It(e){const t=JSON.parse(localStorage.getItem("search-params"));switch(e.value){case"a_z":t.byABC=!0,delete t.byPrice,delete t.byPopularity;break;case"z_a":t.byABC=!1,delete t.byPrice,delete t.byPopularity;break;case"cheap":t.byPrice=!0,delete t.byABC,delete t.byPopularity;break;case"expensive":t.byPrice=!1,delete t.byABC,delete t.byPopularity;break;case"popular":t.byPopularity=!0,delete t.byPrice,delete t.byABC;break;case"not_popular":t.byPopularity=!1,delete t.byPrice,delete t.byABC;break;case"All":t.page=1,delete t.byPrice,delete t.byPopularity,delete t.byABC;break}localStorage.setItem("search-params",JSON.stringify(t)),f().then(s=>S(s)).catch(s=>console.log(s))}k.addEventListener("click",function(e){q.classList.toggle("dropdown__list--visible"),this.classList.add("dropdown__button--active")});ft.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),k.innerText=this.innerText,x.value=this.dataset.value,It(x),q.classList.remove("dropdown__list--visible")})});document.addEventListener("click",function(e){e.target!==k&&(k.classList.remove("dropdown__button--active"),q.classList.remove("dropdown__list--visible"))});I.addEventListener("click",function(e){N.classList.toggle("dropdown__list--visible"),this.classList.add("dropdown__button--active")});document.addEventListener("click",function(e){e.target!==I&&(I.classList.remove("dropdown__button--active"),N.classList.remove("dropdown__list--visible"))});document.addEventListener("DOMContentLoaded",async function(){const e=document.querySelector(".container-product-cards-prod"),t=document.querySelector(".modal"),s=document.querySelector(".modal-close-btn"),r=document.querySelector(".container-aside-cards"),u=document.querySelector(".container-discount-product-cards"),d=document.querySelector(".addtocart-btn"),m=document.querySelector(".modal-discount-svg");async function h(o){try{const c=await $(o),a=JSON.parse(localStorage.getItem("cart-products-list"))||[],n=a.findIndex(b=>b._id===c._id);n!==-1?(a.splice(n,1),localStorage.setItem("cart-products-list",JSON.stringify(a)),g(),E()):(c.amount=1,a.push(c),localStorage.setItem("cart-products-list",JSON.stringify(a)),g(),E())}catch(c){console.error("Error managing cart:",c)}}function g(){const o=d.id,a=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).some(n=>n._id===o);v(a),i(),P(),_()}function v(o){o?d.innerHTML=`Remove from <svg width="18" height="18"><use class="button-icon" href="${l}#icon-cart"></use></svg>`:d.innerHTML=`Add to <svg width="18" height="18"><use class="button-icon" href="${l}#icon-cart"></use></svg>`}async function i(){try{const o=await JSON.parse(localStorage.getItem("cart-products-list"))||[],c=document.querySelector(".container-product-cards-prod");c&&c.querySelectorAll(".product-card-prod").forEach(n=>{const b=n.id,p=n.querySelector(".product-card-price-btn-prod .product-card-btn-prod");if(p){const y=o.some(w=>w._id===b);p.disabled=y,y?p.innerHTML=`<svg width="18" height="18"><use class="button-icon" href="${l}#icon-check"></use></svg>`:p.innerHTML=`<svg width="18" height="18"><use class="button-icon" href="${l}#icon-cart"></use></svg>`}})}catch(o){console.error("Error updating button content:",o)}}async function P(){try{const o=await JSON.parse(localStorage.getItem("cart-products-list"))||[],c=document.querySelector(".container-discount-product-cards");c&&c.querySelectorAll(".container-for-discount-items").forEach(n=>{const b=n.id,p=n.querySelector(".discount-product-card-btn");if(p){const y=o.some(w=>w._id===b);p.disabled=y,y?p.innerHTML=`<svg width="18" height="18"><use class="discount-button-icon" href="${l}#icon-check"></use></svg>`:p.innerHTML=`<svg width="18" height="18"><use class="discount-button-icon" href="${l}#icon-cart"></use></svg>`}})}catch(o){console.error("Error updating button content:",o)}}async function _(){try{const o=await JSON.parse(localStorage.getItem("cart-products-list"))||[],c=document.querySelector(".container-aside-cards");c&&c.querySelectorAll(".container-for-popular-items").forEach(n=>{const b=n.id,p=n.querySelector(".products-card-btn");if(p){const y=o.some(w=>w._id===b);p.disabled=y,y?p.innerHTML=`<svg width="16" height="16" fill="#6d8434"><use class="popular-button-icon" href="${l}#icon-check"></use></svg>`:p.innerHTML=`<svg width="16" height="16" fill="#6d8434"><use class="popular-button-icon" href="${l}#icon-cart"></use></svg>`}})}catch(o){console.error("Error updating button content:",o)}}setTimeout(()=>{P()},2e3),setTimeout(()=>{i()},2e3),setTimeout(()=>{_()},2e3);function Q(){t.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function A(){t.classList.add("is-hidden"),document.body.style.overflow="visible"}document.addEventListener("keydown",function(o){o.key==="Escape"&&A()});function F(o){o.target===t&&A()}window.addEventListener("click",F),s.addEventListener("click",A);const $=async o=>{try{return await rt(o)}catch(c){return console.error("Error fetching product details:",c),null}};async function V(o){const c=o.target.closest(".product-card-img-prod");if(c){const a=c.closest(".product-card-prod").id;d.setAttribute("id",a),t.setAttribute("id",a);const n=await $(a);n?B(n):console.log("Product ID not found in fetched-products")}}async function W(o){const c=o.target.closest(".product-card-btn-prod");if(c){const a=c.closest(".product-card-prod").id;a?(h(a),g()):console.log("Product ID not found in fetched-products")}}async function Y(o){const c=o.target.closest(".products-card-btn");if(c){const a=c.closest(".aside-product-card").id;a?(h(a),g()):console.log("Product ID not found in fetched-products")}}async function K(o){const c=o.target.closest(".aside-card-img");if(c){const a=c.closest(".aside-product-card").id;d.setAttribute("id",a),t.setAttribute("id",a);const n=await $(a);n?B(n):console.log("Product ID not found in fetched-products")}}async function R(o){const c=o.target.closest(".discount-product-card-btn");if(c){const a=c.closest(".discount-product-card").id;a?(h(a),g()):console.log("Product ID not found in fetched-products")}}async function Z(o){const c=o.target.closest(".discount-product-card-img");if(c){const a=c.closest(".discount-product-card").id;d.setAttribute("id",a),t.setAttribute("id",a);const n=await $(a);n?B(n):console.log("Product ID not found in fetched-products")}}function B(o){const{name:c,price:a,desc:n,img:b,category:p,size:y,popularity:w,is10PercentOff:Lt}=o;Q(),g(),o.is10PercentOff===!0?m.style.display="block":m.style.display="none";const G=document.querySelector(".modal-title"),U=document.querySelector(".price"),X=document.querySelector(".modal-text"),tt=document.querySelector(".img-content"),et=document.querySelector(".modal-size"),st=document.querySelector(".modal-category"),ot=document.querySelector(".modal-pop");G.textContent=c,U.textContent=`$${a}`,X.textContent=n,tt.setAttribute("src",b),et.textContent=y,st.textContent=p,ot.textContent=w}e.addEventListener("click",V),e.addEventListener("click",W),r.addEventListener("click",K),r.addEventListener("click",Y),u.addEventListener("click",Z),u.addEventListener("click",R),d.addEventListener("click",async o=>{o.preventDefault();const c=d.id;await h(c)})});window.addEventListener("resize",z);bt();z();nt().then(e=>{vt(e)}).catch(e=>{console.log(e)});pt();mt();const Ct=JSON.parse(localStorage.getItem("cart-products-list"));Ct||localStorage.setItem("cart-products-list",JSON.stringify([]));function E(){const t=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).length,s=document.querySelector(".quantity_products");s.textContent="("+t+")"}E();
//# sourceMappingURL=commonHelpers2.js.map
