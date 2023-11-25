import { getProductById, getAllProducts } from '/js/API.js';

async function saveAllProducts() {
  try {
    const { results } = await getAllProducts();
    console.log(results); // Виведення об'єкту results у консоль

    // Тут ви можете зберегти results в localStorage або використати його для іншої обробки
    localStorage.setItem('allProducts', JSON.stringify(results));
  } catch (error) {
    console.error('Error while saving products:', error);
  }
}

saveAllProducts();

document.addEventListener('DOMContentLoaded', async function () {
  const productContainer = document.querySelector('.container-product-cards');
  const modal = document.querySelector('.modal');

  function openModal() {
    modal.style.display = 'flex';
  }
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });

  function closeModal() {
    modal.style.display = 'none';
  }

  const closeModalBtn = document.querySelector('.modal-close-btn')

  closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none' ;
  })

  productContainer.addEventListener('click', async function (event) {
    const clickedElement = event.target.closest('.product-card');

    if (clickedElement) {
      const productId = clickedElement.id;
      console.log('Clicked Product ID:', productId); // Додаємо вивід ID продукту у консоль
      try {
        const productData = await getProductById(productId);
        openModal();
      } catch (error) {
        console.error('Помилка отримання даних про продукт:', error);
      }
    }
  });

});
