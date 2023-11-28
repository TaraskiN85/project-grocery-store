import { orderSubscription } from './API';
import { showError, showSuccess } from './helpers';
const form = document.querySelector('.footer-form');
form.addEventListener('submit', onSubscribe);

async function onSubscribe(event) {
  event.preventDefault();
  const email = form.querySelector('#footer-email').value;

  try {
    if (!email) {
      showError('Email is required!');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showError('Please, enter valid Email!');
    }
    const res = await orderSubscription(email);
    form.querySelector('#footer-email').value = '';
    showSuccess(res.message);
  } catch (error) {
    error.response.data.message
      ? showError(error.response.data.message)
      : showError('Ooops! There`s an Error! Please, try again later!');
  }
}
