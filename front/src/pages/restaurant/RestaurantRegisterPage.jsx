import { useState } from "react";
import { getEmptyRestaurant, normalizeRestaurant } from "../../models/restaurant.model";
import { restaurantRegisterSchema } from "../../validation/restaurant.validation";
import { registerRestaurant } from "../../services/restaurant.service";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";

const RestaurantRegisterPage = () => {
    const [registerData, setRegisterData] = useState(getEmptyRestaurant());
    const [error, setError] = useState(true);

    const handleInput = (name) => {
        return (e) => {
            setRegisterData((prev) => {
                const registerData = { ...prev, [name]: e.target.value }; // flat data
                const restaurant = normalizeRestaurant(registerData); // inflated data
                const { error } = restaurantRegisterSchema.validate(restaurant);
                setError(error ? error.details[0].message : "");
                return registerData;
            });
        };
    };

    const handleRegister = async () => {
        const restaurant = normalizeRestaurant(registerData);
        const token = await registerRestaurant(restaurant);
        console.log(token);
    };

    return (
        <Box component="form" noValidate sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Name"
                        value={registerData.name}
                        onInput={handleInput("name")}
                        placeholder="name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Country"
                        value={registerData.country}
                        onInput={handleInput("country")}
                        placeholder="country"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="City"
                        value={registerData.city}
                        onInput={handleInput("city")}
                        placeholder="city"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Street"
                        value={registerData.street}
                        onInput={handleInput("street")}
                        placeholder="street"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        type="number"
                        label="House Number"
                        value={registerData.houseNumber}
                        onInput={handleInput("houseNumber")}
                        placeholder="house number"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Phone"
                        value={registerData.phone}
                        onInput={handleInput("phone")}
                        placeholder="phone"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        type="email"
                        label="Email"
                        value={registerData.email}
                        onInput={handleInput("email")}
                        placeholder="email"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        type="password"
                        label="Password"
                        value={registerData.password}
                        onInput={handleInput("password")}
                        placeholder="password"
                        variant="outlined"
                    />
                </Grid>
                {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
                    <Grid item xs={12} key={day}>
                        <TextField
                            fullWidth
                            label={`Opening Hours ${day}`}
                            value={registerData[day]}
                            onInput={handleInput(day)}
                            placeholder={`Opening Hours ${day}`}
                            variant="outlined"
                        />
                    </Grid>
                ))}
                {error && (
                    <Grid item xs={12}>
                        <Typography color="error">{error}</Typography>
                    </Grid>
                )}
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleRegister}
                        disabled={!!error}
                    >
                        Register
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RestaurantRegisterPage;
