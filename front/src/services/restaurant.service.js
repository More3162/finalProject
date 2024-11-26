import axios from "axios";
import { getToken } from "./token.service";

const baseUrl = import.meta.env.VITE_BASE_URL + '/restaurant';

const getRestaurant = async (id) => {
  const token = getToken()?.split(' ')[1];
  const { data } = await axios.get(baseUrl + '/' + id, { headers: { 'x-auth-token': token } });
  return data;
};

const loginRestaurant = async (email, password) => {
  const token = await axios.post(baseUrl + '/login', { email, password });
  return token;
};

const registerRestaurant = async (resData) => {
  const restaurant = await axios.post(baseUrl + '/register', resData);
  return restaurant;
};

export { getRestaurant, loginRestaurant, registerRestaurant };
