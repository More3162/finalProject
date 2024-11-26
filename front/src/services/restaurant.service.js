import axios from "axios";
import { getToken } from "./token.service";

const baseUrl = import.meta.env.VITE_BASE_URL + '/restaurant';

const getRestaurant = async (id) => {
  const token = getToken()?.split(' ')[1];
  const { data } = await axios.get(baseUrl + '/' + id, { headers: { 'x-auth-token': token } });
  return data;
};

const loginRestaurant = async (loginData) => {
  try {
    const response = await axios.post(baseUrl + '/login', loginData);
    const token = response.data.token;
    axios.defaults.headers['x-auth-token'] = token;  // שים את ה-token בהגדרות ברירת המחדל לכל הבקשות הבאות
    return token;
  } catch (err) {
    console.error('Login failed:', err);
    throw err;  // ודא שהשגיאה מתקבלת
  }
};

const handleGetRestaurant = async (id) => {
  try {
    console.log("Sending GET request for restaurant ID:", id);
    const response = await axios.get(baseUrl + `/restaurant/${id}`);
    console.log("Restaurant data:", response.data);
  } catch (err) {
    console.error("Failed to get restaurant:", err);
  }
};

const registerRestaurant = async (restaurantData) => {
  try {
    const response = await axios.post(baseUrl + '/register', restaurantData);  // הוסף את ה-baseUrl כאן
    console.log('Restaurant registered:', response.data);
  } catch (error) {
    console.error('Error registering restaurant:', error.response?.data || error.message);
  }
};


export { getRestaurant, loginRestaurant, registerRestaurant, handleGetRestaurant };
