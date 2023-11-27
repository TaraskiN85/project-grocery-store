import"./assets/styles-2ecbfd29.js";import{a as h,P as W}from"./assets/vendor-d107dae6.js";const v="https://food-boutique.b.goit.study/api/",y=async()=>{let t=`${v}products/?`;const e=JSON.parse(localStorage.getItem("search-params"));for(const n in e)t+=`&${n}=${e[n].toString()}`;const i=await(await h.get(t)).data;return localStorage.setItem("fetched-products",JSON.stringify(i.results)),i},K=async()=>{const t=await h.get(`${v}products/categories/`),e=await t.data;return localStorage.setItem("product-categories",JSON.stringify(e)),await t.data},G=async()=>await(await h.get(`${v}products/discount/`)).data,X=async(t=5)=>{const e=Number.isInteger(t)?`${v}products/popular/?limit=${t}`:`${v}products/popular/`;return await(await h.get(e)).data},Y=async t=>await(await h.get(`${v}products/${t}`)).data,Z=async t=>await(await h.post(`${v}subscription/`,{email:`${t}`})).data,B={divProdCards:document.querySelector(".js-product-cards")};function f(t){B.divProdCards.innerHTML="",B.divProdCards.insertAdjacentHTML("afterbegin",tt(t))}function tt(t){return t.results.map(({_id:e,name:o,img:i,category:n,price:r,size:p,popularity:S})=>`<div class="product-card-prod" id="${e}">
                  <div class="product-card-img-prod">
                      <img class="card-img-prod"
                          src="${i}"
                          alt="${o}">
                  </div>
                  <h3 class="produc-card-name-prod">${o}</h3>
                  <div class="product-card-description-prod">
                      <div class="card-description-prod">
                          <p>Category:</p>
                          <p class="card-description-value-prod">${n}</p>
                      </div>
                      <div class="card-description-prod">
                          <p>Size:</p>
                          <p class="card-description-value-prod">${p}</p>
                      </div>
                      <div class="card-description-prod">
                          <p>Popularity:</p>
                          <p class="card-description-value-prod">${S}</p>
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
              </div>`).join("")}const u=document.getElementById("pagination"),et=600,ot=9,ct=new W(u,{totalItems:et,itemsPerPage:ot,visiblePages:3,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',firstPage:'<a href="#" class="tui-page-btn tui-first-child"><<</a>',lastPage:'<a href="#" class="tui-page-btn tui-last-child">>></a>',prevPage:'<a href="#" class="tui-page-btn tui-prev"><</a>',nextPage:'<a href="#" class="tui-page-btn tui-next">></a>'}}),st=u.querySelector(".tui-prev"),at=u.querySelector(".tui-next"),rt=u.querySelector(".tui-first"),nt=u.querySelector(".tui-last");st.textContent="‹";at.textContent="›";rt.textContent="«";nt.textContent="»";ct.on("afterMove",function(t){const e=t.page;async function o(i){try{const n=JSON.parse(localStorage.getItem("search-params"));n.page=i,localStorage.setItem("search-params",JSON.stringify(n));const r=await y(n);f(r);const p=u.querySelector(".tui-prev"),S=u.querySelector(".tui-next"),b=u.querySelector(".tui-first"),C=u.querySelector(".tui-last");p.textContent="‹",S.textContent="›",b.textContent="«",C.textContent="»"}catch(n){console.error(n)}}o(e)});const O={popularProductCards:document.querySelector(".js-popular-product-cards"),discountProductCards:document.querySelector(".js-discount-product-cards")};async function it(){const t=await X();O.popularProductCards.insertAdjacentHTML("beforeend",dt(t))}function dt(t){return t.map(({_id:e,name:o,img:i,category:n,size:r,popularity:p})=>`<div class="container-for-popular-items">
          <div class="aside-product-card" id="${e}">
                  <div class="aside-card-img">
                      <img class="aside-img"
                          src="${i}"
                          alt="${o}">
                  </div>
                 <div class="container-for-name-descr">
                  <div class="card-product-name-container">
                  <h3 class="aside-card-name">${o}</h3>
                     </div>
                  <div class="products-card-description">
                      <div class="aside-card-description">
                          <p class="descr-p">Category:</p>
                          <p class="card-descr-value">${n}</p>
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
              </div>`).join("")}async function lt(){const t=await G();O.discountProductCards.insertAdjacentHTML("beforeend",ut(t))}function ut(t){return t.slice(0,2).map(({_id:o,name:i,img:n,price:r})=>`<div class="container-for-discount-items">
          <div class="discount-product-card" id="${o}">
                  <div class="discount-product-card-img">
                      <img class="discount-card-img"
                          src="${n}"
                          alt="${i}">
                          <span class="discount-svg">
                          <svg width="60" height="60" >
                              <use  href="../img/icons.svg#icon-discount"></use>
                          </svg>
                          </span>
                  </div>
                  <div class="product-card-prices-btn">
                  <h3 class="discount-product-card-name">${i}</h3>
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
              </div>`).join("")}const $=document.querySelector(".footer-form");$.addEventListener("submit",pt);async function pt(t){t.preventDefault();const e=$.querySelector("#footer-email").value;try{if(!e)throw new Error("Email is required!");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))throw new Error("Invalid email format!");const i=await Z(e);console.log(i),$.querySelector("#footer-email").value=""}catch(o){console.error(o)}}const l=document.querySelector(".js-category"),q=document.querySelector(".js-sorting"),I=document.querySelector(".js-search-input"),m="search-params",g={keyword:"",category:"",page:1,limit:9};l.addEventListener("input",yt);q.addEventListener("input",ht);I.addEventListener("submit",ft);function gt(t){const e=t.map(o=>`<option value="${o}">${o}</option>`).join("");l.insertAdjacentHTML("afterbegin",e),vt()}function A(){const t=window.innerWidth;t<768?(g.limit=6,localStorage.setItem(m,JSON.stringify(g)),y().then(e=>f(e)).catch(e=>console.log(e))):t>=768&&t<1440?(g.limit=8,localStorage.setItem(m,JSON.stringify(g)),y().then(e=>f(e)).catch(e=>console.log(e))):(g.limit=9,localStorage.setItem(m,JSON.stringify(g)),y().then(e=>f(e)).catch(e=>console.log(e)))}function mt(){const t=localStorage.getItem(m);if(t){const e=JSON.parse(t);I.elements.searchQuery.value=e.keyword??"",g.keyword=I.elements.searchQuery.value,l.options[l.selectedIndex].value=e.category??"",g.category=l.options[l.selectedIndex].value}}function yt(){const t=JSON.parse(localStorage.getItem("search-params"));l.options[l.selectedIndex].value==="All"?(t.category="",t.page=1):t.category=l.options[l.selectedIndex].value,localStorage.setItem(m,JSON.stringify(t)),y().then(e=>f(e)).catch(e=>console.log(e))}function ft(t){t.preventDefault();const e=JSON.parse(localStorage.getItem("search-params"));e.keyword=I.elements.searchQuery.value,localStorage.setItem(m,JSON.stringify(e)),y().then(o=>f(o)).catch(o=>console.log(o))}function vt(){const t=localStorage.getItem(m),e=JSON.parse(t);for(let o=0;o<l.options.length;o++)if(l.options[o].value===e.category){l.options[o].selected=!0;break}}function ht(){const t=JSON.parse(localStorage.getItem("search-params"));switch(q.options[q.selectedIndex].value){case"a_z":t.byABC=!0,delete t.byPrice,delete t.byPopularity;break;case"z_a":t.byABC=!1,delete t.byPrice,delete t.byPopularity;break;case"cheap":t.byPrice=!0,delete t.byABC,delete t.byPopularity;break;case"expensive":t.byPrice=!1,delete t.byABC,delete t.byPopularity;break;case"popular":t.byPopularity=!0,delete t.byPrice,delete t.byABC;break;case"not_popular":t.byPopularity=!1,delete t.byPrice,delete t.byABC;break;case"All":t.page=1,delete t.byPrice,delete t.byPopularity,delete t.byABC;break}localStorage.setItem(m,JSON.stringify(t)),y().then(e=>f(e)).catch(e=>console.log(e))}document.addEventListener("DOMContentLoaded",async function(){const t=document.querySelector(".container-product-cards-prod"),e=document.querySelector(".modal"),o=document.querySelector(".modal-close-btn"),i=document.querySelector(".container-aside-cards"),n=document.querySelector(".container-discount-product-cards"),r=document.querySelector(".addtocart-btn"),p=document.querySelector(".modal-discount-svg");async function S(s){try{const c=await P(s),a=JSON.parse(localStorage.getItem("cart-products-list"))||[],d=a.findIndex(L=>L._id===c._id);d!==-1?(a.splice(d,1),localStorage.setItem("cart-products-list",JSON.stringify(a)),b(),x()):(a.push(c),localStorage.setItem("cart-products-list",JSON.stringify(a)),b(),x())}catch(c){console.error("Error managing cart:",c)}}function b(){r.disabled=!1;const s=r.id;(JSON.parse(localStorage.getItem("cart-products-list"))||[]).some(d=>d._id===s)?r.innerHTML='Remove from <svg width="18" height="18"><use class="button-icon" href="/img/icons.svg#icon-cart"></use></svg>':r.innerHTML='Add to <svg width="18" height="18"><use class="button-icon" href="/img/icons.svg#icon-cart"></use></svg>'}function C(){e.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function w(){e.classList.add("is-hidden"),document.body.style.overflow="visible"}document.addEventListener("keydown",function(s){s.key==="Escape"&&w()});function N(s){s.target===e&&w()}window.addEventListener("click",N),o.addEventListener("click",w);const P=async s=>{try{return await Y(s)}catch(c){return console.error("Error fetching product details:",c),null}};async function E(s){const c=s.target.closest(".product-card-img-prod");if(c){const a=c.closest(".product-card-prod").id;r.setAttribute("id",a),e.setAttribute("id",a);const d=await P(a);d?k(d):console.log("Product ID not found in fetched-products")}}async function J(s){const c=s.target.closest(".aside-card-img");if(c){const a=c.closest(".aside-product-card").id;r.setAttribute("id",a),e.setAttribute("id",a);const d=await P(a);d?k(d):console.log("Product ID not found in fetched-products")}}async function D(s){const c=s.target.closest(".discount-product-card-img");if(c){const a=c.closest(".discount-product-card").id;r.setAttribute("id",a),e.setAttribute("id",a);const d=await P(a);d?k(d):console.log("Product ID not found in fetched-products")}}function k(s){const{name:c,price:a,desc:d,img:L,category:M,size:j,popularity:_,is10PercentOff:z}=s;C(),b(),s.is10PercentOff===!0?p.style.display="block":p.style.display="none",console.log(z);const T=document.querySelector(".modal-title"),H=document.querySelector(".price"),R=document.querySelector(".modal-text"),U=document.querySelector(".img-content"),F=document.querySelector(".modal-size"),Q=document.querySelector(".modal-category"),V=document.querySelector(".modal-pop");T.textContent=c,H.textContent=`$${a}`,R.textContent=d,U.setAttribute("src",L),F.textContent=j,Q.textContent=M,V.textContent=_}i.addEventListener("click",J),t.addEventListener("click",E),n.addEventListener("click",D),r.addEventListener("click",async s=>{s.preventDefault();const c=r.id;await S(c)})});window.addEventListener("resize",A);mt();A();K().then(t=>{gt(t)}).catch(t=>{console.log(t)});it();lt();const St=JSON.parse(localStorage.getItem("cart-products-list"));St||localStorage.setItem("cart-products-list",JSON.stringify([]));function x(){const e=(JSON.parse(localStorage.getItem("cart-products-list"))||[]).length,o=document.querySelector(".quantity_products");o.textContent="("+e+")"}x();
//# sourceMappingURL=commonHelpers2.js.map
