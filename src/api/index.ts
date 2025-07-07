import redaxios from "redaxios";

import { getCategories, getCategoryById } from "./categories";
import { getProductById, getProducts } from "./product";

export const ecwidClient = redaxios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/${import.meta.env.VITE_STORE_ID}`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  },
});

export const ecwidApi = {
  category: {
    list: getCategories,
    getById: getCategoryById,
  },
  product: {
    list: getProducts,
    getById: getProductById,
  },
};
