import { useParams } from "react-router-dom";
import { useRestaurant } from "../../providers/RestaurantProvider";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/AuthProvider";
import { ROUTES } from "../../Router";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  Paper,
  IconButton,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useOrder } from "../../providers/OrderProvider";
import ShoppingCart from "../../components/cart/ShoppingCart";

const RestaurantMenuPage = () => {
  const { user } = useAuth();
  const id = useParams()?.id || user?._id;
  const { order, setOrder } = useOrder(id);
  const { restaurant, loadRestaurant } = useRestaurant();
  const isOwner = user?.type === "restaurant" && user._id === restaurant?._id;
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    loadRestaurant(id);
  }, [id]);

  const handleAddToOrder = (item) => {
    const newItem = order[item._id] || {
      id: item._id,
      name: item.name,
      price: item.price,
      quantity: 0
    };

    newItem.quantity++;

    const newOrder = { ...order, [item._id]: newItem };
    setOrder(newOrder);
    setIsCartOpen(true); // פתיחת העגלה אוטומטית
  };

  const handleRemoveFromOrder = (item) => {
    const oldItem = order[item._id];

    if (!oldItem) return;

    oldItem.quantity--;

    if (!oldItem.quantity) {
      delete order[item._id];
    }

    setOrder(order);
  };

  const handleEditItem = (item) => {
    console.log("עריכה של:", item);
    // הוסף כאן את הלוגיקה לעריכה
  };

  const handleDeleteItem = (item) => {
    console.log("מחיקה של:", item);
    // הוסף כאן את הלוגיקה למחיקה
  };



  return (
    <Box sx={{ padding: 2 }}>
      {isOwner && (
        <Box mb={2} textAlign="right">
          <Button
            variant="contained"
            color="primary"
            href={
              ROUTES.restaurantMenuItemForm
                .replace(":restaurantId", restaurant._id)
                .replace("/:id?", "")
            }
          >
            Add Menu Item
          </Button>
        </Box>
      )}

      <List>
        {restaurant?.menu.map((item) => (
          <ListItem key={item.name} sx={{ marginBottom: 2 }}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 2,
                width: "100%",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              <Box>
                <Typography variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${item.price}
                </Typography>
              </Box>
              {user?.type === 'customer' && (
                <Box display="flex" alignItems="center">
                  <IconButton
                    color="primary"
                    onClick={() => handleRemoveFromOrder(item)}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <IconButton
                    color="primary"
                    onClick={() => handleAddToOrder(item)}
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
              )}
              {isOwner && (
                <Box display="flex" alignItems="center">
                  <IconButton
                    color="primary"
                    onClick={() => handleEditItem(item)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleDeleteItem(item)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              )}
            </Paper>
          </ListItem>
        ))}
      </List>


      {/* עגלת קניות צפה */}
      <ShoppingCart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onOpen={() => setIsCartOpen(true)}
        order={order}
        onAdd={handleAddToOrder}
        onRemove={handleRemoveFromOrder}
      />

      <ul>
        {Object.values(order).map((item) => (
          <li key={item.id}>
            {item.name} x {item.quantity} = ${item.price * item.quantity}
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default RestaurantMenuPage;
