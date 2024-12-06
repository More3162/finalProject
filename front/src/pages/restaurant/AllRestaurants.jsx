import { useEffect, useState } from "react";
import { Box, Grid, Card, CardContent, Typography, CircularProgress, CardActionArea } from "@mui/material";
import axios from "axios";
import { getAllRestaurants } from "../../services/restaurant.service";
import { Link } from "react-router-dom";

const AllRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [loading, setLoading] = useState(true);

    // פונקציה למשיכת המסעדות מהשרת
    const fetchRestaurants = async () => {
        try {
            const restaurants = await getAllRestaurants();
            setRestaurants(restaurants);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchRestaurants();
    }, []);

    return (
        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "background.default",
                color: "text.primary",
                p: 2,
            }}
        >
            <Typography variant="h3" sx={{ mb: 4, fontWeight: "bold" }}>
                All Restaurants
            </Typography>

            {loading ? (
                <CircularProgress />
            ) : (
                <Grid container spacing={3} sx={{ maxWidth: 1200 }}>
                    {restaurants.map((restaurant) => (
                        <Grid item xs={12} sm={6} md={4} key={restaurant._id}>
                            <Card
                                sx={{
                                    borderRadius: 2,
                                    boxShadow: 3,
                                    "&:hover": {
                                        boxShadow: 6,
                                    },
                                }}
                            >
                                <CardActionArea
                                    component={Link}
                                    to={`/restaurant/${restaurant._id}/menu`}
                                >
                                    <CardContent>
                                        <Typography variant="h6" component="div" sx={{ mb: 1 }}>
                                            {restaurant.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {`${restaurant.address.street} ${restaurant.address.houseNumber}, ${restaurant.address.city}, ${restaurant.address.country}`}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default AllRestaurants;
