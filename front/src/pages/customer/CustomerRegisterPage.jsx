import { useState } from "react";
import { customerRegisterSchema } from "../../validation/customer.validation";
import { loginCustomer, registerCustomer } from "../../services/customer.service";
import { getEmptyCustomer, normalizeCustomer } from "../../models/customer.model";
import { Box, Grid, TextField, Button, Typography, Paper } from "@mui/material";
import { useAuth } from "../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";


const CustomerRegisterPage = () => {
  const [registerData, setRegisterData] = useState(getEmptyCustomer());
  const [error, setError] = useState(true);
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleInput = (name) => {
    return (e) => {
      setRegisterData((prev) => {
        const registerData = { ...prev, [name]: e.target.value }; // flat data
        const customer = normalizeCustomer(registerData); // inflated data
        const { error } = customerRegisterSchema.validate(customer);
        setError(error ? error.details[0].message : "");
        return registerData;
      });
    };
  };

  const handleRegister = async () => {
    const customer = normalizeCustomer(registerData);
    await registerCustomer(customer);
    const token = await loginCustomer(registerData);
    setToken('customer ' + token);
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
        Customer Registration
      </Typography>

      {/* טופס רישום בעיצוב חדש */}
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 600,
          width: "100%",
          borderRadius: 2,
        }}
      >
        <Box component="form" noValidate>
          <Grid container spacing={2}>
            {/* First Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                value={registerData.first_name}
                onInput={handleInput("first_name")}
                placeholder="Enter your first name"
                variant="outlined"
              />
            </Grid>

            {/* Last Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                value={registerData.last_name}
                onInput={handleInput("last_name")}
                placeholder="Enter your last name"
                variant="outlined"
              />
            </Grid>

            {/* Email */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="email"
                label="Email"
                value={registerData.email}
                onInput={handleInput("email")}
                placeholder="Enter your email"
                variant="outlined"
              />
            </Grid>

            {/* Password */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="password"
                label="Password"
                value={registerData.password}
                onInput={handleInput("password")}
                placeholder="Enter your password"
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
                placeholder="Enter your country"
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
                placeholder="Enter your city"
                variant="outlined"
              />
            </Grid>

            {/* Street */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Street"
                value={registerData.street}
                onInput={handleInput("street")}
                placeholder="Enter your street"
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
                placeholder="Enter your house number"
                variant="outlined"
              />
            </Grid>

            {/* Phone */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Phone Number"
                value={registerData.phone_number}
                onInput={handleInput("phone_number")}
                placeholder="Enter your phone number"
                variant="outlined"
              />
            </Grid>

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
                sx={{ py: 1.5 }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default CustomerRegisterPage;
