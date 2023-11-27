// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { orderSubscription } from './API';

const form = document.querySelector('.footer-form');
form.addEventListener('submit', onSubscribe);

async function onSubscribe(event) {
  event.preventDefault();
  const email = form.querySelector('#footer-email').value;

  try {
    if (!email) {
      throw new Error('Email is required!');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      // alert('Please, enter valid Email.');
    throw new Error('Invalid email format!');
       }

      const message = await orderSubscription(email);
      console.log(message);
      form.querySelector('#footer-email').value = '';
    alert('Thank you for subscribe!');
    // Notify.success('Thank you for subscribe!');
    } catch (error) {
      console.error(error);
    }
  }

