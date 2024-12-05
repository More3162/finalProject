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

const RestaurantMenuPage = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { restaurant, loadRestaurant } = useRestaurant();
  const isOwner = user?.type === "restaurant" && user._id === restaurant?._id;

  useEffect(() => {
    loadRestaurant(id);
  }, [id]);

  const handleAddToOrder = (item) => {
    // Logic to add the item to the order
    console.log("Add to order: ", item);
  };

  const handleRemoveFromOrder = (item) => {
    // Logic to remove the item from the order
    console.log("Remove from order: ", item);
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
                  {item.price} $
                </Typography>
              </Box>
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
            </Paper>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default RestaurantMenuPage;
