import React from 'react';
import { Box, Typography, Link, useMediaQuery } from '@mui/material';

const Footer = () => {
    const isMobile = useMediaQuery('(max-width:600px)');

    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'primary.main',
                color: 'white',
                py: 3,
                mt: 'auto',
                textAlign: 'center',
            }}
        >
            <Typography variant="body2" sx={{ mb: 1 }}>
                &copy; {new Date().getFullYear()} My Restaurant. All rights reserved.
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2,
                }}
            >
                <Link href="/about" color="inherit" underline="hover">
                    About Us
                </Link>
                <Link href="/privacy" color="inherit" underline="hover">
                    Privacy Policy
                </Link>
                <Link href="/contact" color="inherit" underline="hover">
                    Contact
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;
