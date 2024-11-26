import React from "react";
import { Typography, Box, TextField, Button } from "@mui/material";


const Contact = ({ isDarkMode, toggleDarkMode, userType }) => {
    return (
        <>
            <Typography variant="h3" sx={{ mb: 4, textAlign: "center" }}>
                Contact Us
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center", mb: 4 }}>
                Have a question or feedback? We'd love to hear from you! Fill out the form below, and we'll get back to
                you as soon as possible.
            </Typography>
            <Box
                component="form"
                sx={{
                    maxWidth: 600,
                    mx: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                }}
            >
                <TextField label="Your Name" variant="outlined" fullWidth />
                <TextField label="Your Email" variant="outlined" fullWidth />
                <TextField label="Message" variant="outlined" fullWidth multiline rows={4} />
                <Button variant="contained" color="primary" size="large">
                    Submit
                </Button>
            </Box>
        </>
    );
};

export default Contact;
