import axios from 'axios';

const BASE_URL = 'https://food-boutique.b.goit.study/api/';

export const getAllProducts = async () => {
  const res = await axios.get(`${BASE_URL}products/`);
  return await res.data;
};

export const getProducts = async optionsObj => {
  let FULL_URL = `${BASE_URL}products/?`;

  for (const key in optionsObj) {
    FULL_URL += `&${key}=${optionsObj[key]}`;
  }

  const res = await axios.get(FULL_URL);
  return await res.data;
};

export const getCategories = async () => {
  const res = await axios.get(`${BASE_URL}products/categories/`);
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
  const res = await axios.get(`${BASE_URL}products/?id=${id}`);
  return await res.data;
};

export const orderProducts = async orderObj => {
  const res = await axios.post(`${BASE_URL}orders/`, JSON.stringify(orderObj));
  return await res.data;
};

export const orderSubscription = async email => {
  const subscriber = {
    email: email,
  };
  const res = await axios.post(
    `${BASE_URL}subscription/`,
    JSON.stringify(subscriber)
  );
  return await res.data;
};
