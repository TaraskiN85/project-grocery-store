const refs = {
    prevNextBtn: document.querySelectorAll(".prevNext"),
    numbers: document.querySelectorAll(".pag-link"),
  };
  
  let currentStep = 0;
  
  const updateBtn = () => {
    if (currentStep === 4) {
      refs.prevNextBtn[1].disabled = true;
    } else if (currentStep === 0) {
      refs.prevNextBtn[0].disabled = true;
    } else {
      refs.prevNextBtn[0].disabled = false;
      refs.prevNextBtn[1].disabled = false;
    }
  };
  
  refs.numbers.forEach((number, numIndex) => {
    number.addEventListener("click", (evt) => {
      evt.preventDefault();
      currentStep = numIndex;
      document.querySelector(".active").classList.remove("active");
      number.classList.add("active");
      updateBtn();
    });
  });
  
  refs.prevNextBtn.forEach((button) => {
    button.addEventListener("click", (evt) => {
      if (evt.target.id === "next") {
        currentStep = currentStep + 1;
      } else {
        currentStep = currentStep - 1;
      }
      refs.numbers.forEach((number, numIndex) => {
        number.classList.toggle("active", numIndex === currentStep);
        updateBtn();
      });
    });
  });
  