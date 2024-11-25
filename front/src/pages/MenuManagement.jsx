import React, { useState, useEffect } from 'react';
import { Box, Button, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import axios from 'axios';

const MenuManagement = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true);

    // שליפת פריטים מהתפריט
    const fetchMenuItems = async () => {
        try {
            const response = await axios.get('http://localhost:3000/menu/restaurantId', {
                headers: { 'x-auth-token': localStorage.getItem('token') }, // טוקן אימות
            });
            setMenuItems(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching menu items:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMenuItems();
    }, []);

    return (
        <Box sx={{ padding: '20px' }}>
            <Typography variant="h4" sx={{ marginBottom: '20px' }}>
                Manage Your Menu
            </Typography>
            {loading ? (
                <Typography>Loading menu items...</Typography>
            ) : (
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Category</TableCell>
                            <TableCell>Price</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {menuItems.map((item) => (
                            <TableRow key={item._id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.category}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" sx={{ marginRight: '10px' }}>
                                        Edit
                                    </Button>
                                    <Button variant="contained" color="error">
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}
            <Button variant="contained" color="success" sx={{ marginTop: '20px' }}>
                Add New Item
            </Button>
        </Box>
    );
};

export default MenuManagement;
