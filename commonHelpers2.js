/* empty css                      */import{a as p}from"./assets/vendor-a61d8330.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerpolicy&&(c.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?c.credentials="include":s.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=e(s);fetch(s.href,c)}})();const o={prevNextBtn:document.querySelectorAll(".prevNext"),numbers:document.querySelectorAll(".pag-link")};let d=0;const f=()=>{d===4?o.prevNextBtn[1].disabled=!0:d===0?o.prevNextBtn[0].disabled=!0:(o.prevNextBtn[0].disabled=!1,o.prevNextBtn[1].disabled=!1)};o.numbers.forEach((t,r)=>{t.addEventListener("click",e=>{e.preventDefault(),d=r,document.querySelector(".active").classList.remove("active"),t.classList.add("active"),f()})});o.prevNextBtn.forEach(t=>{t.addEventListener("click",r=>{r.target.id==="next"?d=d+1:d=d-1,o.numbers.forEach((e,i)=>{e.classList.toggle("active",i===d),f()})})});const n="https://food-boutique.b.goit.study/api/",u=async t=>{let r=`${n}products/?`;for(const s in t)r+=`&${s}=${t[s].toString()}`;const i=await(await p.get(r)).data;return localStorage.setItem("fetched-products",JSON.stringify(i.results)),i},y=async()=>await(await p.get(`${n}products/discount/`)).data,b=async(t=5)=>{const r=Number.isInteger(t)?`${n}products/popular/?limit=${t}`:`${n}products/popular/`;return await(await p.get(r)).data},v={divProdCards:document.querySelector(".js-product-cards")};function l(t){v.divProdCards.innerHTML="",v.divProdCards.insertAdjacentHTML("beforeend",$(t))}function $(t){return t.results.map(({_id:r,name:e,img:i,category:s,price:c,size:a,popularity:h})=>`<div class="product-card" id="${r}">
                  <div class="product-card-img">
                      <img class="card-img"
                          src="${i}"
                          alt="${e}">
                  </div>
                  <h3 class="produc-card-name">${e}</h3>
                  <div class="product-card-description">
                      <div class="card-description">
                          <p>Category:</p>
                          <p class="card-description-value">${s}</p>
                      </div>
                      <div class="card-description">
                          <p>Size:</p>
                          <p class="card-description-value">${a}</p>
                      </div>
                      <div class="card-description">
                          <p>Popularity:</p>
                          <p class="card-description-value">${h}</p>
                      </div>
                  </div>
                  <div class="product-card-price-btn">
                      <p class="product-card-price">${c}</p>
                      <button type="button" class="product-card-btn">
                          <svg width="18" height="18">
                              <use class="button-icon" href=""></use>
                          </svg>
                      </button>
                  </div>
              </div>`).join("")}const g={popularProductCards:document.querySelector(".js-popular-product-cards"),discountProductCards:document.querySelector(".js-discount-product-cards")};async function L(){const t=await b();g.popularProductCards.insertAdjacentHTML("beforeend",P(t))}function P(t){return t.map(({_id:r,name:e,img:i,category:s,size:c,popularity:a})=>`<div class="container-for-popular-items">
          <div class="aside-product-card" id="${r}">
                  <div class="aside-card-img">
                      <img class="aside-img"
                          src="${i}"
                          alt="${e}">
                  </div>
                  <div class="card-product-name-container">
                  <h3 class="aside-card-name">${e}</h3>
                     </div>
                  <div class="product-card-description">
                      <div class="aside-card-description">
                          <p>Category:</p>
                          <p class="card-description-value">${s}</p>
                      </div>
                      <div class="size-popularity-container">
                      <div class="aside-card-description">
                          <p>Size:</p>
                          <p class="card-description-value">${c}</p>
                      </div>
                      <div class="aside-card-description">
                          <p>Popularity:</p>
                          <p class="card-description-value">${a}</p>
                      </div>
                  </div>
                  </div>
                  <div class="product-card-price-btn">
                      <button type="button" class="product-card-btn">
                          <svg width="18" height="18">
                              <use class="button-icon" href="../img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
              </div>
              </div>`).join("")}async function w(){const t=await y();g.discountProductCards.insertAdjacentHTML("beforeend",S(t))}function S(t){return t.slice(0,2).map(({_id:e,name:i,img:s,price:c})=>`<div class="container-for-discount-items">
          <div class="discount-product-card" id="${e}">
                  <div class="discount-product-card-img">
                      <img class="discount-card-img"
                          src="${s}"
                          alt="${i}">
                  </div>
                  <div class="product-card-price-btn">
                  <h3 class="discount-product-card-name">${i}</h3>
                      <p class="product-card-price">${c}</p>
                      <button type="button" class="discount-product-card-btn">
                          <svg width="18" height="18">
                              <use class="discount-button-icon" href="../img/icons.svg#icon-cart"></use>
                          </svg>
                      </button>
                  </div>
                  
              </div>
              </div>`).join("")}window.addEventListener("resize",m);m();function m(){const t={keyword:"",page:2,limit:""},r=window.innerWidth;r<768?(t.limit=6,u(t).then(e=>l(e)).catch(e=>console.log(e))):r>=768&&r<1440?(t.limit=8,u(t).then(e=>l(e)).catch(e=>console.log(e))):(t.limit=9,u(t).then(e=>l(e)).catch(e=>console.log(e)))}L();w();
//# sourceMappingURL=commonHelpers2.js.map
