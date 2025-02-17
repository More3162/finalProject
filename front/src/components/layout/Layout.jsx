import React from "react";
import { Box } from "@mui/material";
import Header from "./Header"; // ייבוא הקובץ Header.jsx
import Footer from "./Footer"; // ייבוא הקובץ Footer.jsx

const Layout = ({ children }) => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh", // מבטיח שגובה הדף יהיה לפחות גובה המסך
            }}
        >
            {/* Header */}
            <Header />

            {/* תוכן מרכזי */}
            <Box sx={{ flex: 1, p: 2 }}>
                {children}
            </Box>

            {/* Footer */}
            <Footer />
        </Box>
    );
};

export default Layout;
