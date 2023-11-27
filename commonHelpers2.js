import"./assets/styles-2ecbfd29.js";import{a as b,P as W}from"./assets/vendor-d107dae6.js";const h="https://food-boutique.b.goit.study/api/",f=async()=>{let t=`${h}products/?`;const e=JSON.parse(localStorage.getItem("search-params"));for(const r in e)t+=`&${r}=${e[r].toString()}`;const n=await(await b.get(t)).data;return localStorage.setItem("fetched-products",JSON.stringify(n.results)),n},K=async()=>{const t=await b.get(`${h}products/categories/`),e=await t.data;return localStorage.setItem("product-categories",JSON.stringify(e)),await t.data},G=async()=>await(await b.get(`${h}products/discount/`)).data,X=async(t=5)=>{const e=Number.isInteger(t)?`${h}products/popular/?limit=${t}`:`${h}products/popular/`;return await(await b.get(e)).data},Y=async t=>await(await b.get(`${h}products/${t}`)).data,Z=async t=>await(await b.post(`${h}subscription/`,{email:`${t}`})).data,L={divProdCards:document.querySelector(".js-product-cards")};function v(t){L.divProdCards.innerHTML="",L.divProdCards.insertAdjacentHTML("afterbegin",tt(t))}function tt(t){return t.results.map(({_id:e,name:o,img:n,category:r,price:i,size:g,popularity:u})=>`<div class="product-card-prod" id="${e}">
                  <div class="product-card-img-prod">
                      <img class="card-img-prod"
                          src="${n}"
                          alt="${o}">
                  </div>
                  <h3 class="produc-card-name-prod">${o}</h3>
                  <div class="product-card-description-prod">
                      <div class="card-description-prod">
                          <p>Category:</p>
                          <p class="card-description-value-prod">${r}</p>
                      </div>
                      <div class="card-description-prod">
                          <p>Size:</p>
                          <p class="card-description-value-prod">${g}</p>
                      </div>
                      <div class="card-description-prod">
                          <p>Popularity:</p>
                          <p class="card-description-value-prod">${u}</p>
                      </div>
                  </div>
                  <div class="product-card-price-btn-prod">
                      <p class="product-card-price-prod">${i}</p>
                      <button type="button" class="product-card-btn-prod">
                          <svg width="18" height="18">
                              <use class="button-icon-prod" href="../img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
              </div>`).join("")}const p=document.getElementById("pagination"),et=600,ot=9,st=new W(p,{totalItems:et,itemsPerPage:ot,visiblePages:3,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',firstPage:'<a href="#" class="tui-page-btn tui-first-child"><<</a>',lastPage:'<a href="#" class="tui-page-btn tui-last-child">>></a>',prevPage:'<a href="#" class="tui-page-btn tui-prev"><</a>',nextPage:'<a href="#" class="tui-page-btn tui-next">></a>'}}),ct=p.querySelector(".tui-prev"),at=p.querySelector(".tui-next"),rt=p.querySelector(".tui-first"),nt=p.querySelector(".tui-last");ct.textContent="‹";at.textContent="›";rt.textContent="«";nt.textContent="»";st.on("afterMove",function(t){const e=t.page;async function o(n){try{const r=JSON.parse(localStorage.getItem("search-params"));r.page=n,localStorage.setItem("search-params",JSON.stringify(r));const i=await f(r);v(i);const g=p.querySelector(".tui-prev"),u=p.querySelector(".tui-next"),w=p.querySelector(".tui-first"),S=p.querySelector(".tui-last");g.textContent="‹",u.textContent="›",w.textContent="«",S.textContent="»"}catch(r){console.error(r)}}o(e)});const B={popularProductCards:document.querySelector(".js-popular-product-cards"),discountProductCards:document.querySelector(".js-discount-product-cards")};async function it(){const t=await X();B.popularProductCards.insertAdjacentHTML("beforeend",dt(t))}function dt(t){return t.map(({_id:e,name:o,img:n,category:r,size:i,popularity:g})=>`<div class="container-for-popular-items">
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
                          <p class="card-descr-value">${r}</p>
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
                              <use class="popular-button-icon" href="../img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
              </div>
              </div>`).join("")}async function lt(){const t=await G();B.discountProductCards.insertAdjacentHTML("beforeend",ut(t))}function ut(t){return t.slice(0,2).map(({_id:o,name:n,img:r,price:i})=>`<div class="container-for-discount-items">
          <div class="discount-product-card" id="${o}">
                  <div class="discount-product-card-img">
                      <img class="discount-card-img"
                          src="${r}"
                          alt="${n}">
                          <span class="discount-svg">
                          <svg width="60" height="60" >
                              <use  href="../img/icons.svg#icon-discount"></use>
                          </svg>
                          </span>
                  </div>
                  <div class="product-card-prices-btn">
                  <h3 class="discount-product-card-name">${n}</h3>
                 <div class="discount-price-icon-container">
                      <p class="product-card-price">${i}</p>
                      <button type="button" class="discount-product-card-btn">
                          <svg width="18" height="18">
                              <use class="discount-button-icon" href="../img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
                  </div>
              </div>
              </div>`).join("")}const $=document.querySelector(".footer-form");$.addEventListener("submit",pt);async function pt(t){t.preventDefault();const e=$.querySelector("#footer-email").value;try{if(!e)throw new Error("Email is required!");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))throw new Error("Invalid email format!");const n=await Z(e);console.log(n),$.querySelector("#footer-email").value=""}catch(o){console.error(o)}}const d=document.querySelector(".js-category"),q=document.querySelector(".js-sorting"),P=document.querySelector(".js-search-input"),y="search-params",m={keyword:"",category:"",page:1,limit:9};d.addEventListener("input",yt);q.addEventListener("input",ht);P.addEventListener("submit",ft);function gt(t){const e=t.map(o=>`<option value="${o}">${o}</option>`).join("");d.insertAdjacentHTML("afterbegin",e),vt()}function x(){const t=window.innerWidth;t<768?(m.limit=6,localStorage.setItem(y,JSON.stringify(m)),f().then(e=>v(e)).catch(e=>console.log(e))):t>=768&&t<1440?(m.limit=8,localStorage.setItem(y,JSON.stringify(m)),f().then(e=>v(e)).catch(e=>console.log(e))):(m.limit=9,localStorage.setItem(y,JSON.stringify(m)),f().then(e=>v(e)).catch(e=>console.log(e)))}function mt(){const t=localStorage.getItem(y);if(t){const e=JSON.parse(t);P.elements.searchQuery.value=e.keyword??"",m.keyword=P.elements.searchQuery.value,d.options[d.selectedIndex].value=e.category??"",m.category=d.options[d.selectedIndex].value}}function yt(){const t=JSON.parse(localStorage.getItem("search-params"));d.options[d.selectedIndex].value==="All"?(t.category="",t.page=1):t.category=d.options[d.selectedIndex].value,localStorage.setItem(y,JSON.stringify(t)),f().then(e=>v(e)).catch(e=>console.log(e))}function ft(t){t.preventDefault();const e=JSON.parse(localStorage.getItem("search-params"));e.keyword=P.elements.searchQuery.value,localStorage.setItem(y,JSON.stringify(e)),f().then(o=>v(o)).catch(o=>console.log(o))}function vt(){const t=localStorage.getItem(y),e=JSON.parse(t);for(let o=0;o<d.options.length;o++)if(d.options[o].value===e.category){d.options[o].selected=!0;break}}function ht(){const t=JSON.parse(localStorage.getItem("search-params"));switch(q.options[q.selectedIndex].value){case"a_z":t.byABC=!0,delete t.byPrice,delete t.byPopularity;break;case"z_a":t.byABC=!1,delete t.byPrice,delete t.byPopularity;break;case"cheap":t.byPrice=!0,delete t.byABC,delete t.byPopularity;break;case"expensive":t.byPrice=!1,delete t.byABC,delete t.byPopularity;break;case"popular":t.byPopularity=!0,delete t.byPrice,delete t.byABC;break;case"not_popular":t.byPopularity=!1,delete t.byPrice,delete t.byABC;break;case"All":t.page=1,delete t.byPrice,delete t.byPopularity,delete t.byABC;break}localStorage.setItem(y,JSON.stringify(t)),f().then(e=>v(e)).catch(e=>console.log(e))}document.addEventListener("DOMContentLoaded",async function(){const t=document.querySelector(".container-product-cards-prod"),e=document.querySelector(".modal"),o=document.querySelector(".modal-close-btn"),n=document.querySelector(".container-aside-cards"),r=document.querySelector(".container-discount-product-cards"),i=document.querySelector(".addtocart-btn"),g=document.querySelector(".modal-discount-svg");let u;function w(a){a.preventDefault();const s=JSON.parse(localStorage.getItem("cart-products-list"));if(s.some(c=>c._id===u._id)){const c=s.filter(l=>l._id!==u._id);localStorage.setItem("cart-products-list",JSON.stringify(c)),S()}else u.quantity=1,s.push(u),localStorage.setItem("cart-products-list",JSON.stringify(s)),i.innerHTML='Added to <svg width="18" height="18"><use class="button-icon" href="/img/icons.svg#icon-cart"></use></svg>',setInterval(()=>{S()},4e3)}async function S(){const a=JSON.parse(localStorage.getItem("cart-products-list")),s=e.id;a.some(c=>c._id===s)?i.innerHTML='Remove from <svg width="18" height="18"><use class="button-icon" href="/img/icons.svg#icon-cart"></use></svg>':i.innerHTML='Add to <svg width="18" height="18"><use class="button-icon" href="/img/icons.svg#icon-cart"></use></svg>'}function O(){e.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function I(){e.classList.add("is-hidden"),document.body.style.overflow="visible"}document.addEventListener("keydown",function(a){a.key==="Escape"&&I()});function A(a){a.target===e&&I()}window.addEventListener("click",A),o.addEventListener("click",I);const C=async a=>{try{const s=await b.get(`https://food-boutique.b.goit.study/api/products/${a}`);return u=s.data,s.data}catch(s){return console.error("Error fetching product details:",s),null}};async function N(a){const s=a.target.closest(".product-card-prod");if(s){const c=s.id;i.setAttribute("id",c),e.setAttribute("id",c);const l=await C(c);l?k(l):console.log("Product ID not found in fetched-products")}else console.log("Product ID not found in fetched-products")}async function E(a){const s=a.target.closest(".aside-product-card");if(s){const c=s.id;i.setAttribute("id",c),e.setAttribute("id",c);const l=await C(c);l?k(l):console.log("Product ID not found in fetched-products")}else console.log("Product ID not found in fetched-products")}async function D(a){const s=a.target.closest(".discount-product-card");if(s){const c=s.id;i.setAttribute("id",c),e.setAttribute("id",c);const l=await C(c);l?k(l):console.log("Product ID not found in fetched-products")}else console.log("Product ID not found in fetched-products")}function k(a){const{name:s,price:c,desc:l,img:J,category:M,size:j,popularity:_,is10PercentOff:T}=a;S(),O(),a.is10PercentOff===!0?g.style.display="block":g.style.display="none",console.log(T);const z=document.querySelector(".modal-title"),H=document.querySelector(".price"),R=document.querySelector(".modal-text"),U=document.querySelector(".img-content"),F=document.querySelector(".modal-size"),Q=document.querySelector(".modal-category"),V=document.querySelector(".modal-pop");z.textContent=s,H.textContent=`$${c}`,R.textContent=l,U.setAttribute("src",J),F.textContent=j,Q.textContent=M,V.textContent=_}n.addEventListener("click",E),t.addEventListener("click",N),r.addEventListener("click",D),i.addEventListener("click",w)});window.addEventListener("resize",x);mt();x();K().then(t=>{gt(t)}).catch(t=>{console.log(t)});it();lt();const bt=JSON.parse(localStorage.getItem("cart-products-list"));bt||localStorage.setItem("cart-products-list",JSON.stringify([]));const St="640c2dd963a319ea671e383b",Pt=async()=>{const t=await Y(St);console.log(t)};Pt();
//# sourceMappingURL=commonHelpers2.js.map
