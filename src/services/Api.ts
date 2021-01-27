import Axios from 'axios';

const api = Axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/`,
});

export default api;
