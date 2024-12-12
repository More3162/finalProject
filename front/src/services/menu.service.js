import axios from "axios";
import { getToken } from "./token.service";

const baseUrl = import.meta.env.VITE_BASE_URL + '/menu';

const getMenuItems = async (restaurantId) => {
  try {
    const { data } = await axios.get(baseUrl + '/' + restaurantId);
    return data;
  } catch (error) {
    console.error('Error getting restaurant menu:', error.response?.data || error.message);
  }
};

const saveMenuItem = async (itemData) => {
  try {
    let data;
    const token = getToken()?.split(' ')[1];
    const headers = { 'x-auth-token': token };

    if (itemData._id) {
      data = await axios.put(baseUrl + '/' + itemData._id, itemData, { headers });
    } else {
      data = await axios.post(baseUrl + '/newItem', itemData, { headers });
    }

    return data;
  } catch (error) {
    console.error('Error saving menu item:', error.response?.data || error.message);
  }
};

const deleteMenuItem = async (itemId) => {
  const token = getToken()?.split(' ')[1];
  const headers = { 'x-auth-token': token };
  const { data } = await axios.delete(baseUrl + '/' + itemId, { headers });
  return data;
};

export { saveMenuItem, getMenuItems, deleteMenuItem };
