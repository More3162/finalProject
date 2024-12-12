import { useEffect, useState } from "react";
import { contactFormData, getEmptyContact, normalizeContact } from "../../models/contact.model";
import { Box, Grid, TextField, Button, Typography, Paper } from "@mui/material";
import { contactSchema } from "../../validation/contact.validation";
import { useAuth } from "../../providers/AuthProvider";
import { getStoredContact, setStoredContact } from "../../services/contact.service";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { user } = useAuth();
  const defaultData = contactFormData(getStoredContact());
  const [contactData, setContactData] = useState(defaultData || getEmptyContact());
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleInput = (name) => {
    return (e) => {
      setContactData((prev) => {
        const contactData = { ...prev, [name]: e.target.value }; // flat data
        const contact = normalizeContact(contactData); // inflated data
        const { error } = contactSchema.validate(contact);
        setError(error ? error.details[0].message : "");
        return contactData;
      });
    };
  };

  const handleSubmit = async () => {
    const contact = normalizeContact(contactData); // inflated data
    setStoredContact(contact);
    navigate('/checkout/pay');
  };

  useEffect(() => {
    if (user && !defaultData) {
      setContactData(contactFormData(user));
    }
  }, [user]);

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
        Contact Information
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
                value={contactData.first_name}
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
                value={contactData.last_name}
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
                value={contactData.email}
                onInput={handleInput("email")}
                placeholder="Enter your email"
                variant="outlined"
              />
            </Grid>

            {/* Country */}
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Country"
                value={contactData.country}
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
                value={contactData.city}
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
                value={contactData.street}
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
                value={contactData.houseNumber}
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
                value={contactData.phone_number}
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


            {/*  Button */}
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                disabled={!!error}
                sx={{ py: 1.5 }}
              >
                Next
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Box>
  );
};

export default CheckoutPage;
