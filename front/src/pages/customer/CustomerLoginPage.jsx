import { useState } from "react";
import { customerLoginSchema } from "../../validation/customer.validation";
import { loginCustomer } from "../../services/customer.service";
import { useAuth } from "../../providers/AuthProvider";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";

const CustomerLoginPage = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [error, setError] = useState(true);
  const { setToken } = useAuth();

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
  };

  return (
    <Box component="form" noValidate sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <Grid container spacing={2}>
        {/* Email Field */}
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

        {/* Password Field */}
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

export default CustomerLoginPage;
