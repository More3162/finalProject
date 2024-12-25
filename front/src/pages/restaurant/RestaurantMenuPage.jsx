import { Link, useParams } from "react-router-dom";
import { useRestaurant } from "../../providers/RestaurantProvider";
import { useEffect } from "react";
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
  ImageListItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useOrder } from "../../providers/OrderProvider";
import { deleteMenuItem } from "../../services/menu.service";

const RestaurantMenuPage = () => {
  const { user } = useAuth();
  const id = useParams()?.id || user?._id;
  const { order, addToOrder, removeFromOrder } = useOrder(id);
  const { restaurant, loadRestaurant, setMenu } = useRestaurant();
  const isOwner = user?.type === "restaurant" && user._id === restaurant?._id;

  useEffect(() => {
    loadRestaurant(id);
  }, [id]);

  const handleDeleteItem = async (item) => {
    if (confirm("Are you sure you want to delete this menu item?")) {
      await deleteMenuItem(item._id);
      setMenu(restaurant.menu.filter((menuItem) => menuItem._id !== item._id));
    }
  };

  return (
    <Box sx={{ padding: 2 }}>
      {isOwner && (
        <Box mb={2} textAlign="right">
          <Button
            variant="contained"
            color="primary"
            href={ROUTES.restaurantMenuItemForm
              .replace(":restaurantId", restaurant._id)
              .replace("/:id?", "")}
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
                gap: 2,
              }}
            >
              <img
                src={item.imageUrl}
                alt={item.name}
                style={{ width: "75px", height: "auto", borderRadius: "8px" }} // התאמת עיצוב
              />

              <Box>
                <Typography variant="h6" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${item.price}
                </Typography>
              </Box>
              {user?.type === "customer" && (
                <Box display="flex" alignItems="center">
                  <IconButton
                    color="primary"
                    onClick={() => removeFromOrder(item)}
                  >
                    <RemoveIcon />
                  </IconButton>
                  <IconButton color="primary" onClick={() => addToOrder(item)}>
                    <AddIcon />
                  </IconButton>
                </Box>
              )}
              {isOwner && (
                <Box display="flex" alignItems="center">
                  <IconButton
                    color="primary"
                    LinkComponent={Link}
                    to={ROUTES.restaurantMenuItemForm
                      .replace(":restaurantId", id)
                      .replace(":id", item._id)}
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
    </Box>
  );
};

export default RestaurantMenuPage;
