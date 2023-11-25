import { orderSubscription } from "./API";

const form = document.querySelector('.footer-form');

form.addEventListener('submit', onSubscribe);

const email = 'dasha564@gmail.com';

async function onSubscribe() {
    // e.preventDefault();
    const message = await orderSubscription(email);
    console.log(message);
}

onSubscribe();
