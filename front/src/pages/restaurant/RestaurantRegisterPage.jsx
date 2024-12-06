import { useState } from "react";
import { getEmptyRestaurant, normalizeRestaurant } from "../../models/restaurant.model";
import { restaurantRegisterSchema } from "../../validation/restaurant.validation";
import { loginRestaurant, registerRestaurant } from "../../services/restaurant.service";
import { Box, Grid, TextField, Button, Typography, Paper } from "@mui/material";
import { useAuth } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

const RestaurantRegisterPage = () => {
    const [registerData, setRegisterData] = useState(getEmptyRestaurant());
    const [error, setError] = useState(true);
    const { setToken } = useAuth();
    const navigate = useNavigate();

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
        await registerRestaurant(restaurant);
        const token = await loginRestaurant(registerData);
        setToken('restaurant ' + token);
        navigate('/');
    };

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
                Restaurant Registration
            </Typography>

            {/* טופס בעיצוב חדש */}
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    maxWidth: 800,
                    width: "100%",
                    borderRadius: 2,
                }}
            >
                <Box component="form" noValidate>
                    <Grid container spacing={2}>
                        {/* Name */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Restaurant Name"
                                value={registerData.name}
                                onInput={handleInput("name")}
                                placeholder="Enter restaurant name"
                                variant="outlined"
                            />
                        </Grid>

                        {/* Country */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Country"
                                value={registerData.country}
                                onInput={handleInput("country")}
                                placeholder="Enter country"
                                variant="outlined"
                            />
                        </Grid>

                        {/* City */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="City"
                                value={registerData.city}
                                onInput={handleInput("city")}
                                placeholder="Enter city"
                                variant="outlined"
                            />
                        </Grid>

                        {/* Street */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Street"
                                value={registerData.street}
                                onInput={handleInput("street")}
                                placeholder="Enter street"
                                variant="outlined"
                            />
                        </Grid>

                        {/* House Number */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                type="number"
                                label="House Number"
                                value={registerData.houseNumber}
                                onInput={handleInput("houseNumber")}
                                placeholder="Enter house number"
                                variant="outlined"
                            />
                        </Grid>

                        {/* Phone */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Phone"
                                value={registerData.phone}
                                onInput={handleInput("phone")}
                                placeholder="Enter phone number"
                                variant="outlined"
                            />
                        </Grid>

                        {/* Email */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                type="email"
                                label="Email"
                                value={registerData.email}
                                onInput={handleInput("email")}
                                placeholder="Enter email"
                                variant="outlined"
                            />
                        </Grid>

                        {/* Password */}
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                type="password"
                                label="Password"
                                value={registerData.password}
                                onInput={handleInput("password")}
                                placeholder="Enter password"
                                variant="outlined"
                            />
                        </Grid>

                        {/* Opening Hours */}
                        {["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"].map((day) => (
                            <Grid item xs={12} sm={6} key={day}>
                                <TextField
                                    fullWidth
                                    label={`Opening Hours (${day})`}
                                    value={registerData[day]}
                                    onInput={handleInput(day)}
                                    placeholder={`Enter opening hours for ${day}`}
                                    variant="outlined"
                                />
                            </Grid>
                        ))}

                        {/* Error Message */}
                        {error && (
                            <Typography color="error" align="center">
                                {typeof error === "string" && error}
                            </Typography>
                        )}


                        {/* Register Button */}
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={handleRegister}
                                disabled={!!error}
                                sx={{
                                    py: 1.5,
                                    transition: "0.3s",
                                    "&:hover": {
                                        backgroundColor: "#1976d2",
                                        color: "#ffffff",
                                    },
                                }}
                            >
                                Register
                            </Button>
                            <Grid item xs={12}>
                                <Button
                                    fullWidth
                                    variant="text"
                                    href="/restaurant/login"
                                    sx={{
                                        mt: 2,
                                        color: "text.primary",
                                        "&:hover": {
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    Have an account? Login here
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
};

export default RestaurantRegisterPage;
