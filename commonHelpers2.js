import"./assets/styles-1fd825b7.js";import{a as v,P as V}from"./assets/vendor-d107dae6.js";const f="https://food-boutique.b.goit.study/api/",y=async t=>{let e=`${f}products/?`;for(const s in t)e+=`&${s}=${t[s].toString()}`;const a=await(await v.get(e)).data;return localStorage.setItem("fetched-products",JSON.stringify(a.results)),a},W=async()=>{const t=await v.get(`${f}products/categories/`),e=await t.data;return localStorage.setItem("product-categories",JSON.stringify(e)),await t.data},K=async()=>await(await v.get(`${f}products/discount/`)).data,G=async(t=5)=>{const e=Number.isInteger(t)?`${f}products/popular/?limit=${t}`:`${f}products/popular/`;return await(await v.get(e)).data},X=async t=>await(await v.get(`${f}products/${t}`)).data,Y=async t=>await(await v.post(`${f}subscription/`,{email:`${t}`})).data,k={divProdCards:document.querySelector(".js-product-cards")};function h(t){k.divProdCards.innerHTML="",k.divProdCards.insertAdjacentHTML("afterbegin",Z(t))}function Z(t){return t.results.map(({_id:e,name:o,img:a,category:s,price:u,size:p,popularity:g})=>`<div class="product-card-prod" id="${e}">
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
                          <p class="card-description-value-prod">${p}</p>
                      </div>
                      <div class="card-description-prod">
                          <p>Popularity:</p>
                          <p class="card-description-value-prod">${g}</p>
                      </div>
                  </div>
                  <div class="product-card-price-btn-prod">
                      <p class="product-card-price-prod">${u}</p>
                      <button type="button" class="product-card-btn-prod">
                          <svg width="18" height="18">
                              <use class="button-icon-prod" href="../img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
              </div>`).join("")}const l=document.getElementById("pagination"),tt=600,et=9,ot=new V(l,{totalItems:tt,itemsPerPage:et,visiblePages:3,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',firstPage:'<a href="#" class="tui-page-btn tui-first-child"><<</a>',lastPage:'<a href="#" class="tui-page-btn tui-last-child">>></a>',prevPage:'<a href="#" class="tui-page-btn tui-prev"><</a>',nextPage:'<a href="#" class="tui-page-btn tui-next">></a>'}}),ct=l.querySelector(".tui-prev"),st=l.querySelector(".tui-next"),at=l.querySelector(".tui-first"),rt=l.querySelector(".tui-last");ct.textContent="‹";st.textContent="›";at.textContent="«";rt.textContent="»";ot.on("afterMove",function(t){const e=t.page;async function o(a){try{const s=JSON.parse(localStorage.getItem("search-params"));s.page=a,localStorage.setItem("search-params",JSON.stringify(s));const u=await y(s);h(u);const p=l.querySelector(".tui-prev"),g=l.querySelector(".tui-next"),P=l.querySelector(".tui-first"),w=l.querySelector(".tui-last");p.textContent="‹",g.textContent="›",P.textContent="«",w.textContent="»"}catch(s){console.error(s)}}o(e)});const x={popularProductCards:document.querySelector(".js-popular-product-cards"),discountProductCards:document.querySelector(".js-discount-product-cards")};async function nt(){const t=await G();x.popularProductCards.insertAdjacentHTML("beforeend",it(t))}function it(t){return t.map(({_id:e,name:o,img:a,category:s,size:u,popularity:p})=>`<div class="container-for-popular-items">
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
                          <p class="card-descr-value">${u}</p>
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
              </div>`).join("")}async function dt(){const t=await K();x.discountProductCards.insertAdjacentHTML("beforeend",ut(t))}function ut(t){return t.slice(0,2).map(({_id:o,name:a,img:s,price:u})=>`<div class="container-for-discount-items">
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
                      <p class="product-card-price">${u}</p>
                      <button type="button" class="discount-product-card-btn">
                          <svg width="18" height="18">
                              <use class="discount-button-icon" href="../img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
                  </div>
              </div>
              </div>`).join("")}const I=document.querySelector(".footer-form");I.addEventListener("submit",lt);async function lt(t){t.preventDefault();const e=I.querySelector("#footer-email").value;try{if(!e)throw new Error("Email is required!");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))throw new Error("Invalid email format!");const a=await Y(e);console.log(a),I.querySelector("#footer-email").value=""}catch(o){console.error(o)}}const m=document.querySelector(".js-category"),S=document.querySelector(".js-search-input"),b="params-for-fetch",i={keyword:"",category:"",page:1,limit:9};m.addEventListener("input",mt);S.addEventListener("submit",ft);function pt(t){const e=t.map(o=>`<option value="${o}">${o}</option>`).join("");m.insertAdjacentHTML("afterbegin",e)}function L(){const t=window.innerWidth;t<768?(i.limit=6,y(i).then(e=>h(e)).catch(e=>console.log(e))):t>=768&&t<1440?(i.limit=8,y(i).then(e=>h(e)).catch(e=>console.log(e))):(i.limit=9,y(i).then(e=>h(e)).catch(e=>console.log(e)))}function gt(){const t=localStorage.getItem(b);if(t){const e=JSON.parse(t);S.elements.searchQuery.value=e.keyword??"",i.keyword=S.elements.searchQuery.value,m.options[m.selectedIndex].value=e.category??"",i.category=m.options[m.selectedIndex].value}}function mt(){i.category=m.options[m.selectedIndex].value,localStorage.setItem(b,JSON.stringify(i)),B()}function ft(t){t.preventDefault(),i.keyword=S.elements.searchQuery.value,localStorage.setItem(b,JSON.stringify(i)),B()}function B(){const t=localStorage.getItem(b),e=JSON.parse(t);y(e).then(o=>h(o)).catch(o=>console.log(o))}document.addEventListener("DOMContentLoaded",async function(){const t=document.querySelector(".container-product-cards-prod"),e=document.querySelector(".modal"),o=document.querySelector(".modal-close-btn"),a=document.querySelector(".container-aside-cards"),s=document.querySelector(".container-discount-product-cards"),u=document.querySelector(".addtocart-btn"),p=document.querySelector(".modal-discount-svg");let g;function P(r){r.preventDefault();const c=JSON.parse(localStorage.getItem("cart-products-list"));if(c.some(n=>n._id===g._id)){alert("Product is already in cart!");return}else g.quantity=1,c.push(g),localStorage.setItem("cart-products-list",JSON.stringify(c))}function w(){e.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function q(){e.classList.add("is-hidden"),document.body.style.overflow="visible"}function E(r){r.target===e&&q()}window.addEventListener("click",E),o.addEventListener("click",q);const $=async r=>{try{const c=await v.get(`https://food-boutique.b.goit.study/api/products/${r}`);return g=c.data,c.data}catch(c){return console.error("Error fetching product details:",c),null}};async function D(r){const c=r.target.closest(".product-card-prod");if(c){const n=c.id;e.setAttribute("id",n);const d=await $(n);d?C(d):console.log("Product ID not found in fetched-products")}else console.log("Product ID not found in fetched-products")}async function M(r){const c=r.target.closest(".aside-product-card");if(c){const n=c.id;e.setAttribute("id",n);const d=await $(n);d?C(d):console.log("Product ID not found in fetched-products")}else console.log("Product ID not found in fetched-products")}async function O(r){const c=r.target.closest(".discount-product-card");if(c){const n=c.id;e.setAttribute("id",n);const d=await $(n);d?C(d):console.log("Product ID not found in fetched-products")}else console.log("Product ID not found in fetched-products")}function C(r){const{name:c,price:n,desc:d,img:N,category:j,size:A,popularity:J,is10PercentOff:z}=r;w(),r.is10PercentOff===!0?p.style.display="block":p.style.display="none",console.log(z);const T=document.querySelector(".modal-title"),_=document.querySelector(".price"),H=document.querySelector(".modal-text"),R=document.querySelector(".img-content"),U=document.querySelector(".modal-size"),F=document.querySelector(".modal-category"),Q=document.querySelector(".modal-pop");T.textContent=c,_.textContent=`$${n}`,H.textContent=d,R.setAttribute("src",N),U.textContent=A,F.textContent=j,Q.textContent=J}a.addEventListener("click",M),t.addEventListener("click",D),s.addEventListener("click",O),u.addEventListener("click",P)});window.addEventListener("resize",L);gt();L();W().then(t=>{pt(t)}).catch(t=>{console.log(t)});nt();dt();const vt=JSON.parse(localStorage.getItem("cart-products-list"));vt||localStorage.setItem("cart-products-list",JSON.stringify([]));const yt="640c2dd963a319ea671e383b",ht=async()=>{const t=await X(yt);console.log(t)};ht();
//# sourceMappingURL=commonHelpers2.js.map
