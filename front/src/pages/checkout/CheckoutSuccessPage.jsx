import { useEffect, useMemo } from "react";
import { getStoredOrder, setRestaurantId, setStoredOrder } from "../../services/orders.service";
import { setStoredContact } from "../../services/contact.service";
import { useOrder } from "../../providers/OrderProvider";

const CheckoutSuccessPage = () => {
  const order = useMemo(getStoredOrder, []);
  const { setOrders } = useOrder();

  useEffect(() => {
    setStoredContact(null);
    setStoredOrder(null);
    setRestaurantId(null);
    setOrders({});
  }, []);

  return (
    <div>
      <h1>
        Order Sent Successfully
      </h1>
      <h3>
        Order Id: {order._id}
      </h3>
      <h4>
        Order Total: {order.totalPrice}
      </h4>
    </div>
  );
};

export default CheckoutSuccessPage;
