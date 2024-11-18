import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, Button } from '@mui/material';

const restaurants = [{ name: 'Pizza Place', description: 'Best pizza in town!' }];

const CustomerDashboard = () => {
    return (
        <Container>
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4">Available Restaurants</Typography>
                <Grid container spacing={3} sx={{ mt: 2 }}>
                    {restaurants.map((restaurant, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card>
                                <CardContent>
                                    <Typography variant="h5">{restaurant.name}</Typography>
                                    <Typography>{restaurant.description}</Typography>
                                    <Button variant="contained" color="primary" sx={{ mt: 1 }}>
                                        View Menu
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default CustomerDashboard;
