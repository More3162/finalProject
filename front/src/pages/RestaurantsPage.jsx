import React from 'react';
import { Box, Typography } from '@mui/material';

const RestaurantsPage = () => {
    return (
        <Box
            sx={{
                textAlign: 'center',
                padding: '20px',
            }}
        >
            <Typography variant="h4" gutterBottom>
                Restaurants Page
            </Typography>
            <Typography variant="body1">
                Browse restaurants and choose your favorite one. This page will be expanded later.
            </Typography>
        </Box>
    );
};

export default RestaurantsPage;
