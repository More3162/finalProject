import React from 'react';
import { Box, Typography, Button, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom'; // Link from react-router-dom
import { ROUTES } from '../../Router'; // Import the ROUTES

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
                &copy; {new Date().getFullYear()} Eat Now. All rights reserved.
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
                <Button component={Link} to={ROUTES.about} color="inherit">
                    About Us
                </Button>
                <Button component={Link} to={ROUTES.privacy} color="inherit">
                    Privacy Policy
                </Button>
                <Button component={Link} to={ROUTES.contact} color="inherit">
                    Contact
                </Button>
            </Box>
        </Box>
    );
};

export default Footer;
