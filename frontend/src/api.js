// frontend/src/api.js
import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || 'http://localhost:5000/api'
});

// optional: interceptors to handle errors or tokens later
export default API;
