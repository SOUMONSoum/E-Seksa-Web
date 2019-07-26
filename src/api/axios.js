import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:3000/api`
})

export function setHeaders(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
  else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

export default api;
