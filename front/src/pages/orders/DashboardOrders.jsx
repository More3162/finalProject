import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  Paper,
  Typography,
  IconButton,
  ListItemText,
  TextField,
  MenuItem,
} from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { useAuth } from "../../providers/AuthProvider";
import { useRestaurant } from "../../providers/RestaurantProvider";
import { deleteOrder, updateOrderStatus } from "../../services/orders.service";

const DashboardOrderPage = () => {
  const { user } = useAuth();
  const id = useParams()?.id || user?._id;
  const { restaurant, loadRestaurant, setMenu } = useRestaurant();
  const isOwner = user?.type === "restaurant" && user._id === restaurant?._id;

  const [selected, setSelected] = useState();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadRestaurant(id).then(
      (restaurant) => restaurant && setOrders(restaurant.orders)
    );
  }, [id]);

  const handleDeleteOrder = async (order) => {
    if (confirm("Are you sure you want to delete this Order")) {
      await deleteOrder(order._id);
      setOrders(orders.filter(({ _id }) => _id != order._id));
    }
  };

  const handleStatus = (id, status) => {
    updateOrderStatus(id, status);
    setOrders(
      orders.map((order) => {
        if (order._id == id) {
          order.status = status;
        }
        return order;
      })
    );
  };

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
                    {/*Dropdown */}
                    <TextField
                      select
                      fullWidth
                      label="Order Status"
                      value={order.status}
                      onChange={(e) => handleStatus(order._id, e.target.value)}
                      variant="outlined"
                    >
                      <MenuItem value="Pending">Pending</MenuItem>
                      <MenuItem value="In Process">In Process</MenuItem>
                      <MenuItem value="Completed">Completed</MenuItem>
                      <MenuItem value="Cancelled">Cancelled</MenuItem>
                    </TextField>
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${order.totalPrice}
                  </Typography>
                </Box>
                {isOwner && (
                  <Box display="flex" alignItems="center">
                    <IconButton
                      color="error"
                      onClick={() => handleDeleteOrder(order)}
                    >
                      <DeleteIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      onClick={() =>
                        setSelected(selected == order._id ? null : order._id)
                      }
                    >
                      {selected == order._id ? "-" : "+"}
                    </IconButton>
                  </Box>
                )}
              </Box>
              {selected === order._id && (
                <List>
                  {/* Contact Details in One Line */}
                  <ListItem>
                    <ListItemText
                      primary="Contact"
                      secondary={`${order.contact.first_name} ${order.contact.last_name}, Phone: ${order.contact.phone_number}`}
                    />
                  </ListItem>
                  {/* Address Details */}
                  <ListItem>
                    <ListItemText
                      primary="Address"
                      secondary={`${order.contact.address.street || ""}, ${
                        order.contact.address.houseNumber || ""
                      },${order.contact.address.city || ""}`}
                    />
                  </ListItem>
                  {/* Items List */}
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

export default DashboardOrderPage;
