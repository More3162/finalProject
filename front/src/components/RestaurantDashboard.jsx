import React from 'react';
import { Container, Box, Typography, Button, Grid } from '@mui/material';

const RestaurantDashboard = () => {
    return (
        <Container>
            <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="h4">Restaurant Dashboard</Typography>
                <Button variant="contained" color="primary">Manage Menu</Button>
                <Button variant="contained" color="secondary">View Orders</Button>
                <Button variant="contained" color="success">Customer Database</Button>
            </Box>
        </Container>
    );
};

export default RestaurantDashboard;
