const toTopBtn = document.querySelector('.scroll_up');


window.addEventListener("scroll", trackScroll);

toTopBtn.addEventListener("click", toTop);

function trackScroll() {

  const scrolled = window.scrollY;

  const positionBtn = 230;

  if (scrolled > positionBtn) {

    toTopBtn.classList.add("visible");
  } else {

    toTopBtn.classList.remove("visible");
  }
}

function toTop() {

  if (window.scrollY > 0) { 
    
    window.scrollBy(0, -30);
    setTimeout(toTop, 0); 
  }
}