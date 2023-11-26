import"./assets/styles-c5b7ee65.js";import{a as f,P as F}from"./assets/vendor-d107dae6.js";const m="https://food-boutique.b.goit.study/api/",y=async t=>{let e=`${m}products/?`;for(const s in t)e+=`&${s}=${t[s].toString()}`;const a=await(await f.get(e)).data;return localStorage.setItem("fetched-products",JSON.stringify(a.results)),a},Q=async()=>{const t=await f.get(`${m}products/categories/`),e=await t.data;return localStorage.setItem("product-categories",JSON.stringify(e)),await t.data},W=async()=>await(await f.get(`${m}products/discount/`)).data,K=async(t=5)=>{const e=Number.isInteger(t)?`${m}products/popular/?limit=${t}`:`${m}products/popular/`;return await(await f.get(e)).data},G=async t=>await(await f.get(`${m}products/${t}`)).data,V=async t=>await(await f.post(`${m}subscription/`,{email:`${t}`})).data,q={divProdCards:document.querySelector(".js-product-cards")};function h(t){q.divProdCards.innerHTML="",q.divProdCards.insertAdjacentHTML("afterbegin",X(t))}function X(t){return t.results.map(({_id:e,name:o,img:a,category:s,price:l,size:d,popularity:v})=>`<div class="product-card-prod" id="${e}">
                  <div class="product-card-img-prod">
                      <img class="card-img-prod"
                          src="${a}"
                          alt="${o}">
                  </div>
                  <h3 class="produc-card-name-prod">${o}</h3>
                  <div class="product-card-description-prod">
                      <div class="card-description-prod">
                          <p>Category:</p>
                          <p class="card-description-value-prod">${s}</p>
                      </div>
                      <div class="card-description-prod">
                          <p>Size:</p>
                          <p class="card-description-value-prod">${d}</p>
                      </div>
                      <div class="card-description-prod">
                          <p>Popularity:</p>
                          <p class="card-description-value-prod">${v}</p>
                      </div>
                  </div>
                  <div class="product-card-price-btn-prod">
                      <p class="product-card-price-prod">${l}</p>
                      <button type="button" class="product-card-btn-prod">
                          <svg width="18" height="18">
                              <use class="button-icon-prod" href="../img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
              </div>`).join("")}const p=document.getElementById("pagination"),Y=600,Z=9,tt=new F(p,{totalItems:Y,itemsPerPage:Z,visiblePages:3,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',firstPage:'<a href="#" class="tui-page-btn tui-first-child"><<</a>',lastPage:'<a href="#" class="tui-page-btn tui-last-child">>></a>',prevPage:'<a href="#" class="tui-page-btn tui-prev"><</a>',nextPage:'<a href="#" class="tui-page-btn tui-next">></a>'}}),et=p.querySelector(".tui-prev"),ot=p.querySelector(".tui-next"),ct=p.querySelector(".tui-first"),st=p.querySelector(".tui-last");et.textContent="‹";ot.textContent="›";ct.textContent="«";st.textContent="»";tt.on("afterMove",function(t){const e=t.page;async function o(a){try{const s=JSON.parse(localStorage.getItem("search-params"));s.page=a,localStorage.setItem("search-params",JSON.stringify(s));const l=await y(s);h(l);const d=p.querySelector(".tui-prev"),v=p.querySelector(".tui-next"),w=p.querySelector(".tui-first"),S=p.querySelector(".tui-last");d.textContent="‹",v.textContent="›",w.textContent="«",S.textContent="»"}catch(s){console.error(s)}}o(e)});const L={popularProductCards:document.querySelector(".js-popular-product-cards"),discountProductCards:document.querySelector(".js-discount-product-cards")};async function at(){const t=await K();L.popularProductCards.insertAdjacentHTML("beforeend",rt(t))}function rt(t){return t.map(({_id:e,name:o,img:a,category:s,size:l,popularity:d})=>`<div class="container-for-popular-items">
          <div class="aside-product-card" id="${e}">
                  <div class="aside-card-img">
                      <img class="aside-img"
                          src="${a}"
                          alt="${o}">
                  </div>
                 <div class="container-for-name-descr">
                  <div class="card-product-name-container">
                  <h3 class="aside-card-name">${o}</h3>
                     </div>
                  <div class="products-card-description">
                      <div class="aside-card-description">
                          <p class="descr-p">Category:</p>
                          <p class="card-descr-value">${s}</p>
                      </div>
                      <div class="size-popularity-container">
                      <div class="aside-card-description">
                          <p class="descr-p">Size:</p>
                          <p class="card-descr-value">${l}</p>
                      </div>
                      <div class="aside-card-description">
                          <p class="descr-p">Popularity:</p>
                          <p class="card-descr-value">${d}</p>
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
              </div>`).join("")}async function nt(){const t=await W();L.discountProductCards.insertAdjacentHTML("beforeend",it(t))}function it(t){return t.slice(0,2).map(({_id:o,name:a,img:s,price:l})=>`<div class="container-for-discount-items">
          <div class="discount-product-card" id="${o}">
                  <div class="discount-product-card-img">
                      <img class="discount-card-img"
                          src="${s}"
                          alt="${a}">
                          <span class="discount-svg">
                          <svg width="60" height="60" >
                              <use  href="../img/icons.svg#icon-discount"></use>
                          </svg>
                          </span>
                  </div>
                  <div class="product-card-prices-btn">
                  <h3 class="discount-product-card-name">${a}</h3>
                 <div class="discount-price-icon-container">
                      <p class="product-card-price">${l}</p>
                      <button type="button" class="discount-product-card-btn">
                          <svg width="18" height="18">
                              <use class="discount-button-icon" href="../img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
                  </div>
              </div>
              </div>`).join("")}const k=document.querySelector(".footer-form");k.addEventListener("submit",dt);async function dt(t){t.preventDefault();const e=k.querySelector("#footer-email").value;try{if(!e)throw new Error("Email is required!");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))throw new Error("Invalid email format!");const a=await V(e);console.log(a)}catch(o){console.error(o)}}const g=document.querySelector(".js-category"),b=document.querySelector(".js-search-input"),P="params-for-fetch",i={keyword:"",category:"",page:1,limit:9};g.addEventListener("input",pt);b.addEventListener("submit",gt);function ut(t){const e=t.map(o=>`<option value="${o}">${o}</option>`).join("");g.insertAdjacentHTML("afterbegin",e)}function x(){const t=window.innerWidth;t<768?(i.limit=6,y(i).then(e=>h(e)).catch(e=>console.log(e))):t>=768&&t<1440?(i.limit=8,y(i).then(e=>h(e)).catch(e=>console.log(e))):(i.limit=9,y(i).then(e=>h(e)).catch(e=>console.log(e)))}function lt(){const t=localStorage.getItem(P);if(t){const e=JSON.parse(t);b.elements.searchQuery.value=e.keyword??"",i.keyword=b.elements.searchQuery.value,g.options[g.selectedIndex].value=e.category??"",i.category=g.options[g.selectedIndex].value}}function pt(){i.category=g.options[g.selectedIndex].value,localStorage.setItem(P,JSON.stringify(i)),B()}function gt(t){t.preventDefault(),i.keyword=b.elements.searchQuery.value,localStorage.setItem(P,JSON.stringify(i)),B()}function B(){const t=localStorage.getItem(P),e=JSON.parse(t);y(e).then(o=>h(o)).catch(o=>console.log(o))}document.addEventListener("DOMContentLoaded",async function(){const t=document.querySelector(".container-product-cards-prod"),e=document.querySelector(".modal"),o=document.querySelector(".modal-close-btn"),a=document.querySelector(".container-aside-cards"),s=document.querySelector(".container-discount-product-cards"),l=document.querySelector(".addtocart-btn");let d;function v(r){r.preventDefault();const c=JSON.parse(localStorage.getItem("cart-products-list"));if(c.some(n=>n._id===d._id)){alert("Product is already in cart!");return}else d.quantity=1,c.push(d),localStorage.setItem("cart-products-list",JSON.stringify(c))}function w(){e.classList.remove("is-hidden")}function S(){e.classList.add("is-hidden")}function E(r){r.target===e&&S()}window.addEventListener("click",E),o.addEventListener("click",S);const $=async r=>{try{const c=await f.get(`https://food-boutique.b.goit.study/api/products/${r}`);return d=c.data,c.data}catch(c){return console.error("Error fetching product details:",c),null}};async function D(r){const c=r.target.closest(".product-card-prod");if(c){const n=c.id;e.setAttribute("id",n);const u=await $(n);document.querySelector(".modal-close-btn").addEventListener("click",function(){e.style.display="none"}),u?C(u):console.log("Product ID not found in fetched-products")}}async function M(r){const c=r.target.closest(".aside-product-card");if(c){const n=c.id;e.setAttribute("id",n);const u=await $(n);u?C(u):console.log("Product ID not found in fetched-products")}else console.log("Product ID not found in fetched-products")}async function N(r){const c=r.target.closest(".discount-product-card");if(c){const n=c.id;e.setAttribute("id",n);const u=await $(n);u?C(u):console.log("Product ID not found in fetched-products")}else console.log("Product ID not found in fetched-products")}function C(r){const{name:c,price:n,desc:u,img:I,category:O,size:j,popularity:A}=r;w();const J=document.querySelector(".modal-title"),z=document.querySelector(".price"),T=document.querySelector(".modal-text"),_=document.querySelector(".img-content"),H=document.querySelector(".modal-size"),R=document.querySelector(".modal-category"),U=document.querySelector(".modal-pop");J.textContent=c,z.textContent=`$${n}`,T.textContent=u,_.setAttribute("src",I),H.textContent=j,R.textContent=O,U.textContent=A}a.addEventListener("click",M),t.addEventListener("click",D),s.addEventListener("click",N),l.addEventListener("click",v)});window.addEventListener("resize",x);lt();x();Q().then(t=>{ut(t)}).catch(t=>{console.log(t)});at();nt();const mt=JSON.parse(localStorage.getItem("cart-products-list"));mt||localStorage.setItem("cart-products-list",JSON.stringify([]));const ft="640c2dd963a319ea671e383b",vt=async()=>{const t=await G(ft);console.log(t)};vt();
//# sourceMappingURL=commonHelpers2.js.map
