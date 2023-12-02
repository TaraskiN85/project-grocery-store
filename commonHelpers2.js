import{i,g as m,a as ct,b as at,d as rt,e as nt}from"./assets/footer-subscription-a67d3235.js";import{P as M}from"./assets/vendor-8a888f22.js";const J=document.querySelector(".scroll_up");window.addEventListener("scroll",it);J.addEventListener("click",x);function it(){window.scrollY>350?J.classList.add("visible"):J.classList.remove("visible")}function x(){window.scrollY>0&&(window.scrollBy(0,-40),setTimeout(x,0))}const D={divProdCards:document.querySelector(".js-product-cards")};function S(e){D.divProdCards.innerHTML="",D.divProdCards.insertAdjacentHTML("afterbegin",dt(e))}function dt(e){if(console.log(e.results),e.results.length===0)return`<div clas="products-nothing-container">
              <p class="products-nothing-headline">Nothing was found for the selected
                <span class="nothing-headline-span">filters...</span>
              </p>
              <p class="products-nothing-text">Try adjusting your search parameters or browse our range by other criteria to find the perfect product for you.</p>
            </div>`;{const t=`<span class="discount-svg">
    <svg width="60" height="60" >
        <use  href="${i}#icon-discount"></use>
    </svg>
    </span>`;return e.results.map(({_id:s,name:n,img:u,category:d,price:f,size:y,popularity:p,is10PercentOff:w})=>`<div class="product-card-prod" id="${s}">
          <div class="product-card-img-prod">
            <img class="card-img-prod" src="${u}" alt="${n}">
            ${w?t:""}
          </div>
          <h3 class="produc-card-name-prod">${n}</h3>
          <div class="product-card-description-prod">
            <div class="card-description-prod">
              <p>Category:</p>
              <p class="card-description-value-prod">${d}</p>
            </div>
            <div class="card-description-prod">
              <p>Size:</p>
              <p class="card-description-value-prod">${y}</p>
            </div>
            <div class="card-description-prod">
              <p>Popularity:</p>
              <p class="card-description-value-prod">${p}</p>
            </div>
          </div>
          <div class="product-card-price-btn-prod">
            <p class="product-card-price-prod">${f}</p>
            <button type="button" class="product-card-btn-prod id="${s}">
              <svg width="18" height="18">
                <use class="button-icon-prod" href="${i}#icon-cart"></use>
              </svg>
            </button>
          </div>
        </div>`).join("")}}const C=document.getElementById("pagination"),I=JSON.parse(localStorage.getItem("search-params"));m().then(e=>{const t=e.page;let s=e.totalPages;const n=I.limit,u=n*s;if(s<=1)return;new M(C,{totalItems:u,itemsPerPage:n,visiblePages:3,page:t,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${i}#{{type}}"></use></svg></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${i}#{{type}}"></use></svg></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}}).on("afterMove",function(f){const y=f.page;async function p(w){try{const v=JSON.parse(localStorage.getItem("search-params"));v.page=w,localStorage.setItem("search-params",JSON.stringify(v));const $=await m(v);S($)}catch(v){console.error(v)}}p(y)})}).catch(e=>console.log(e));function lt(){C.innerHTML="",JSON.parse(localStorage.getItem("search-params")),m().then(e=>{let t=e.totalPages;const s=I.limit,n=s*t;t<=1||new M(C,{totalItems:n,itemsPerPage:s,visiblePages:4,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${i}#{{type}}"></use></svg></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${i}#{{type}}"></use></svg></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}})}).catch(e=>console.log(e))}const ut=document.querySelector(".js-search-input");ut.addEventListener("change",pt);function pt(e){e.preventDefault(),I.keyword=e.target.value,C.innerHTML="",localStorage.setItem("search-params",JSON.stringify(I)),JSON.parse(localStorage.getItem("search-params")),m().then(t=>{let s=t.totalPages;const n=I.limit,u=n*s;s<=1||new M(C,{totalItems:u,itemsPerPage:n,visiblePages:4,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:`<a href="#" class="tui-page-btn tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${i}#{{type}}"></use></svg></a>`,disabledMoveButton:`<span class="tui-page-btn tui-is-disabled tui-{{type}}"><svg width="14" height="14"><use class="tui-btn-icon" href="${i}#{{type}}"></use></svg></span>`,moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'}})}).catch(t=>console.log(t))}const H={popularProductCards:document.querySelector(".js-popular-product-cards"),discountProductCards:document.querySelector(".js-discount-product-cards")};async function gt(){const e=await ct();H.popularProductCards.insertAdjacentHTML("beforeend",mt(e))}function mt(e){return e.map(({_id:t,name:s,img:n,category:u,size:d,popularity:f})=>`<div class="container-for-popular-items" id="${t}">
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
                          <p class="card-descr-value">${u}</p>
                      </div>
                      <div class="size-popularity-container">
                      <div class="aside-card-description">
                          <p class="descr-p">Size:</p>
                          <p class="card-descr-value">${d}</p>
                      </div>
                      <div class="aside-card-description">
                          <p class="descr-p">Popularity:</p>
                          <p class="card-descr-value">${f}</p>
                      </div>
                  </div>
                  </div>
                  </div>
                  <div class="product-card-prices-btn">
                      <button type="button" class="products-card-btn" id="${t}">
                          <svg width="16" height="16">
                              <use class="popular-button-icon" href="${i}#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
              </div>
              </div>`).join("")}async function ht(){const e=await at();H.discountProductCards.insertAdjacentHTML("beforeend",ft(e))}function ft(e){return e.slice(0,2).map(({_id:s,name:n,img:u,price:d})=>`<div class="container-for-discount-items" id="${s}">
          <div class="discount-product-card" id="${s}">
                  <div class="discount-product-card-img">
                      <img class="discount-card-img"
                          src="${u}"
                          alt="${n}">
                          <span class="discount-svg">
                          <svg width="60" height="60" >
                              <use  href="${i}#icon-discount"></use>
                          </svg>
                          </span>
                  </div>
                  <div class="product-card-prices-btn">
                  <h3 class="discount-product-card-name">${n}</h3>

                 <div class="discount-price-icon-container">
                      <p class="product-card-price">$${d}</p>
                      <button type="button" class="discount-product-card-btn" id="${s}">
                          <svg width="18" height="18">
                              <use class="discount-button-icon" href="${i}#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
                  </div>
              </div>
              </div>`).join("")}const q=document.querySelector(".js-category-list"),O=document.querySelector(".js-search-input"),P=document.querySelector(".dropdown-categoryBtn"),L=document.querySelector(".js-category-input"),k=document.querySelector(".dropdown-sortingBtn"),B=document.querySelector(".js-sorting-list"),yt=B.querySelectorAll(".js-sorting-item"),j=document.querySelector(".js-sorting-input"),vt={keyword:"",category:"",page:1,limit:6};JSON.parse(localStorage.getItem("search-params"))||localStorage.setItem("search-params",JSON.stringify(vt));O.addEventListener("submit",wt);function bt(e){const t=e.map(n=>{const d=n.split("_").join(" ");return`<li class="dropdown-sorting__item js-category-item" data-value="${n}">${d}</li>`}).join("");q.insertAdjacentHTML("afterbegin",t),document.querySelectorAll(".js-category-item").forEach(function(n){n.addEventListener("click",function(u){console.log("dropinner"),u.stopPropagation(),P.innerText=this.innerText,L.value=this.dataset.value,Pt(L),q.classList.remove("dropdown__list--visible")})}),It()}function z(){const e=window.innerWidth;if(e<768){const t=JSON.parse(localStorage.getItem("search-params"));t.limit=6,localStorage.setItem("search-params",JSON.stringify(t)),m().then(s=>S(s)).catch(s=>console.log(s))}else if(e>=768&&e<1440){const t=JSON.parse(localStorage.getItem("search-params"));t.limit=8,localStorage.setItem("search-params",JSON.stringify(t)),m().then(s=>S(s)).catch(s=>console.log(s))}else{const t=JSON.parse(localStorage.getItem("search-params"));t.limit=9,localStorage.setItem("search-params",JSON.stringify(t)),m().then(s=>S(s)).catch(s=>console.log(s))}}function St(){const e=JSON.parse(localStorage.getItem("search-params"));e&&(O.elements.searchQuery.value=e.keyword??"",L.value=e.category)}function Pt(e){const t=JSON.parse(localStorage.getItem("search-params"));e.value==="All"?(t.category="",localStorage.setItem("search-params",JSON.stringify(t))):(t.category=e.value,localStorage.setItem("search-params",JSON.stringify(t))),m().then(s=>S(s)).catch(s=>console.log(s)),lt()}function wt(e){if(e.preventDefault(),O.elements.searchQuery.value===""){const t=JSON.parse(localStorage.getItem("search-params"));t.page=1,P.innerText="Category",k.innerText="A to Z",t.category="",delete t.byPopularity,delete t.byPrice,delete t.byABC,localStorage.setItem("search-params",JSON.stringify(t))}else{const t=JSON.parse(localStorage.getItem("search-params"));t.page=1,console.log("sort"),delete t.byPopularity,delete t.byPrice,delete t.byABC,t.keyword=O.elements.searchQuery.value,localStorage.setItem("search-params",JSON.stringify(t))}m().then(t=>S(t)).catch(t=>console.log(t))}function It(){const e=JSON.parse(localStorage.getItem("search-params"));if(e)if(e.category==="")P.innerText="Category";else{L.value=e.category;const s=L.value.split("_").join(" ");P.innerText=s}}function Ct(e){const t=JSON.parse(localStorage.getItem("search-params"));switch(e.value){case"a_z":t.byABC=!0,delete t.byPrice,delete t.byPopularity;break;case"z_a":t.byABC=!1,delete t.byPrice,delete t.byPopularity;break;case"cheap":t.byPrice=!0,delete t.byABC,delete t.byPopularity;break;case"expensive":t.byPrice=!1,delete t.byABC,delete t.byPopularity;break;case"popular":t.byPopularity=!0,delete t.byPrice,delete t.byABC;break;case"not_popular":t.byPopularity=!1,delete t.byPrice,delete t.byABC;break;case"All":t.page=1,delete t.byPrice,delete t.byPopularity,delete t.byABC;break}localStorage.setItem("search-params",JSON.stringify(t)),m().then(s=>S(s)).catch(s=>console.log(s))}k.addEventListener("click",function(e){B.classList.toggle("dropdown__list--visible"),this.classList.add("dropdown__button--active")});yt.forEach(function(e){e.addEventListener("click",function(t){t.stopPropagation(),k.innerText=this.innerText,j.value=this.dataset.value,Ct(j),B.classList.remove("dropdown__list--visible")})});document.addEventListener("click",function(e){e.target!==k&&(k.classList.remove("dropdown__button--active"),B.classList.remove("dropdown__list--visible"))});P.addEventListener("click",function(e){console.log("дропліст"),q.classList.toggle("dropdown__list--visible"),this.classList.add("dropdown__button--active")});document.addEventListener("click",function(e){e.target!==P&&(P.classList.remove("dropdown__button--active"),q.classList.remove("dropdown__list--visible"))});document.addEventListener("DOMContentLoaded",async function(){const e=document.querySelector(".container-product-cards-prod"),t=document.querySelector(".modal"),s=document.querySelector(".modal-close-btn"),n=document.querySelector(".container-aside-cards"),u=document.querySelector(".container-discount-product-cards"),d=document.querySelector(".addtocart-btn"),f=document.querySelector(".modal-discount-svg");async function y(o){try{const c=await N(o),a=JSON.parse(localStorage.getItem("cart-products-list"))||[],r=a.findIndex(h=>h._id===c._id);r!==-1?(a.splice(r,1),localStorage.setItem("cart-products-list",JSON.stringify(a)),p(),T()):(c.amount=1,a.push(c),localStorage.setItem("cart-products-list",JSON.stringify(a)),p(),T())}catch(c){console.error("Error managing cart:",c)}}function p(){const o=d.id,a=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).some(r=>r._id===o);w(a),v(),$(),_()}function w(o){o?d.innerHTML=`Remove from <svg width="18" height="18"><use class="button-icon" href="${i}#icon-cart"></use></svg>`:d.innerHTML=`Add to <svg width="18" height="18"><use class="button-icon" href="${i}#icon-cart"></use></svg>`}async function v(){try{const o=await JSON.parse(localStorage.getItem("cart-products-list"))||[],c=document.querySelector(".container-product-cards-prod");c&&c.querySelectorAll(".product-card-prod").forEach(r=>{const h=r.id,l=r.querySelector(".product-card-price-btn-prod .product-card-btn-prod");if(l){const g=o.some(b=>b._id===h);l.disabled=g,g?l.innerHTML=`<svg width="18" height="18"><use class="button-icon" href="${i}#icon-check"></use></svg>`:l.innerHTML=`<svg width="18" height="18"><use class="button-icon" href="${i}#icon-cart"></use></svg>`}})}catch(o){console.error("Error updating button content:",o)}}async function $(){try{const o=await JSON.parse(localStorage.getItem("cart-products-list"))||[],c=document.querySelector(".container-discount-product-cards");c&&c.querySelectorAll(".container-for-discount-items").forEach(r=>{const h=r.id,l=r.querySelector(".discount-product-card-btn");if(l){const g=o.some(b=>b._id===h);l.disabled=g,g?l.innerHTML=`<svg width="16" height="16"><use class="discount-button-icon" href="${i}#icon-check"></use></svg>`:l.innerHTML='<svg width="16" height="16"><use class="discount-button-icon" href="${icons}#icon-cart"></use></svg>'}})}catch(o){console.error("Error updating button content:",o)}}async function _(){try{const o=await JSON.parse(localStorage.getItem("cart-products-list"))||[],c=document.querySelector(".container-aside-cards");c&&c.querySelectorAll(".container-for-popular-items").forEach(r=>{const h=r.id,l=r.querySelector(".products-card-btn");if(l){const g=o.some(b=>b._id===h);l.disabled=g,g?l.innerHTML=`<svg width="16" height="16" fill="#6d8434"><use class="popular-button-icon" href="${i}#icon-check"></use></svg>`:l.innerHTML=`<svg width="16" height="16" fill="#6d8434"><use class="popular-button-icon" href="${i}#icon-cart"></use></svg>`}})}catch(o){console.error("Error updating button content:",o)}}setTimeout(()=>{$()},2e3),setTimeout(()=>{v()},2e3),setTimeout(()=>{_()},2e3);function Q(){t.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function E(){t.classList.add("is-hidden"),document.body.style.overflow="visible"}document.addEventListener("keydown",function(o){o.key==="Escape"&&E()});function F(o){o.target===t&&E()}window.addEventListener("click",F),s.addEventListener("click",E);const N=async o=>{try{return await rt(o)}catch(c){return console.error("Error fetching product details:",c),null}};async function V(o){const c=o.target.closest(".product-card-img-prod");if(c){const a=c.closest(".product-card-prod").id;d.setAttribute("id",a),t.setAttribute("id",a);const r=await N(a);r?A(r):console.log("Product ID not found in fetched-products")}}async function W(o){const c=o.target.closest(".product-card-btn-prod");if(c){const a=c.closest(".product-card-prod").id;a?(y(a),p()):console.log("Product ID not found in fetched-products")}}async function Y(o){const c=o.target.closest(".products-card-btn");if(c){const a=c.closest(".aside-product-card").id;a?(y(a),p()):console.log("Product ID not found in fetched-products")}}async function K(o){const c=o.target.closest(".aside-card-img");if(c){const a=c.closest(".aside-product-card").id;d.setAttribute("id",a),t.setAttribute("id",a);const r=await N(a);r?A(r):console.log("Product ID not found in fetched-products")}}async function R(o){const c=o.target.closest(".discount-product-card-btn");if(c){const a=c.closest(".discount-product-card").id;a?(y(a),p()):console.log("Product ID not found in fetched-products")}}async function Z(o){const c=o.target.closest(".discount-product-card-img");if(c){const a=c.closest(".discount-product-card").id;d.setAttribute("id",a),t.setAttribute("id",a);const r=await N(a);r?A(r):console.log("Product ID not found in fetched-products")}}function A(o){const{name:c,price:a,desc:r,img:h,category:l,size:g,popularity:b,is10PercentOff:kt}=o;Q(),p(),o.is10PercentOff===!0?f.style.display="block":f.style.display="none";const G=document.querySelector(".modal-title"),U=document.querySelector(".price"),X=document.querySelector(".modal-text"),tt=document.querySelector(".img-content"),et=document.querySelector(".modal-size"),st=document.querySelector(".modal-category"),ot=document.querySelector(".modal-pop");G.textContent=c,U.textContent=`$${a}`,X.textContent=r,tt.setAttribute("src",h),et.textContent=g,st.textContent=l,ot.textContent=b}e.addEventListener("click",V),e.addEventListener("click",W),n.addEventListener("click",K),n.addEventListener("click",Y),u.addEventListener("click",Z),u.addEventListener("click",R),d.addEventListener("click",async o=>{o.preventDefault();const c=d.id;await y(c)})});window.addEventListener("resize",z);St();z();nt().then(e=>{bt(e)}).catch(e=>{console.log(e)});gt();ht();const Lt=JSON.parse(localStorage.getItem("cart-products-list"));Lt||localStorage.setItem("cart-products-list",JSON.stringify([]));function T(){const t=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).length,s=document.querySelector(".quantity_products");s.textContent="("+t+")"}T();
//# sourceMappingURL=commonHelpers2.js.map
