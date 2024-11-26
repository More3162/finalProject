import { useState } from "react";
import { customerRegisterSchema } from "../../validation/customer.validation";
import { registerCustomer } from "../../services/customer.service";
import { getEmptyCustomer, normalizeCustomer } from "../../models/customer.model";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";

const CustomerRegisterPage = () => {
  const [registerData, setRegisterData] = useState(getEmptyCustomer());
  const [error, setError] = useState(true);

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
    const token = await registerCustomer(customer);
    console.log(token);
  };

  return (
    <Box component="form" noValidate sx={{ maxWidth: 600, mx: "auto", mt: 4 }}>
      <Grid container spacing={2}>
        {/* First Name */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="First Name"
            value={registerData.first_name}
            onInput={handleInput("first_name")}
            placeholder="first name"
            variant="outlined"
          />
        </Grid>

        {/* Last Name */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Last Name"
            value={registerData.last_name}
            onInput={handleInput("last_name")}
            placeholder="last name"
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
            value={registerData.password}
            onInput={handleInput("password")}
            placeholder="password"
            variant="outlined"
          />
        </Grid>

        {/* Country */}
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

        {/* City */}
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

        {/* Street */}
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

        {/* House Number */}
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

        {/* Phone Number */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Phone"
            value={registerData.phone_number}
            onInput={handleInput("phone_number")}
            placeholder="phone"
            variant="outlined"
          />
        </Grid>

        {/* Error Message */}
        {error && (
          <Grid item xs={12}>
            <Typography color="error">{error}</Typography>
          </Grid>
        )}

        {/* Register Button */}
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

export default CustomerRegisterPage;
