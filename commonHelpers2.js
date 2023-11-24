import{a as p}from"./assets/vendor-a61d8330.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();const f="https://food-boutique.b.goit.study/api/",d=async r=>{let o=`${f}products/?`;for(const s in r)o+=`&${s}=${r[s].toString()}`;return await(await p.get(o)).data},a={divProdCards:document.querySelector(".js-product-cards")};function n(r){a.divProdCards.innerHTML="",a.divProdCards.insertAdjacentHTML("beforeend",v(r))}function v(r){return r.results.map(({_id:o,name:e,img:s,category:t,price:i,size:c,popularity:u})=>`<div class="product-card" id="${o}">
                  <div class="product-card-img">
                      <img class="card-img"
                          src="${s}"
                          alt="${e}">
                  </div>
                  <h3 class="produc-card-name">${e}</h3>
                  <div class="product-card-description">
                      <div class="card-description">
                          <p>Category:</p>
                          <p class="card-description-value">${t}</p>
                      </div>
                      <div class="card-description">
                          <p>Size:</p>
                          <p class="card-description-value">${c}</p>
                      </div>
                      <div class="card-description">
                          <p>Popularity:</p>
                          <p class="card-description-value">${u}</p>
                      </div>
                  </div>
                  <div class="product-card-price-btn">
                      <p class="product-card-price">${i}</p>
                      <button type="button" class="product-card-btn">
                          <svg width="18" height="18">
                              <use class="button-icon" href=""></use>
                          </svg>
                      </button>
                  </div>
              </div>`).join("")}window.addEventListener("resize",l);l();function l(){const r={keyword:"",page:1,limit:""},o=window.innerWidth;o<768?(r.limit=6,d(r).then(e=>n(e)).catch(e=>console.log(e))):o>=768&&o<1440?(r.limit=8,d(r).then(e=>n(e)).catch(e=>console.log(e))):(r.limit=9,d(r).then(e=>n(e)).catch(e=>console.log(e)))}
//# sourceMappingURL=commonHelpers2.js.map
