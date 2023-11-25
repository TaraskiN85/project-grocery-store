import { orderSubscription } from './API';

try {
    const form = document.querySelector('.footer-form');
    form.addEventListener('submit', onSubscribe);
  async function onSubscribe() {
    // e.preventDefault();
    const email = form.querySelector('#footer-email').value;

    if (!email) {
      throw new Error('Email is required!');
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format!');
    }

    const message = await orderSubscription(email);
    console.log(message);
  }

  onSubscribe();
} catch (error) {
  console.error(error);
}

// -------II variant------
// import { orderSubscription } from "./API";

// const form = document.querySelector('.footer-form');
// const emailInput = document.querySelector('.form-input');
// const submitButton = document.querySelector('.footer-form-btn');

// form.addEventListener('submit', onSubscribe);

// async function onSubscribe(e) {
//     e.preventDefault();
//     const email = emailInput.value;

//     if (validateEmail(email)) {
//          const message = await orderSubscription(email);
//         console.log(message);
//     } else {
//         console.log('Invalid email');
//     }
// }

// function validateEmail(email) {
//   const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return pattern.test(email);
// }
