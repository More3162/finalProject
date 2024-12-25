import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { getToken, storeToken } from "../services/token.service";
import { getCustomer } from "../services/customer.service";
import { getRestaurant } from "../services/restaurant.service";
import ShoppingCart from "../components/cart/ShoppingCart";
import { getRestaurantId } from "../services/orders.service";
import { useOrder } from "./OrderProvider";
import { useAuth } from "./AuthProvider";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { order, addToOrder, removeFromOrder } = useOrder();
  const ctx = { isCartOpen, setIsCartOpen };
  const { user } = useAuth();

  return (
    <CartContext.Provider value={ctx}>
      {children}
      {user?.type != "restaurant" && (
        <ShoppingCart
          isOpen={isCartOpen}
          setIsOpen={setIsCartOpen}
          order={order}
          onAdd={addToOrder}
          onRemove={removeFromOrder}
        />
      )}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  return ctx;
};

export default CartProvider;
