import { useParams } from "react-router-dom";
import { useRestaurant } from "../../providers/RestaurantProvider";
import { useEffect, useState } from "react";
import { menuItemSchema } from "../../validation/menu.validation";
import { saveMenuItem } from "../../services/menu.service";
import { normalizeMenuItem } from "../../models/restaurant.model";
import { Box, Grid, TextField, Button, Typography, Paper, MenuItem } from "@mui/material";

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
        p: 2,
      }}
    >
      {/* כותרת עמוד */}
      <Typography variant="h4" sx={{ mb: 4, fontWeight: "bold", textAlign: "center" }}>
        {id ? "Edit" : "Create"} Menu Item
      </Typography>

      {/* טופס מעוצב */}
      <Paper
        elevation={6}
        sx={{
          p: 4,
          maxWidth: 500,
          width: "100%",
          borderRadius: 3,
          backgroundColor: "background.paper",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Box component="form" noValidate>
          <Grid container spacing={3}>
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
                    borderColor: "primary.main",
                  },
                }}
              />
            </Grid>

            {/* Category Dropdown */}
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Category"
                value={itemData.category}
                onChange={handleInput("category")}
                variant="outlined"
              >
                <MenuItem value="Main">Main</MenuItem>
                <MenuItem value="Starters">Starters</MenuItem>
                <MenuItem value="Dessert">Dessert</MenuItem>
              </TextField>
            </Grid>

            {/* Price Field */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                type="number"
                label="Price"
                value={itemData.price}
                onInput={handleInput("price")}
                placeholder="Enter price"
                variant="outlined"
              />
            </Grid>

            {/* Description Field */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Description"
                value={itemData.description}
                onInput={handleInput("description")}
                placeholder="Enter a brief description"
                variant="outlined"
              />
            </Grid>

            {/* Error Message */}
            {error && (
              <Grid item xs={12}>
                <Typography color="error" align="center">
                  {typeof error === "string" && error}
                </Typography>
              </Grid>
            )}

            {/* Save Button */}
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={!!error}
                sx={{
                  py: 1.5,
                  fontSize: "1rem",
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: "success.main",
                    color: "white",
                    boxShadow: "0 4px 15px rgba(0, 255, 0, 0.5)",
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
