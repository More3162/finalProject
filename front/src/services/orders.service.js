import axios from "axios";

const RESTAURANT_ID_KEY = 'restaurant';
const ORDER_KEY = 'order';
const ORDERS_KEY = 'orders';

const baseUrl = import.meta.env.VITE_BASE_URL + '/order';

export const getRestaurantId = () => localStorage.getItem(RESTAURANT_ID_KEY);

export const setRestaurantId = (id) => localStorage.setItem(RESTAURANT_ID_KEY, id);

export const getStoredOrder = () => {
    const order = JSON.parse(localStorage.getItem(ORDER_KEY)) || {};
    return order;
};

export const setStoredOrder = (order) => {
    localStorage.setItem(ORDER_KEY, JSON.stringify(order));
};

export const getStoredOrders = () => {
    const orders = JSON.parse(localStorage.getItem(ORDERS_KEY)) || {};
    return orders;
};

export const setStoredOrders = (orders) => {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
};

export const createOrder = async (orderData) => {
    const { data } = await axios.post(baseUrl + '/newOrder', orderData);
    return data;
};

// const getOrders = async (restaurantId) => {
//     try {
//         const { data } = await axios.get(baseUrl + '/' + restaurantId);
//         return data;
//     } catch (error) {
//         console.error('Error getting restaurant Orders:', error.response?.data || error.message);
//     }
// };

// const updateOrderStatus = async (orderId) => {
//     try {
//         const { data } = await axios.patch(baseUrl + '/' + orderId);
//         return data;
//     } catch (error) {
//         console.error('Error Updating Order status:', error.response?.data || error.message);
//     }
// };

// const deleteOrder = async (orderId) => {
//     try {
//         const { data } = await axios.delete(baseUrl + '/' + orderId);
//         return data;
//     } catch (error) {
//         console.error('Error Delete Order:', error.response?.data || error.message);
//     }
// };
