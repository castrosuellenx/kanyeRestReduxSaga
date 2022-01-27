import axios from 'axios';

const apiKanye = axios.create({
  baseURL: 'https://api.kanye.rest',
});

export default apiKanye;
