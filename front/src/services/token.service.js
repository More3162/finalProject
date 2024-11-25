const TOKEN_KEY = 'my token';

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const storeToken = (value) => {
  localStorage.setItem(TOKEN_KEY, value);
};

export { getToken, storeToken };
