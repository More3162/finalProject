import { useParams } from "react-router-dom";
import { useRestaurant } from "../../providers/RestaurantProvider";
import { useEffect, useState } from "react";
import { menuItemSchema } from "../../validation/menu.validation";
import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { saveMenuItem } from "../../services/menu.service";
import { normalizeMenuItem } from "../../models/restaurant.model";

const RestaurantMenuItemForm = () => {
  const [itemData, setItemData] = useState({ name: '', category: 'Main', price: '', description: '' });
  const [error, setError] = useState(true);
  const { restaurantId, id } = useParams();
  const { restaurant, loadRestaurant } = useRestaurant();

  const handleInput = (name) => {
    return (e) => {
      setItemData((prev) => {
        const itemData = { ...prev, [name]: e.target.value };
        const { error } = menuItemSchema.validate(itemData);
        setError(error ? error.details[0].message : "");
        return itemData;
      });
    };
  };

  const handleSubmit = async () => {
    const menuItem = await saveMenuItem({ ...itemData, _id: id });
    // maybe navigate?
  };

  useEffect(() => {
    loadRestaurant(restaurantId);
  }, [restaurantId]);

  useEffect(() => {
    if (id && restaurant?.menu) {
      const menuItem = restaurant.menu.find((item) => item._id === id);
      setItemData(normalizeMenuItem(menuItem));
    }
  }, [restaurant, id]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      {/* כותרת עמוד */}
      <Typography variant="h3" sx={{ mb: 4, fontWeight: "bold" }}>
        {id ? 'Edit' : 'Create'} Menu Item
      </Typography>

      {/* טופס בעיצוב חדש */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 400,
          width: "100%",
          borderRadius: 2,
        }}
      >
        <Box component="form" noValidate>
          <Grid container spacing={2}>
            {/* Name Field */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="text"
                label="Name"
                value={itemData.name}
                onInput={handleInput("name")}
                placeholder="Enter name"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#00FF00", // אפקט ניאון במעבר עכבר
                  },
                }}
              />
            </Grid>

            <Grid item xs={6}>
              <select value={itemData.category} onInput={handleInput('category')}>
                <option>Main</option>
                <option>Starters</option>
                <option>Dessert</option>
              </select>
            </Grid>

            <Grid item xs={6}>
              <input type="number" value={itemData.price} onInput={handleInput('price')} />
            </Grid>

            <Grid item xs={12}>
              <textarea value={itemData.description} onInput={handleInput('description')} />
            </Grid>

            {/* Error Message */}
            {error && (
              <Typography color="error" align="center">
                {typeof error === "string" && error}
              </Typography>
            )}

            {/* Login Button */}
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={!!error}
                sx={{
                  py: 1.5,
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "#00FF00",
                    color: "#000000",
                    boxShadow: "0px 0px 10px 3px #00FF00", // אפקט ניאון במעבר עכבר
                  },
                }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default RestaurantMenuItemForm;
