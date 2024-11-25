import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CssBaseline, ThemeProvider, createTheme, Button, Box } from '@mui/material';

const AppWrapper = () => {
    const [mode, setMode] = useState('dark'); // ברירת מחדל מצב כהה

    // יצירת Theme מותאם אישית
    const theme = createTheme({
        palette: {
            mode,
            background: {
                default: mode === 'dark' ? '#2C2C2C' : '#FFFFFF', // אפור כהה או לבן
            },
            text: {
                primary: mode === 'dark' ? '#ADD8E6' : '#001F54', // כחול בהיר או כחול כהה
            },
            primary: {
                main: mode === 'dark' ? '#ADD8E6' : '#001F54', // צבעים לכפתורים
            },
        },
    });

    // עדכון סגנונות הרקע והטקסט של body ו-html
    useEffect(() => {
        document.documentElement.style.backgroundColor = theme.palette.background.default;
        document.documentElement.style.color = theme.palette.text.primary;
        document.body.style.backgroundColor = theme.palette.background.default;
        document.body.style.color = theme.palette.text.primary;
    }, [theme.palette.background.default, theme.palette.text.primary]);

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Box sx={{ position: 'absolute', top: '10px', right: '10px' }}>
                <Button variant="contained" color="primary" onClick={toggleMode}>
                    {mode === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </Button>
            </Box>
            <App />
        </ThemeProvider>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AppWrapper />
    </React.StrictMode>
);
