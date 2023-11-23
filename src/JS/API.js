import axios from 'axios';

const BASE_URL = 'https://food-boutique.b.goit.study/api/';

export const getAllProducts = async () => {
  const res = await axios.get(`${BASE_URL}products/`);
  return await res.data;
};

export const getProducts = async options => {
  let FULL_URL = `${BASE_URL}products/?`;

  for (const key in options) {
    FULL_URL += `&${key}=${options[key]}`;
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
