import { createContext, useContext, useState } from "react";
import { getRestaurantId, getStoredOrders, setRestaurantId, setStoredOrders } from "../services/orders.service";

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

export const useOrder = (id = getRestaurantId()) => {
  const { orders, setOrders } = useContext(OrderContext);
  const order = orders[id] || {};

  const setOrder = (order) => {
    setRestaurantId(id);
    setOrders({ ...orders, [id]: order });
  };

  const addToOrder = (item) => {
    const id = item._id || item.id;
    const newItem = order[id] || {
      id: id,
      name: item.name,
      price: item.price,
      quantity: 0
    };

    newItem.quantity++;

    const newOrder = { ...order, [id]: newItem };
    setOrder(newOrder);
  };

  const removeFromOrder = (item) => {
    const id = item._id || item.id;
    const oldItem = order[id];

    if (!oldItem) return;

    oldItem.quantity--;

    if (!oldItem.quantity) {
      delete order[id];
    }

    setOrder(order);
  };

  return { restaurantId: id, orders, setOrders, order, setOrder, addToOrder, removeFromOrder };
};

export default OrderProvider;
