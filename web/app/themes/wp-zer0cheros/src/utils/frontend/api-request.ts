import axios from "axios";

const apiRequest =  axios.create({
  baseURL: process.env.BACKEND_API,
  timeout: 30000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  
});

export default apiRequest;