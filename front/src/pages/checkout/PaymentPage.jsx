import React from 'react';
import { Box, Typography, TextField, Button, Grid, Paper, Divider } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import { useOrder } from '../../providers/OrderProvider';
import { getStoredContact } from '../../services/contact.service';
import { useAuth } from '../../providers/AuthProvider';
import { createOrder, setStoredOrder } from '../../services/orders.service';

const PaymentPage = () => {
  const contact = getStoredContact();
  const { user } = useAuth();
  const { restaurantId, order } = useOrder();
  const items = Object.values(order);
  const navigate = useNavigate();

  const handlePayment = async () => {
    const orderData = {
      customer_id: user._id,
      restaurant_id: restaurantId,
      contact,
      items
    };

    try {
      const order = await createOrder(orderData);
      setStoredOrder(order);
      navigate('/checkout/success');
    } catch (e) {
      throw e;
    }
  };

  const handleBack = () => navigate(-1);

  if (!contact || !user || !items.length || !restaurantId) {
    return <Navigate to="/" />;
  }

  return (
    <Box sx={(theme) => ({
      backgroundColor: theme.palette.background.default,
      minHeight: '100vh',
      py: 4
    })}>
      <Paper
        sx={(theme) => ({
          padding: theme.spacing(4),
          margin: 'auto',
          maxWidth: 600,
        })}
        elevation={3}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Payment Details
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name on Card"
                variant="outlined"
                required
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Card Number"
                variant="outlined"
                required
                inputProps={{ maxLength: 16 }}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="Expiry Date (MM/YY)"
                variant="outlined"
                required
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                fullWidth
                label="CVV"
                variant="outlined"
                required
                inputProps={{ maxLength: 3 }}
              />
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handlePayment}
              >
                Pay Now
              </Button>
            </Grid>

            <Grid item xs={12}>
              <Button
                variant="outlined"
                color="secondary"
                fullWidth
                onClick={handleBack}
              >
                Back
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
};

export default PaymentPage;
