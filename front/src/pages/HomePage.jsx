import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';

const HomePage = () => {
    return (
        <Box
            sx={{
                textAlign: 'center',
                padding: '20px',
            }}
        >
            <Typography variant="h3" gutterBottom>
                Welcome to Our Service
            </Typography>
            <Typography variant="h6" gutterBottom>
                Please login or register to continue.
            </Typography>
            <Box sx={{ marginTop: '20px' }}>
                <Link to="/login">
                    <Button variant="contained" color="primary" sx={{ marginRight: '10px' }}>
                        Login / Register
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default HomePage;
