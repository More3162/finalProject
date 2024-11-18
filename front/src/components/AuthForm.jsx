import React from 'react';
import { Container, Box, TextField, Button, Typography, Select, MenuItem } from '@mui/material';

const AuthForm = ({ type, onSwitch }) => {
    const isRegister = type === 'register';

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    mt: 5,
                }}
            >
                <Typography variant="h4">{isRegister ? 'Register' : 'Login'}</Typography>
                <TextField label="Email" fullWidth />
                <TextField label="Password" type="password" fullWidth />
                {isRegister && (
                    <Select defaultValue="customer" fullWidth>
                        <MenuItem value="customer">Customer</MenuItem>
                        <MenuItem value="restaurant">Restaurant</MenuItem>
                    </Select>
                )}
                <Button variant="contained" color="primary" fullWidth>
                    {isRegister ? 'Register' : 'Login'}
                </Button>
                <Button onClick={onSwitch}>
                    {isRegister ? 'Already have an account? Login' : 'Don’t have an account? Register'}
                </Button>
            </Box>
        </Container>
    );
};

export default AuthForm;
