import axios from "axios";
import { getToken } from "./token.service";

const baseUrl = import.meta.env.VITE_BASE_URL + '/restaurant';

const getAllRestaurants = async () => {
  const { data } = await axios.get(baseUrl + '/');
  return data;
};

const getRestaurant = async (id) => {
  const token = getToken()?.split(' ')[1];
  const { data } = await axios.get(baseUrl + '/' + id, { headers: { 'x-auth-token': token } });
  return data;
};

const loginRestaurant = async ({ email, password }) => {
  try {
    const { data } = await axios.post(baseUrl + '/login', { email, password });
    console.log(data);
    // axios.defaults.headers['x-auth-token'] = token;  // שים את ה-token בהגדרות ברירת המחדל לכל הבקשות הבאות
    return data;
  } catch (err) {
    console.error('Login failed:', err);
    throw err;  // ודא שהשגיאה מתקבלת
  }
};


const registerRestaurant = async (restaurantData) => {
  try {
    const { data } = await axios.post(baseUrl + '/register', restaurantData);  // הוסף את ה-baseUrl כאן
    // console.log('Restaurant registered:', response.data);
    return data;
  } catch (error) {
    console.error('Error registering restaurant:', error.response?.data || error.message);
  }
};

export { getAllRestaurants, getRestaurant, loginRestaurant, registerRestaurant };
