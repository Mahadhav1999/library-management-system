import * as React from 'react';
import { useState } from 'react';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
} from '@mui/material';
import { FaUserPlus } from "react-icons/fa";
import {toast} from 'react-toastify'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';

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
      </Link>
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

const AddUsers = () => {
  let [name, setName] = useState('')
  let [age, setAge] = useState('')
  let [email, setEmail] = useState('')
  let [phone, setPhone] = useState('')

  let navigate = useNavigate()

  let handleSubmit = (e) => {
    e.preventDefault();
    let userData = { name, email, age, phone }
    fetch('http://localhost:4000/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    })
    toast.success('User added successfully!')
    // alert('user added successfully')
    navigate('/dashboard/admin/UserLists')

  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main', padding: '10px' }}>
            <FaUserPlus />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add the User
          </Typography>
          <Box component="form"
            onSubmit={handleSubmit}
            sx={{ mt: 1 }}>

            <TextField
              margin="normal"
              required
              fullWidth
              value={name} onChange={(e) => setName(e.target.value)}
              type="text"
              label="Enter the Name"
              autoComplete
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              value={age} onChange={(e) => setAge(e.target.value)}
              label="Enter the Age"
              type="text"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              value={email} onChange={(e) => setEmail(e.target.value)}
              label="Enter the email"
              type="text"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              value={phone} onChange={(e) => setPhone(e.target.value)}
              label="Enter the mobile no"
              type="tel"
              minLength='10' maxLength='10'
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add User
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default AddUsers;
