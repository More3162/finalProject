import { useState } from "react";
import { customerLoginSchema } from "../../validation/customer.validation";
import { loginCustomer } from "../../services/customer.service";
import { useAuth } from "../../providers/AuthProvider";
import { Box, Grid, TextField, Button, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CustomerLoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState(true);
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleInput = (name) => {
    return (e) => {
      setLoginData((prev) => {
        const loginData = { ...prev, [name]: e.target.value };
        const { error } = customerLoginSchema.validate(loginData);
        setError(error ? error.details[0].message : "");
        return loginData;
      });
    };
  };

  const handleLogin = async () => {
    const token = await loginCustomer(loginData);
    setToken("customer " + token);
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
        Customer Login
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
              />
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
                onClick={handleLogin}
                disabled={!!error}
                sx={{ py: 1.5 }}
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

export default CustomerLoginPage;
