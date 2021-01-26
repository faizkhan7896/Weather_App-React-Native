import Axios from 'axios';

const appID = '224f6452c866b1617d0bb56090275001';

const api = Axios.create({
  baseURL: `http://api.openweathermap.org/data/2.5/weather?appid=${appID}`,
});

export default api;
