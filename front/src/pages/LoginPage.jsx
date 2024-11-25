import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const LoginPage = () => {
    return (
        <Box
            sx={{
                textAlign: 'center',
                padding: '20px',
                maxWidth: '400px',
                margin: '0 auto',
            }}
        >
            <Typography variant="h4" gutterBottom>
                Login / Register
            </Typography>
            <form>
                <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                    margin="normal"
                />
                <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                />
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    sx={{ marginTop: '20px' }}
                >
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default LoginPage;
