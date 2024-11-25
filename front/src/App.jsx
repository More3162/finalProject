import React, { useState } from 'react';
import { CssBaseline, ThemeProvider, createTheme, Button } from '@mui/material';
import AppRouter from './Router';

const App = () => {
    const [mode, setMode] = useState('dark');

    const theme = createTheme({
        palette: {
            mode,
            background: {
                default: mode === 'dark' ? '#2C2C2C' : '#FFFFFF',
            },
            text: {
                primary: mode === 'dark' ? '#FFF' : '#000',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <header style={{ padding: '10px', textAlign: 'right', background: theme.palette.background.default }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'))}
                >
                    {mode === 'dark' ? 'Light Mode' : 'Dark Mode'}
                </Button>
            </header>
            <AppRouter />
        </ThemeProvider>
    );
};

export default App;
