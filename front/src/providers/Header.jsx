import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, Box, useMediaQuery, Switch } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const Header = ({ isDarkMode, toggleDarkMode, userType }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width:600px)");

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setDrawerOpen(open);
    };

    // קישורים דינמיים בהתאם לסוג המשתמש
    const menuItems = userType === "restaurant"
        ? [
            { text: "Dashboard", link: "/dashboard" },
            { text: "Orders", link: "/orders" },
            { text: "Menu", link: "/menu" },
            { text: "Profile", link: "/profile" },
        ]
        : userType === "customer"
            ? [
                { text: "Home", link: "/" },
                { text: "Restaurants", link: "/restaurants" },
                { text: "Orders", link: "/orders" },
                { text: "Profile", link: "/profile" },
            ]
            : [
                { text: "Home", link: "/" },
                { text: "Login", link: "/login" },
                { text: "Register", link: "/register" },
            ];

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                {/* לוגו */}

                <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                    <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                        <img
                            src="/public/images/EatNowLogo.png"
                            alt="Logo"
                            style={{ height: 40, marginRight: 8 }}
                        />
                        <Typography variant="h6" sx={{ color: "inherit" }}>
                            Eat Now
                        </Typography>
                    </Link>
                </Box>
                {/* כפתור מצב כהה/בהיר */}
                <Box sx={{ display: "flex", alignItems: "center", mr: 2 }}>
                    <Typography variant="body2" sx={{ mr: 1 }}>
                        {isDarkMode ? "Dark" : "Light"}
                    </Typography>
                    <Switch checked={isDarkMode} onChange={toggleDarkMode} />
                </Box>

                {isMobile ? (
                    <>
                        {/* תפריט המבורגר במסכים קטנים */}
                        <IconButton color="inherit" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                            <Box
                                sx={{ width: 250 }}
                                role="presentation"
                                onClick={toggleDrawer(false)}
                                onKeyDown={toggleDrawer(false)}
                            >
                                <List>
                                    {menuItems.map((item) => (
                                        <ListItem button component={Link} to={item.link} key={item.text}>
                                            <ListItemText primary={item.text} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </Drawer>
                    </>
                ) : (
                    // ניווט מלא במסכים גדולים
                    menuItems.map((item) => (
                        <Button
                            key={item.text}
                            component={Link}
                            to={item.link}
                            color="inherit"
                        >
                            {item.text}
                        </Button>
                    ))
                )}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
