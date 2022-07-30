import Axios from 'axios';

const axiosInstance = Axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});

export default axiosInstance;
