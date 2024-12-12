import React, { useEffect, useState } from "react";
import { Drawer, Box, Typography, IconButton, List, ListItem, ListItemText, Button, Badge } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ROUTES } from "../../Router";
import { Link, useLocation } from "react-router-dom";


const ShoppingCart = ({ isOpen, setIsOpen, order, onAdd, onRemove }) => {
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(true);
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    let itemCount = 0;
    let subtotal = 0;

    Object.values(order).forEach((item) => {
        itemCount += item.quantity;
        subtotal += item.price * item.quantity;
    });

    useEffect(() => {
        setIsOpen(itemCount > 0);
    }, [itemCount]);

    useEffect(() => {
        handleClose();
    }, [location]);

    return (
        <>
            {/* כפתור צף לפתיחת העגלה */}
            {itemCount > 0 && (
                <IconButton
                    onClick={handleOpen}
                    sx={{
                        width: 75,
                        height: 75,
                        position: "fixed",
                        bottom: 16,
                        right: 16,
                        zIndex: 1300,
                        backgroundColor: "green", // ירוק בולט
                        color: "white",
                        "&:hover": {
                            backgroundColor: "darkgreen", // ירוק כהה בזמן מעבר עכבר
                        },
                        "& .MuiSvgIcon-root": {
                            fontSize: 40, // גודל האייקון בתוך הכפתור
                        },
                    }}
                >
                    <Badge badgeContent={itemCount} color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>
            )}

            {/* עגלה */}
            <Drawer anchor="right" open={isOpen} onClose={handleClose}>
                <Box sx={{ width: 300, padding: 2 }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6">Shopping Cart</Typography>
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <List>
                        {Object.values(order).map((item) => (
                            <ListItem
                                key={item.id}
                                sx={{ display: "flex", justifyContent: "space-between" }}
                            >
                                <ListItemText
                                    primary={item.name}
                                    secondary={`$${item.price} x ${item.quantity}`}
                                />
                                <Box display="flex">
                                    <IconButton onClick={() => onRemove(item)}>
                                        <RemoveIcon />
                                    </IconButton>
                                    <IconButton onClick={() => onAdd(item)}>
                                        <AddIcon />
                                    </IconButton>
                                </Box>
                            </ListItem>
                        ))}
                    </List>
                    <Typography variant="h6">Subtotal: ${subtotal.toFixed(2)}</Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{ marginTop: 2 }}
                        LinkComponent={Link}
                        to={ROUTES.checkout}
                    >
                        Checkout
                    </Button>
                </Box>
            </Drawer>
        </>
    );
};

export default ShoppingCart;
