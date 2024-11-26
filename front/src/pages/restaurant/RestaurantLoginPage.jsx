import { useState } from "react";
import { restaurantLoginSchema } from "../../validation/restaurant.validation";
import { loginRestaurant } from "../../services/restaurant.service";
import { useAuth } from "../../providers/AuthProvider";
import { Box, Grid, TextField, Button, Typography, Paper } from "@mui/material";

const RestaurantLoginPage = () => {
    const [loginData, setLoginData] = useState({ email: "", password: "" });
    const [error, setError] = useState(true);
    const { setToken } = useAuth();

    const handleInput = (name) => {
        return (e) => {
            setLoginData((prev) => {
                const loginData = { ...prev, [name]: e.target.value };
                const { error } = restaurantLoginSchema.validate(loginData);
                setError(error ? error.details[0].message : "");
                return loginData;
            });
        };
    };


    const handleLogin = async () => {
        try {
            const token = await loginRestaurant(loginData);
            setToken("restaurant " + token);
        } catch (err) {
            console.error("Login failed:", err);
            setError("Failed to log in. Please check your credentials.");
        }
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
                Restaurant Login
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
                        {/* Email Field */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="email"
                                label="Email"
                                value={loginData.email}
                                onInput={handleInput("email")}
                                placeholder="Enter your email"
                                variant="outlined"
                                sx={{
                                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#00FF00", // אפקט ניאון במעבר עכבר
                                    },
                                }}
                            />
                        </Grid>

                        {/* Password Field */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="password"
                                label="Password"
                                value={loginData.password}
                                onInput={handleInput("password")}
                                placeholder="Enter your password"
                                variant="outlined"
                                sx={{
                                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                                        borderColor: "#00FF00", // אפקט ניאון במעבר עכבר
                                    },
                                }}
                            />
                        </Grid>

                        {/* Error Message */}
                        {error && (
                            <Typography color="error">
                                {typeof error === "string" && error.length > 0 ? error : ""}
                            </Typography>
                        )}

                        {/* Login Button */}
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={handleLogin}
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
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Box>
    );
};

export default RestaurantLoginPage;
