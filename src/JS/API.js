import axios from 'axios';

const BASE_URL = 'https://food-boutique.b.goit.study/api/';

export const getProductsByParams = async () => {
  let FULL_URL = `${BASE_URL}products/?`;
  const optionsObj = JSON.parse(localStorage.getItem('search-params'));
  for (const key in optionsObj) {
    FULL_URL += `&${key}=${optionsObj[key].toString()}`;
  }

  const res = await axios.get(FULL_URL);
  const data = await res.data;
  localStorage.setItem('fetched-products', JSON.stringify(data.results));
  return data;
};

export const getProductsCategories = async () => {
  const res = await axios.get(`${BASE_URL}products/categories/`);
  const data = await res.data;
  localStorage.setItem('product-categories', JSON.stringify(data));
  return await res.data;
};

export const getDiscountProducts = async () => {
  const res = await axios.get(`${BASE_URL}products/discount/`);
  return await res.data;
};

export const getPopularProducts = async (limit = 5) => {
  const FULL_URL = Number.isInteger(limit)
    ? `${BASE_URL}products/popular/?limit=${limit}`
    : `${BASE_URL}products/popular/`;

  const res = await axios.get(FULL_URL);
  return await res.data;
};

export const getProductById = async id => {
  const res = await axios.get(`${BASE_URL}products/${id}`);
  return await res.data;
};

export const createNewOrder = async orderObj => {
  const res = await axios.post(`${BASE_URL}orders/`, JSON.stringify(orderObj));
  return await res.data;
};

export const orderSubscription = async email => {
  const res = await axios.post(`${BASE_URL}subscription/`, {
    email: `${email}`,
  });
  return await res.data;
};
