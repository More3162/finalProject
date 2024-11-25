import React from "react";
import { Typography } from "@mui/material";

const ErrorMessage = ({ message }) => {
    if (!message) return null;

    return (
        <Typography color="error" variant="body2" align="center" sx={{ marginTop: "8px" }}>
            {message}
        </Typography>
    );
};

export default ErrorMessage;
