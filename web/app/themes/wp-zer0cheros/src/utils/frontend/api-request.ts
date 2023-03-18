import axios from "axios";


const apiRequest = axios.create({
  baseURL: 'https://wp-boilerplate.ddev.site',
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  
});

export default apiRequest;