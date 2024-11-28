import axios from "axios";



const baseUrl = import.meta.env.VITE_BASE_URL + '/customer';

const getCustomer = async (id) => {
  const token = getToken()?.split(' ')[1];
  const { data } = await axios.get(baseUrl + '/' + id, { headers: { 'x-auth-token': token } });
  return data;
};

const loginCustomer = async ({ email, password }) => {
  const { data } = await axios.post(baseUrl + '/login', { email, password });
  return data;
};

const registerCustomer = async (customerData) => {
  const { data } = await axios.post(baseUrl + '/register', customerData);
  return data;
};

export { getCustomer, loginCustomer, registerCustomer };
