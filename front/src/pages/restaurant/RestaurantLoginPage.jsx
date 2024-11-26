import { useState } from "react";
import { restaurantLoginSchema } from "../../validation/restaurant.validation";
import { loginRestaurant } from "../../services/restaurant.service";
import { useAuth } from "../../providers/AuthProvider";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";

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
        const token = await loginRestaurant(loginData);
        setToken("restaurant " + token);
    };

    return (
        <Box component="form" noValidate sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
            <Grid container spacing={2}>
                {/* Email */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        type="email"
                        label="Email"
                        value={loginData.email}
                        onInput={handleInput("email")}
                        placeholder="email"
                        variant="outlined"
                    />
                </Grid>

                {/* Password */}
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        type="password"
                        label="Password"
                        value={loginData.password}
                        onInput={handleInput("password")}
                        placeholder="password"
                        variant="outlined"
                    />
                </Grid>

                {/* Error Message */}
                {error && (
                    <Grid item xs={12}>
                        <Typography color="error">{error}</Typography>
                    </Grid>
                )}

                {/* Login Button */}
                <Grid item xs={12}>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        onClick={handleLogin}
                        disabled={!!error}
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RestaurantLoginPage;
