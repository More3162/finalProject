import React from 'react';
import { Box, Typography } from '@mui/material';

const OrdersPage = () => {
    return (
        <Box
            sx={{
                textAlign: 'center',
                padding: '20px',
            }}
        >
            <Typography variant="h4" gutterBottom>
                Orders Page
            </Typography>
            <Typography variant="body1">
                Here you can view and manage your orders. This page will be expanded later.
            </Typography>
        </Box>
    );
};

export default OrdersPage;
