import{g as y,a as V,b as W,c as K,d as R}from"./assets/footer-subscription-6a29f9a3.js";import{P as G}from"./assets/vendor-99d50140.js";const q={divProdCards:document.querySelector(".js-product-cards")};function v(t){q.divProdCards.innerHTML="",q.divProdCards.insertAdjacentHTML("afterbegin",U(t))}function U(t){return t.results.map(({_id:e,name:c,img:l,category:i,price:r,size:p,popularity:f})=>`<div class="product-card-prod" id="${e}">
                  <div class="product-card-img-prod">
                      <img class="card-img-prod"
                          src="${l}"
                          alt="${c}">
                  </div>
                  <h3 class="produc-card-name-prod">${c}</h3>
                  <div class="product-card-description-prod">
                      <div class="card-description-prod">
                          <p>Category:</p>
                          <p class="card-description-value-prod">${i}</p>
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
                      <p class="product-card-price-prod">${r}</p>
                      <button type="button" class="product-card-btn-prod">
                          <svg width="18" height="18">
                              <use class="button-icon-prod" href="../img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
              </div>`).join("")}const u=document.getElementById("pagination"),X=600,Y=9,Z=new G(u,{totalItems:X,itemsPerPage:Y,visiblePages:3,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',firstPage:'<a href="#" class="tui-page-btn tui-first-child"><<</a>',lastPage:'<a href="#" class="tui-page-btn tui-last-child">>></a>',prevPage:'<a href="#" class="tui-page-btn tui-prev"><</a>',nextPage:'<a href="#" class="tui-page-btn tui-next">></a>'}}),tt=u.querySelector(".tui-prev"),et=u.querySelector(".tui-next"),ct=u.querySelector(".tui-first"),ot=u.querySelector(".tui-last");tt.textContent="‹";et.textContent="›";ct.textContent="«";ot.textContent="»";Z.on("afterMove",function(t){const e=t.page;async function c(l){try{const i=JSON.parse(localStorage.getItem("search-params"));i.page=l,localStorage.setItem("search-params",JSON.stringify(i));const r=await y(i);v(r);const p=u.querySelector(".tui-prev"),f=u.querySelector(".tui-next"),h=u.querySelector(".tui-first"),P=u.querySelector(".tui-last");p.textContent="‹",f.textContent="›",h.textContent="«",P.textContent="»"}catch(i){console.error(i)}}c(e)});const B={popularProductCards:document.querySelector(".js-popular-product-cards"),discountProductCards:document.querySelector(".js-discount-product-cards")};async function st(){const t=await V();B.popularProductCards.insertAdjacentHTML("beforeend",at(t))}function at(t){return t.map(({_id:e,name:c,img:l,category:i,size:r,popularity:p})=>`<div class="container-for-popular-items">
          <div class="aside-product-card" id="${e}">
                  <div class="aside-card-img">
                      <img class="aside-img"
                          src="${l}"
                          alt="${c}">
                  </div>
                 <div class="container-for-name-descr">
                  <div class="card-product-name-container">
                  <h3 class="aside-card-name">${c}</h3>
                     </div>
                  <div class="products-card-description">
                      <div class="aside-card-description">
                          <p class="descr-p">Category:</p>
                          <p class="card-descr-value">${i}</p>
                      </div>
                      <div class="size-popularity-container">
                      <div class="aside-card-description">
                          <p class="descr-p">Size:</p>
                          <p class="card-descr-value">${r}</p>
                      </div>
                      <div class="aside-card-description">
                          <p class="descr-p">Popularity:</p>
                          <p class="card-descr-value">${p}</p>
                      </div>
                  </div>
                  </div>
                  </div>
                  <div class="product-card-prices-btn">
                      <button type="button" class="products-card-btn">
                          <svg width="16" height="16">
                              <use class="popular-button-icon" href="../img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
              </div>
              </div>`).join("")}async function rt(){const t=await W();B.discountProductCards.insertAdjacentHTML("beforeend",nt(t))}function nt(t){return t.slice(0,2).map(({_id:c,name:l,img:i,price:r})=>`<div class="container-for-discount-items">
          <div class="discount-product-card" id="${c}">
                  <div class="discount-product-card-img">
                      <img class="discount-card-img"
                          src="${i}"
                          alt="${l}">
                          <span class="discount-svg">
                          <svg width="60" height="60" >
                              <use  href="../img/icons.svg#icon-discount"></use>
                          </svg>
                          </span>
                  </div>
                  <div class="product-card-prices-btn">
                  <h3 class="discount-product-card-name">${l}</h3>
                 <div class="discount-price-icon-container">
                      <p class="product-card-price">${r}</p>
                      <button type="button" class="discount-product-card-btn">
                          <svg width="18" height="18">
                              <use class="discount-button-icon" href="../img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
                  </div>
              </div>
              </div>`).join("")}const d=document.querySelector(".js-category"),w=document.querySelector(".js-sorting"),S=document.querySelector(".js-search-input"),m="search-params",g={keyword:"",category:"",page:1,limit:9};d.addEventListener("input",lt);w.addEventListener("input",gt);S.addEventListener("submit",ut);function it(t){const e=t.map(c=>`<option value="${c}">${c}</option>`).join("");d.insertAdjacentHTML("afterbegin",e),pt()}function L(){const t=window.innerWidth;t<768?(g.limit=6,localStorage.setItem(m,JSON.stringify(g)),y().then(e=>v(e)).catch(e=>console.log(e))):t>=768&&t<1440?(g.limit=8,localStorage.setItem(m,JSON.stringify(g)),y().then(e=>v(e)).catch(e=>console.log(e))):(g.limit=9,localStorage.setItem(m,JSON.stringify(g)),y().then(e=>v(e)).catch(e=>console.log(e)))}function dt(){const t=localStorage.getItem(m);if(t){const e=JSON.parse(t);S.elements.searchQuery.value=e.keyword??"",g.keyword=S.elements.searchQuery.value,d.options[d.selectedIndex].value=e.category??"",g.category=d.options[d.selectedIndex].value}}function lt(){const t=JSON.parse(localStorage.getItem("search-params"));d.options[d.selectedIndex].value==="All"?(t.category="",t.page=1):t.category=d.options[d.selectedIndex].value,localStorage.setItem(m,JSON.stringify(t)),y().then(e=>v(e)).catch(e=>console.log(e))}function ut(t){t.preventDefault();const e=JSON.parse(localStorage.getItem("search-params"));e.keyword=S.elements.searchQuery.value,localStorage.setItem(m,JSON.stringify(e)),y().then(c=>v(c)).catch(c=>console.log(c))}function pt(){const t=localStorage.getItem(m),e=JSON.parse(t);for(let c=0;c<d.options.length;c++)if(d.options[c].value===e.category){d.options[c].selected=!0;break}}function gt(){const t=JSON.parse(localStorage.getItem("search-params"));switch(w.options[w.selectedIndex].value){case"a_z":t.byABC=!0,delete t.byPrice,delete t.byPopularity;break;case"z_a":t.byABC=!1,delete t.byPrice,delete t.byPopularity;break;case"cheap":t.byPrice=!0,delete t.byABC,delete t.byPopularity;break;case"expensive":t.byPrice=!1,delete t.byABC,delete t.byPopularity;break;case"popular":t.byPopularity=!0,delete t.byPrice,delete t.byABC;break;case"not_popular":t.byPopularity=!1,delete t.byPrice,delete t.byABC;break;case"All":t.page=1,delete t.byPrice,delete t.byPopularity,delete t.byABC;break}localStorage.setItem(m,JSON.stringify(t)),y().then(e=>v(e)).catch(e=>console.log(e))}document.addEventListener("DOMContentLoaded",async function(){const t=document.querySelector(".container-product-cards-prod"),e=document.querySelector(".modal"),c=document.querySelector(".modal-close-btn"),l=document.querySelector(".container-aside-cards"),i=document.querySelector(".container-discount-product-cards"),r=document.querySelector(".addtocart-btn"),p=document.querySelector(".modal-discount-svg");async function f(s){try{const o=await b(s),a=JSON.parse(localStorage.getItem("cart-products-list"))||[],n=a.findIndex(k=>k._id===o._id);n!==-1?(a.splice(n,1),localStorage.setItem("cart-products-list",JSON.stringify(a)),h(),x()):(a.push(o),localStorage.setItem("cart-products-list",JSON.stringify(a)),h(),x())}catch(o){console.error("Error managing cart:",o)}}function h(){r.disabled=!1;const s=r.id;(JSON.parse(localStorage.getItem("cart-products-list"))||[]).some(n=>n._id===s)?r.innerHTML='Remove from <svg width="18" height="18"><use class="button-icon" href="/img/icons.svg#icon-cart"></use></svg>':r.innerHTML='Add to <svg width="18" height="18"><use class="button-icon" href="/img/icons.svg#icon-cart"></use></svg>'}function P(){e.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function C(){e.classList.add("is-hidden"),document.body.style.overflow="visible"}document.addEventListener("keydown",function(s){s.key==="Escape"&&C()});function A(s){s.target===e&&C()}window.addEventListener("click",A),c.addEventListener("click",C);const b=async s=>{try{return await K(s)}catch(o){return console.error("Error fetching product details:",o),null}};async function $(s){const o=s.target.closest(".product-card-img-prod");if(o){const a=o.closest(".product-card-prod").id;r.setAttribute("id",a),e.setAttribute("id",a);const n=await b(a);n?I(n):console.log("Product ID not found in fetched-products")}}async function O(s){const o=s.target.closest(".aside-card-img");if(o){const a=o.closest(".aside-product-card").id;r.setAttribute("id",a),e.setAttribute("id",a);const n=await b(a);n?I(n):console.log("Product ID not found in fetched-products")}}async function N(s){const o=s.target.closest(".discount-product-card-img");if(o){const a=o.closest(".discount-product-card").id;r.setAttribute("id",a),e.setAttribute("id",a);const n=await b(a);n?I(n):console.log("Product ID not found in fetched-products")}}function I(s){const{name:o,price:a,desc:n,img:k,category:D,size:E,popularity:J,is10PercentOff:M}=s;P(),h(),s.is10PercentOff===!0?p.style.display="block":p.style.display="none",console.log(M);const j=document.querySelector(".modal-title"),z=document.querySelector(".price"),T=document.querySelector(".modal-text"),_=document.querySelector(".img-content"),H=document.querySelector(".modal-size"),Q=document.querySelector(".modal-category"),F=document.querySelector(".modal-pop");j.textContent=o,z.textContent=`$${a}`,T.textContent=n,_.setAttribute("src",k),H.textContent=E,Q.textContent=D,F.textContent=J}l.addEventListener("click",O),t.addEventListener("click",$),i.addEventListener("click",N),r.addEventListener("click",async s=>{s.preventDefault();const o=r.id;await f(o)})});window.addEventListener("resize",L);dt();L();R().then(t=>{it(t)}).catch(t=>{console.log(t)});st();rt();const mt=JSON.parse(localStorage.getItem("cart-products-list"));mt||localStorage.setItem("cart-products-list",JSON.stringify([]));function x(){const e=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).length,c=document.querySelector(".quantity_products");c.textContent="("+e+")"}x();
//# sourceMappingURL=commonHelpers2.js.map
