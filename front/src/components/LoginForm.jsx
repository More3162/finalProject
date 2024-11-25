import React, { useState } from "react";
import { Box, TextField, Button, CircularProgress, Typography } from "@mui/material";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await axios.post("http://localhost:3000/restaurant/resLogin", {
                email,
                password,
            });
            console.log("Login successful:", response.data);
            localStorage.setItem("token", response.data.token);
            setLoading(false);
            // כאן ניתן לבצע ניווט
        } catch (err) {
            console.error(err);
            setError("Login failed. Please check your credentials.");
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                width: "400px",
                padding: "20px",
                borderRadius: "8px",
                boxShadow: "0px 0px 20px 2px #00FF00", // צל נאוני
            }}
        >
            <Typography variant="h5" align="center" gutterBottom color="primary">
                Login to Restaurant
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    color="primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    margin="normal"
                    type="password"
                    color="primary"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <ErrorMessage message={error} />
                <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{
                        marginTop: "20px",
                        boxShadow: "0px 0px 10px #00FF00",
                    }}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} color="secondary" /> : "Login"}
                </Button>
            </form>
        </Box>
    );
};

export default LoginForm;
