import React from "react";
import {
    Drawer,
    Box,
    Typography,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Button,
    Badge,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const ShoppingCart = ({ isOpen, onClose, onOpen, order, onAdd, onRemove }) => {
    const itemCount = Object.values(order).reduce(
        (total, item) => total + item.quantity,
        0
    );

    const subtotal = Object.values(order).reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <>
            {/* כפתור צף לפתיחת העגלה */}
            {itemCount > 0 && (
                <IconButton
                    onClick={onOpen}
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
            <Drawer anchor="right" open={isOpen} onClose={onClose}>
                <Box sx={{ width: 300, padding: 2 }}>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6">Shopping Cart</Typography>
                        <IconButton onClick={onClose}>
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
                                <Box>
                                    <IconButton onClick={() => onRemove(item)}>-</IconButton>
                                    <IconButton onClick={() => onAdd(item)}>+</IconButton>
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
                    >
                        Checkout
                    </Button>
                </Box>
            </Drawer>
        </>
    );
};

export default ShoppingCart;
