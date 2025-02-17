import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton, Button, Drawer, List, ListItem, ListItemText, Box, useMediaQuery, Switch } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../providers/ThemeProvider";
import { useAuth } from "../../providers/AuthProvider";

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const isMobile = useMediaQuery("(max-width:600px)");
    const { isDarkMode, toggleDarkMode } = useTheme();
    const { user, setToken } = useAuth();
    const navigate = useNavigate();

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setDrawerOpen(open);
    };

    // קישורים דינמיים בהתאם לסוג המשתמש
    const menuItems = user?.type === "restaurant" ? [
        { text: "Menu", link: "/menu" },
        { text: "Orders", link: "/orders" },
        //{ text: "Dashboard", link: "/dashboard" },
    ] : user?.type === "customer" ? [
        { text: "Home", link: "/" },
        { text: "Restaurants", link: "/restaurants" },
        { text: "Orders", link: "/orders" },
    ] : [
        { text: "Home", link: "/" },
        { text: "Login", link: "/customer/login" },
        { text: "Register", link: "/customer/register" },
    ];

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                {/* לוגו */}
                <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
                    <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
                        <img
                            src="/images/eatNowLogoHD.png"
                            alt="Logo"
                            style={{ height: 100, marginRight: 8 }}
                        />
                        <Typography variant="h6" sx={{ color: "inherit", textDecoration: "none" }}>
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
                ) : <>
                    {
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
                    }
                    {user &&
                        <Button color="inherit" onClick={() => {
                            setToken(null);
                            navigate('/');
                        }}>
                            Logout
                        </Button>
                    }
                </>}
            </Toolbar>
        </AppBar>
    );
};

export default Header;
