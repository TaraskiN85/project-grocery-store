import { QueryAPI } from './JS/first-fetch';
import { appendMarkup } from './JS/markup-product-cards';

const queryAPI = new QueryAPI();
window.addEventListener('resize', fetchBasedOnScreenSize);
fetchBasedOnScreenSize();
function fetchBasedOnScreenSize() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    queryAPI.limit = 6;
    queryAPI
      .searchingQuery()
      .then(data => appendMarkup(data))
      .catch(er => console.log(er));
  } else if (windowWidth >= 768 && windowWidth < 1440) {
    queryAPI.limit = 8;
    queryAPI
      .searchingQuery()
      .then(data => appendMarkup(data))
      .catch(er => console.log(er));
  } else {
    queryAPI.limit = 9;
    queryAPI
      .searchingQuery()
      .then(data => appendMarkup(data))
      .catch(er => console.log(er));
  }
}
