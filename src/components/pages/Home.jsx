import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography
} from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaUserAlt, FaUserLock, FaUserPlus, FaUsers, FaUserTie } from "react-icons/fa";
import '../../styles/Home.css';


const Home = () => {
  return (
    <Container className="container-bg">

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          placeContent: 'center',
          '& > :not(style)': {
            m: 1,
            width: 550,
            height: 250,
            margin:'175px auto'
          },
        }}
      >
        <Card sx={{ maxWidth: 560}}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" p={2} sx={{ fontFamily: 'Poppins, sans-serif',textAlign:'center' }}>
              Library Management System
            </Typography>
          </CardContent>
          <Stack spacing={3} direction='row' justifyContent='space-evenly' alignItems="center">
            <FaUserTie style={{ fontSize: '29px' }} />
            <FaUsers style={{ fontSize: '30px' }} />

            {/* <AccountCircleIcon />
          <AccountCircleIcon sx={{fontSize:'30px'}}/> */}

          </Stack>

          <CardActions sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', margin: '10px auto' }}>
            <Button
              mb={6}
              sx={{ textDecoration: 'none' }}
              as={Link} to='/login/admin'
              variant="contained"
              size='large'>
                Admin
                </Button>
            <Button
              sx={{ textDecoration: 'none' }}
              as={Link} to='/login/user'
              variant="outlined"
              size='large'
            >User
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  )
}

export default Home;