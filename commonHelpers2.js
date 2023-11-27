import"./assets/styles-cc26fc78.js";import{a as v,P as Q}from"./assets/vendor-d107dae6.js";const y="https://food-boutique.b.goit.study/api/",h=async()=>{let t=`${y}products/?`;const e=JSON.parse(localStorage.getItem("search-params"));for(const c in e)t+=`&${c}=${e[c].toString()}`;const a=await(await v.get(t)).data;return localStorage.setItem("fetched-products",JSON.stringify(a.results)),a},V=async()=>{const t=await v.get(`${y}products/categories/`),e=await t.data;return localStorage.setItem("product-categories",JSON.stringify(e)),await t.data},W=async()=>await(await v.get(`${y}products/discount/`)).data,K=async(t=5)=>{const e=Number.isInteger(t)?`${y}products/popular/?limit=${t}`:`${y}products/popular/`;return await(await v.get(e)).data},G=async t=>await(await v.get(`${y}products/${t}`)).data,X=async t=>await(await v.post(`${y}subscription/`,{email:`${t}`})).data,k={divProdCards:document.querySelector(".js-product-cards")};function S(t){k.divProdCards.innerHTML="",k.divProdCards.insertAdjacentHTML("afterbegin",Y(t))}function Y(t){return t.results.map(({_id:e,name:o,img:a,category:c,price:l,size:p,popularity:g})=>`<div class="product-card-prod" id="${e}">
                  <div class="product-card-img-prod">
                      <img class="card-img-prod"
                          src="${a}"
                          alt="${o}">
                  </div>
                  <h3 class="produc-card-name-prod">${o}</h3>
                  <div class="product-card-description-prod">
                      <div class="card-description-prod">
                          <p>Category:</p>
                          <p class="card-description-value-prod">${c}</p>
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
                      <p class="product-card-price-prod">${l}</p>
                      <button type="button" class="product-card-btn-prod">
                          <svg width="18" height="18">
                              <use class="button-icon-prod" href="../img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
              </div>`).join("")}const u=document.getElementById("pagination"),Z=600,tt=9,et=new Q(u,{totalItems:Z,itemsPerPage:tt,visiblePages:3,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',firstPage:'<a href="#" class="tui-page-btn tui-first-child"><<</a>',lastPage:'<a href="#" class="tui-page-btn tui-last-child">>></a>',prevPage:'<a href="#" class="tui-page-btn tui-prev"><</a>',nextPage:'<a href="#" class="tui-page-btn tui-next">></a>'}}),ot=u.querySelector(".tui-prev"),st=u.querySelector(".tui-next"),ct=u.querySelector(".tui-first"),at=u.querySelector(".tui-last");ot.textContent="‹";st.textContent="›";ct.textContent="«";at.textContent="»";et.on("afterMove",function(t){const e=t.page;async function o(a){try{const c=JSON.parse(localStorage.getItem("search-params"));c.page=a,localStorage.setItem("search-params",JSON.stringify(c));const l=await h(c);S(l);const p=u.querySelector(".tui-prev"),g=u.querySelector(".tui-next"),P=u.querySelector(".tui-first"),w=u.querySelector(".tui-last");p.textContent="‹",g.textContent="›",P.textContent="«",w.textContent="»"}catch(c){console.error(c)}}o(e)});const x={popularProductCards:document.querySelector(".js-popular-product-cards"),discountProductCards:document.querySelector(".js-discount-product-cards")};async function rt(){const t=await K();x.popularProductCards.insertAdjacentHTML("beforeend",nt(t))}function nt(t){return t.map(({_id:e,name:o,img:a,category:c,size:l,popularity:p})=>`<div class="container-for-popular-items">
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
                          <p class="card-descr-value">${c}</p>
                      </div>
                      <div class="size-popularity-container">
                      <div class="aside-card-description">
                          <p class="descr-p">Size:</p>
                          <p class="card-descr-value">${l}</p>
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
              </div>`).join("")}async function it(){const t=await W();x.discountProductCards.insertAdjacentHTML("beforeend",dt(t))}function dt(t){return t.slice(0,2).map(({_id:o,name:a,img:c,price:l})=>`<div class="container-for-discount-items">
          <div class="discount-product-card" id="${o}">
                  <div class="discount-product-card-img">
                      <img class="discount-card-img"
                          src="${c}"
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
              </div>`).join("")}const $=document.querySelector(".footer-form");$.addEventListener("submit",lt);async function lt(t){t.preventDefault();const e=$.querySelector("#footer-email").value;try{if(!e)throw new Error("Email is required!");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))throw new Error("Invalid email format!");const a=await X(e);console.log(a),$.querySelector("#footer-email").value=""}catch(o){console.error(o)}}const n=document.querySelector(".js-category"),b=document.querySelector(".js-search-input"),f="search-params",m={keyword:"",category:"",page:1,limit:9};n.addEventListener("input",gt);b.addEventListener("submit",mt);function ut(t){const e=t.map(o=>`<option value="${o}">${o}</option>`).join("");n.insertAdjacentHTML("afterbegin",e),console.log(n.options.length),ft()}function L(){const t=window.innerWidth;t<768?(m.limit=6,localStorage.setItem(f,JSON.stringify(m)),h().then(e=>S(e)).catch(e=>console.log(e))):t>=768&&t<1440?(m.limit=8,localStorage.setItem(f,JSON.stringify(m)),h().then(e=>S(e)).catch(e=>console.log(e))):(m.limit=9,localStorage.setItem(f,JSON.stringify(m)),h().then(e=>S(e)).catch(e=>console.log(e)))}function pt(){const t=localStorage.getItem(f);if(t){const e=JSON.parse(t);b.elements.searchQuery.value=e.keyword??"",m.keyword=b.elements.searchQuery.value,n.options[n.selectedIndex].value=e.category??"",m.category=n.options[n.selectedIndex].value}}function gt(){const t=JSON.parse(localStorage.getItem("search-params"));n.options[n.selectedIndex].value==="All"?(t.category="",t.page=1):t.category=n.options[n.selectedIndex].value,localStorage.setItem(f,JSON.stringify(t)),h().then(e=>S(e)).catch(e=>console.log(e))}function mt(t){t.preventDefault();const e=JSON.parse(localStorage.getItem("search-params"));e.keyword=b.elements.searchQuery.value,localStorage.setItem(f,JSON.stringify(e)),h().then(o=>S(o)).catch(o=>console.log(o))}function ft(){const t=localStorage.getItem(f),e=JSON.parse(t);for(let o=0;o<n.options.length;o++)if(n.options[o].value===e.category){n.options[o].selected=!0;break}}document.addEventListener("DOMContentLoaded",async function(){const t=document.querySelector(".container-product-cards-prod"),e=document.querySelector(".modal"),o=document.querySelector(".modal-close-btn"),a=document.querySelector(".container-aside-cards"),c=document.querySelector(".container-discount-product-cards"),l=document.querySelector(".addtocart-btn"),p=document.querySelector(".modal-discount-svg");let g;function P(r){r.preventDefault();const s=JSON.parse(localStorage.getItem("cart-products-list"));if(s.some(i=>i._id===g._id)){alert("Product is already in cart!");return}else g.quantity=1,s.push(g),localStorage.setItem("cart-products-list",JSON.stringify(s))}function w(){e.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function q(){e.classList.add("is-hidden"),document.body.style.overflow="visible"}function B(r){r.target===e&&q()}window.addEventListener("click",B),o.addEventListener("click",q);const I=async r=>{try{const s=await v.get(`https://food-boutique.b.goit.study/api/products/${r}`);return g=s.data,s.data}catch(s){return console.error("Error fetching product details:",s),null}};async function O(r){const s=r.target.closest(".product-card-prod");if(s){const i=s.id;e.setAttribute("id",i);const d=await I(i);d?C(d):console.log("Product ID not found in fetched-products")}else console.log("Product ID not found in fetched-products")}async function D(r){const s=r.target.closest(".aside-product-card");if(s){const i=s.id;e.setAttribute("id",i);const d=await I(i);d?C(d):console.log("Product ID not found in fetched-products")}else console.log("Product ID not found in fetched-products")}async function E(r){const s=r.target.closest(".discount-product-card");if(s){const i=s.id;e.setAttribute("id",i);const d=await I(i);d?C(d):console.log("Product ID not found in fetched-products")}else console.log("Product ID not found in fetched-products")}function C(r){const{name:s,price:i,desc:d,img:N,category:J,size:M,popularity:j,is10PercentOff:A}=r;w(),r.is10PercentOff===!0?p.style.display="block":p.style.display="none",console.log(A);const z=document.querySelector(".modal-title"),T=document.querySelector(".price"),_=document.querySelector(".modal-text"),H=document.querySelector(".img-content"),R=document.querySelector(".modal-size"),U=document.querySelector(".modal-category"),F=document.querySelector(".modal-pop");z.textContent=s,T.textContent=`$${i}`,_.textContent=d,H.setAttribute("src",N),R.textContent=M,U.textContent=J,F.textContent=j}a.addEventListener("click",D),t.addEventListener("click",O),c.addEventListener("click",E),l.addEventListener("click",P)});window.addEventListener("resize",L);pt();L();V().then(t=>{ut(t)}).catch(t=>{console.log(t)});rt();it();const yt=JSON.parse(localStorage.getItem("cart-products-list"));yt||localStorage.setItem("cart-products-list",JSON.stringify([]));const vt="640c2dd963a319ea671e383b",ht=async()=>{const t=await G(vt);console.log(t)};ht();
//# sourceMappingURL=commonHelpers2.js.map
