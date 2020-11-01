import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://192.168.1.102:3000',
  responseType: 'json',
  withCredentials: true,
});

export { apiClient };
