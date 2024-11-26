import React from "react";
import { Typography } from "@mui/material";


const AboutUs = ({ isDarkMode, toggleDarkMode, userType }) => {
    return (
        <>
            <Typography variant="h3" sx={{ mb: 4, textAlign: "center" }}>
                About Us
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center", mb: 2 }}>
                Welcome to our platform! We are dedicated to connecting food lovers with their favorite restaurants.
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
                Our mission is to make dining experiences easy, enjoyable, and accessible for everyone.
            </Typography>
        </>
    );
};

export default AboutUs;
