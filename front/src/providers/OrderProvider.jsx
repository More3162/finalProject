import { createContext, useContext, useState } from "react";
import { getStoredOrders, setStoredOrders } from "../services/orders.service";

const OrderContext = createContext();

const OrderProvider = ({ children }) => {
  const [orders, setStateOrders] = useState(getStoredOrders());

  const setOrders = (orders) => {
    setStoredOrders(orders);
    setStateOrders(orders);
  };

  const ctx = { orders, setOrders };

  return (
    <OrderContext.Provider value={ctx}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = (id) => {
  const { orders, setOrders } = useContext(OrderContext);
  const order = orders[id] || {};
  const setOrder = (order) => setOrders({ ...orders, [id]: order });

  return { orders, setOrders, order, setOrder };
};

export default OrderProvider;
