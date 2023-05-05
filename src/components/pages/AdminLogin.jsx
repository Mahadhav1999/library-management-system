import {
    Typography,
    Container,
    CssBaseline,
    Box,
    Avatar,
    TextField,
    Button,
} from '@mui/material';
// import MuiAlert from '@mui/material/Alert'
import {  toast } from 'react-toastify';


import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


const AdminLogin = () => {
    // const [open, setOpen] = React.useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    let handleAdminLogin = (e) => {
        e.preventDefault();
        setEmail("")// for clearing the form values
        setPassword("")// for clearing the form values


        //default email and password for the admin to allow the access
        if (email === "admin@gmail.com" && password === "admin") {
            toast.success('Logged in as admin')
            navigate('/dashboard/admin')
            // setOpen(true);
        }
        else {
            toast.error ( "Oops It's looks like you are not authenticated!" )
            // alert("Access Denied")
        }
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
            theme={theme}
        >
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

                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography component="h1" variant="h5" sx={{ fontFamily: 'Poppins, sans-serif' }}>
                        Welcome Back Admin
                        <Typography component='h4' p={1} sx={{ textAlign: 'center' }}>
                            Please Log in
                        </Typography>
                    </Typography>

                    <Box
                        component="form"
                        onSubmit={handleAdminLogin}
                        noValidate sx={{ mt: 1 }}
                    >
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={email}
                            label="Email Address"
                            autoComplete
                            onChange={(e) => setEmail(e.target.value)}
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            value={password}
                            label="Password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
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
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    )
}

export default AdminLogin