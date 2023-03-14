import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:5000/'
})

export const sendEmail = (to, subject, text) => {
  return api.post('/contato', { to, subject, text });
}