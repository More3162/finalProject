import React from "react";
import { Typography } from "@mui/material";


const PrivacyPolicy = ({ isDarkMode, toggleDarkMode, userType }) => {
    return (
        < >
            <Typography variant="h3" sx={{ mb: 4, textAlign: "center" }}>
                Privacy Policy
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center", mb: 2 }}>
                We are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard
                your personal information when you use our platform.
            </Typography>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
                We only collect necessary information to improve your experience. By using our platform, you agree to
                the terms outlined in this policy.
            </Typography>
        </>
    );
};

export default PrivacyPolicy;
