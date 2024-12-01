import axios from "axios";
import { getToken } from "./token.service";

const baseUrl = import.meta.env.VITE_BASE_URL + '/order';

const getOrders = async (restaurantId) => {
    try {
        const { data } = await axios.get(baseUrl + '/' + restaurantId);
        return data;
    } catch (error) {
        console.error('Error getting restaurant Orders:', error.response?.data || error.message);
    }
};

const updateOrderStatus = async (orderId) => {
    try {
        const { data } = await axios.patch(baseUrl + '/' + orderId);
        return data;
    } catch (error) {
        console.error('Error Updating Order status:', error.response?.data || error.message);
    }
};

const deleteOrder = async (orderId) => {
    try {
        const { data } = await axios.delete(baseUrl + '/' + orderId);
        return data;
    } catch (error) {
        console.error('Error Delete Order:', error.response?.data || error.message);
    }
};
