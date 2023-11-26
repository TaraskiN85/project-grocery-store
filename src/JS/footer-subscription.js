import { orderSubscription } from './API';


  const form = document.querySelector('.footer-form');
  form.addEventListener('submit', onSubscribe);

async function onSubscribe(event) {
  event.preventDefault();
  // const email = document.querySelector('.form-input').value;
  const email =  form.querySelector('#footer-email').value;
 

  try {
    if (!email) {
      throw new Error('Email is required!');
      
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new Error('Invalid email format!');
    }

    const message = await orderSubscription(email);
    console.log(message);
    // }

  } catch (error) {
    console.error(error);
  }
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
