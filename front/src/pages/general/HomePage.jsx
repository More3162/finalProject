import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";

const HomePage = () => {
    return (
        <Box
            sx={{
                textAlign: "center",
                p: 4,
                backgroundImage: "url('/path-to-background-image.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "#fff",
            }}
        >
            {/* Main Heading */}
            <Typography variant="h2" sx={{ fontWeight: "bold", mb: 4 }}>
                Welcome to the Leading Restaurant Platform!
            </Typography>
            <Typography variant="h5" sx={{ mb: 4 }}>
                Discover new restaurants, place orders effortlessly, or manage your business smarter.
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mb: 6 }}>
                <Button variant="contained" color="primary" size="large">
                    Explore Restaurants
                </Button>
                <Button variant="outlined" color="secondary" size="large">
                    Join as a Restaurant
                </Button>
            </Box>

            {/* Services Overview */}
            <Grid container spacing={4} sx={{ mb: 6 }}>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Quick Orders</Typography>
                            <Typography>Find restaurants and place orders in seconds.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Digital Management</Typography>
                            <Typography>Are you a restaurant owner? Manage your business effortlessly.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="h6">Wide Variety</Typography>
                            <Typography>Access hundreds of restaurants in your area.</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            {/* Testimonials */}
            <Typography variant="h4" sx={{ fontWeight: "bold", mb: 4 }}>
                What People Are Saying
            </Typography>
            <Grid container spacing={4} justifyContent="center">
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="body1">
                                "This platform completely changed how I order food. Simply amazing!"
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic" }}>
                                - A Satisfied Customer
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card>
                        <CardContent>
                            <Typography variant="body1">
                                "Managing my business has never been easier. Thank you!"
                            </Typography>
                            <Typography variant="body2" sx={{ mt: 2, fontStyle: "italic" }}>
                                - A Restaurant Owner
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default HomePage;
