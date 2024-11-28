import { createContext, useContext, useState } from "react";
import { getRestaurant } from "../services/restaurant.service";
import { getMenuItems } from "../services/menu.service";

const RestaurantContext = createContext();

const RestaurantProvider = ({ children }) => {
  const [restaurant, setRestaurant] = useState(null);

  const loadRestaurant = async (id) => {
    if (id) {
      const res = await getRestaurant(id);
      const menu = await getMenuItems(id);
      setRestaurant({ ...res, menu });
    } else {
      setRestaurant(null);
    }
  };

  const ctx = { restaurant, loadRestaurant };

  return (
    <RestaurantContext.Provider value={ctx}>
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => {
  const ctx = useContext(RestaurantContext);
  return ctx;
};

export default RestaurantProvider;
