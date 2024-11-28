import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode';
import { getToken, storeToken } from "../services/token.service";
import { getCustomer } from "../services/customer.service";
import { getRestaurant } from "../services/restaurant.service";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(getToken());
  const [user, setUser] = useState(null);

  const ctx = { user, setToken };

  useEffect(() => {
    storeToken(token);
    const [userType, userToken] = token?.split(' ') || [];
    const { id } = userToken ? jwtDecode(userToken) : {};

    const getUser = async () => {
      if (userType === 'customer') {
        const user = await getCustomer(id);
        setUser({ ...user, type: 'customer' });
      } else if (userType === 'restaurant') {
        const user = await getRestaurant(id);
        setUser({ ...user, type: 'restaurant' });
      } else {
        setUser(null);
      }
    }
    getUser();
  }, [token]);

  return (
    <AuthContext.Provider value={ctx}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  return ctx;
};

export default AuthProvider;
