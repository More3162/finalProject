import React, { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  Paper,
  Typography,
  IconButton,
  ListItemText,
} from "@mui/material";
import { useAuth } from "../../providers/AuthProvider";

const CustomerDashboard = () => {
  const { user } = useAuth();
  const [selected, setSelected] = useState();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(user?.orders || []);
  }, [user]);

  return (
    <Box sx={{ padding: 2 }}>
      <List>
        {orders.map((order) => (
          <ListItem key={order._id} sx={{ marginBottom: 2 }}>
            <Paper
              elevation={3}
              sx={{
                padding: 2,
                width: "100%",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <Box>
                  <Typography variant="h6" component="div">
                    {new Date(order.orderDate).toLocaleString()}
                  </Typography>
                  <Typography variant="h6" component="div">
                    {order.status}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${order.totalPrice}
                  </Typography>
                </Box>
                {
                  <Box display="flex" alignItems="center">
                    <IconButton
                      color="error"
                      onClick={() =>
                        setSelected(selected == order._id ? null : order._id)
                      }
                    >
                      {selected == order._id ? "-" : "+"}
                    </IconButton>
                  </Box>
                }
              </Box>
              {selected == order._id && (
                <List>
                  {order.items.map((item) => (
                    <ListItem
                      key={item.id}
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <ListItemText
                        primary={item.name}
                        secondary={`$${item.price} x ${item.quantity}`}
                      />
                    </ListItem>
                  ))}
                </List>
              )}
            </Paper>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CustomerDashboard;
