import React from 'react'
import {
    Typography,
    Container,
    CssBaseline,
    Box,
    Avatar,
    TextField,
    Button,
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {toast} from 'react-toastify';

import { Link, useNavigate } from 'react-router-dom';





const UserLogin = () => {
    // const[email,setEmail] = useState("");
    // const[password,setPassword] = useState("");
    
    const navigate = useNavigate();

    let handleUserLogin = (e) => {
        e.preventDefault();
        toast.success("Logged in as user")
        navigate('/dashboard/user/')
    }

    function Copyright(props) {
        return (
            <Typography 
            variant="body2" 
            color="text.secondary" 
            align="center" {...props}>
                {'Copyright © '}
                <Link 
                color="inherit" 
                to="/">
                    Library Management System
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    const theme = createTheme();

    return (
        <ThemeProvider
            theme={theme}>
            <Container
                component="main"
                maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar
                        sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{ fontFamily: 'Poppins, sans-serif' }}>
                        Welcome Back User
                        <Typography
                            component='h4'
                            p={1}
                            sx={{ textAlign: 'center' }}>
                            Please Log in
                        </Typography>
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={handleUserLogin}
                        noValidate
                        sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                    </Box>
                </Box>
                <Copyright
                    sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    )
}

export default UserLogin