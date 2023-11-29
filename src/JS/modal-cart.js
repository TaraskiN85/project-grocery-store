

const modalCartByBuy = document.querySelector('.modal-cart');
const modalCartClose = document.querySelector('.close-btn');

export function displayByBuyModal() {
  modalCartByBuy.classList.remove('is-hidden');
  document.body.style.overflow = 'hidden';
}


function handleModalClick(event) {
  if (event.target === modalCartByBuy) {
    closeModal();
  }
}

function closeModal() {
  modalCartByBuy.classList.add('is-hidden');
  document.body.style.overflow = 'visible';
}

window.addEventListener('click', handleModalClick);
modalCartClose.addEventListener('click', closeModal);
