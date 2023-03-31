import axios from "axios";

const url = 'https://wp-boilerplate.ddev.site/wp-json/wc/v3/products/categories';
const consumerKey = process.env.AUTH_KEY;
const consumerSecret = process.env.AUTH_SECRET;

const apiAuthRequest =  axios.create({
  baseURL: process.env.BACKEND_API,
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Basic ${btoa(`${consumerKey}:${consumerSecret}`)}`
  },
});

  export default apiAuthRequest;