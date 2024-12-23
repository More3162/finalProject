import { useEffect, useMemo } from "react";
import { getStoredOrder, setRestaurantId, setStoredOrder } from "../../services/orders.service";
import { setStoredContact } from "../../services/contact.service";
import { useOrder } from "../../providers/OrderProvider";
import { Box, Card, CardContent, Typography, Container } from "@mui/material";

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
    <Container maxWidth="sm">
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Card sx={{ boxShadow: 3, borderRadius: 2, textAlign: "center" }}>
          <CardContent>
            <Typography variant="h4" component="h1" gutterBottom color="primary">
              Order Sent Successfully
            </Typography>
            <Typography variant="h6" component="h3">
              Order Id: <strong>{order._id}</strong>
            </Typography>
            <Typography variant="h6" component="h4" mt={2}>
              Order Total: <strong>${order.totalPrice}</strong>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default CheckoutSuccessPage;
