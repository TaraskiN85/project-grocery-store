import"./assets/styles-3bfe271a.js";import{a as y,P as V}from"./assets/vendor-d107dae6.js";const v="https://food-boutique.b.goit.study/api/",h=async()=>{let t=`${v}products/?`;const e=JSON.parse(localStorage.getItem("search-params"));for(const r in e)t+=`&${r}=${e[r].toString()}`;const n=await(await y.get(t)).data;return localStorage.setItem("fetched-products",JSON.stringify(n.results)),n},W=async()=>{const t=await y.get(`${v}products/categories/`),e=await t.data;return localStorage.setItem("product-categories",JSON.stringify(e)),await t.data},K=async()=>await(await y.get(`${v}products/discount/`)).data,G=async(t=5)=>{const e=Number.isInteger(t)?`${v}products/popular/?limit=${t}`:`${v}products/popular/`;return await(await y.get(e)).data},X=async t=>await(await y.get(`${v}products/${t}`)).data,Y=async t=>await(await y.post(`${v}subscription/`,{email:`${t}`})).data,k={divProdCards:document.querySelector(".js-product-cards")};function S(t){k.divProdCards.innerHTML="",k.divProdCards.insertAdjacentHTML("afterbegin",Z(t))}function Z(t){return t.results.map(({_id:e,name:o,img:n,category:r,price:i,size:g,popularity:l})=>`<div class="product-card-prod" id="${e}">
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
                          <p class="card-description-value-prod">${l}</p>
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
              </div>`).join("")}const p=document.getElementById("pagination"),tt=600,et=9,ot=new V(p,{totalItems:tt,itemsPerPage:et,visiblePages:3,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",template:{page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>',firstPage:'<a href="#" class="tui-page-btn tui-first-child"><<</a>',lastPage:'<a href="#" class="tui-page-btn tui-last-child">>></a>',prevPage:'<a href="#" class="tui-page-btn tui-prev"><</a>',nextPage:'<a href="#" class="tui-page-btn tui-next">></a>'}}),st=p.querySelector(".tui-prev"),ct=p.querySelector(".tui-next"),at=p.querySelector(".tui-first"),rt=p.querySelector(".tui-last");st.textContent="‹";ct.textContent="›";at.textContent="«";rt.textContent="»";ot.on("afterMove",function(t){const e=t.page;async function o(n){try{const r=JSON.parse(localStorage.getItem("search-params"));r.page=n,localStorage.setItem("search-params",JSON.stringify(r));const i=await h(r);S(i);const g=p.querySelector(".tui-prev"),l=p.querySelector(".tui-next"),w=p.querySelector(".tui-first"),b=p.querySelector(".tui-last");g.textContent="‹",l.textContent="›",w.textContent="«",b.textContent="»"}catch(r){console.error(r)}}o(e)});const L={popularProductCards:document.querySelector(".js-popular-product-cards"),discountProductCards:document.querySelector(".js-discount-product-cards")};async function nt(){const t=await G();L.popularProductCards.insertAdjacentHTML("beforeend",it(t))}function it(t){return t.map(({_id:e,name:o,img:n,category:r,size:i,popularity:g})=>`<div class="container-for-popular-items">
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
              </div>`).join("")}async function dt(){const t=await K();L.discountProductCards.insertAdjacentHTML("beforeend",ut(t))}function ut(t){return t.slice(0,2).map(({_id:o,name:n,img:r,price:i})=>`<div class="container-for-discount-items">
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
              </div>`).join("")}const q=document.querySelector(".footer-form");q.addEventListener("submit",lt);async function lt(t){t.preventDefault();const e=q.querySelector("#footer-email").value;try{if(!e)throw new Error("Email is required!");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))throw new Error("Invalid email format!");const n=await Y(e);console.log(n),q.querySelector("#footer-email").value=""}catch(o){console.error(o)}}const d=document.querySelector(".js-category"),P=document.querySelector(".js-search-input"),f="search-params",m={keyword:"",category:"",page:1,limit:9};d.addEventListener("input",mt);P.addEventListener("submit",ft);function pt(t){const e=t.map(o=>`<option value="${o}">${o}</option>`).join("");d.insertAdjacentHTML("afterbegin",e),console.log(d.options.length),vt()}function x(){const t=window.innerWidth;t<768?(m.limit=6,localStorage.setItem(f,JSON.stringify(m)),h().then(e=>S(e)).catch(e=>console.log(e))):t>=768&&t<1440?(m.limit=8,localStorage.setItem(f,JSON.stringify(m)),h().then(e=>S(e)).catch(e=>console.log(e))):(m.limit=9,localStorage.setItem(f,JSON.stringify(m)),h().then(e=>S(e)).catch(e=>console.log(e)))}function gt(){const t=localStorage.getItem(f);if(t){const e=JSON.parse(t);P.elements.searchQuery.value=e.keyword??"",m.keyword=P.elements.searchQuery.value,d.options[d.selectedIndex].value=e.category??"",m.category=d.options[d.selectedIndex].value}}function mt(){const t=JSON.parse(localStorage.getItem("search-params"));d.options[d.selectedIndex].value==="All"?(t.category="",t.page=1):t.category=d.options[d.selectedIndex].value,localStorage.setItem(f,JSON.stringify(t)),h().then(e=>S(e)).catch(e=>console.log(e))}function ft(t){t.preventDefault();const e=JSON.parse(localStorage.getItem("search-params"));e.keyword=P.elements.searchQuery.value,localStorage.setItem(f,JSON.stringify(e)),h().then(o=>S(o)).catch(o=>console.log(o))}function vt(){const t=localStorage.getItem(f),e=JSON.parse(t);for(let o=0;o<d.options.length;o++)if(d.options[o].value===e.category){d.options[o].selected=!0;break}}document.addEventListener("DOMContentLoaded",async function(){const t=document.querySelector(".container-product-cards-prod"),e=document.querySelector(".modal"),o=document.querySelector(".modal-close-btn"),n=document.querySelector(".container-aside-cards"),r=document.querySelector(".container-discount-product-cards"),i=document.querySelector(".addtocart-btn"),g=document.querySelector(".modal-discount-svg");let l;function w(a){a.preventDefault();const s=JSON.parse(localStorage.getItem("cart-products-list"));if(s.some(c=>c._id===l._id)){const c=s.filter(u=>u._id!==l._id);localStorage.setItem("cart-products-list",JSON.stringify(c)),b()}else l.quantity=1,s.push(l),localStorage.setItem("cart-products-list",JSON.stringify(s)),i.innerHTML='Added to <svg width="18" height="18"><use class="button-icon" href="/img/icons.svg#icon-cart"></use></svg>',setInterval(()=>{b()},4e3)}async function b(){const a=JSON.parse(localStorage.getItem("cart-products-list")),s=e.id;a.some(c=>c._id===s)?i.innerHTML='Remove from <svg width="18" height="18"><use class="button-icon" href="/img/icons.svg#icon-cart"></use></svg>':i.innerHTML='Add to <svg width="18" height="18"><use class="button-icon" href="/img/icons.svg#icon-cart"></use></svg>'}function O(){e.classList.remove("is-hidden"),document.body.style.overflow="hidden"}function I(){e.classList.add("is-hidden"),document.body.style.overflow="visible"}document.addEventListener("keydown",function(a){a.key==="Escape"&&I()});function B(a){a.target===e&&I()}window.addEventListener("click",B),o.addEventListener("click",I);const C=async a=>{try{const s=await y.get(`https://food-boutique.b.goit.study/api/products/${a}`);return l=s.data,s.data}catch(s){return console.error("Error fetching product details:",s),null}};async function E(a){const s=a.target.closest(".product-card-prod");if(s){const c=s.id;i.setAttribute("id",c),e.setAttribute("id",c);const u=await C(c);u?$(u):console.log("Product ID not found in fetched-products")}else console.log("Product ID not found in fetched-products")}async function N(a){const s=a.target.closest(".aside-product-card");if(s){const c=s.id;i.setAttribute("id",c),e.setAttribute("id",c);const u=await C(c);u?$(u):console.log("Product ID not found in fetched-products")}else console.log("Product ID not found in fetched-products")}async function D(a){const s=a.target.closest(".discount-product-card");if(s){const c=s.id;i.setAttribute("id",c),e.setAttribute("id",c);const u=await C(c);u?$(u):console.log("Product ID not found in fetched-products")}else console.log("Product ID not found in fetched-products")}function $(a){const{name:s,price:c,desc:u,img:M,category:A,size:J,popularity:j,is10PercentOff:T}=a;b(),O(),a.is10PercentOff===!0?g.style.display="block":g.style.display="none",console.log(T);const _=document.querySelector(".modal-title"),z=document.querySelector(".price"),H=document.querySelector(".modal-text"),R=document.querySelector(".img-content"),U=document.querySelector(".modal-size"),F=document.querySelector(".modal-category"),Q=document.querySelector(".modal-pop");_.textContent=s,z.textContent=`$${c}`,H.textContent=u,R.setAttribute("src",M),U.textContent=J,F.textContent=A,Q.textContent=j}n.addEventListener("click",N),t.addEventListener("click",E),r.addEventListener("click",D),i.addEventListener("click",w)});window.addEventListener("resize",x);gt();x();W().then(t=>{pt(t)}).catch(t=>{console.log(t)});nt();dt();const yt=JSON.parse(localStorage.getItem("cart-products-list"));yt||localStorage.setItem("cart-products-list",JSON.stringify([]));const ht="640c2dd963a319ea671e383b",St=async()=>{const t=await X(ht);console.log(t)};St();
//# sourceMappingURL=commonHelpers2.js.map
