import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
  CardActionArea,
  Stack,
  Chip,
  Avatar,
  Box
} from '@mui/material'
import React, { useState, useEffect } from 'react';
import {  toast } from 'react-toastify';


const UserLists = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let getData = async () => {
      let response = await fetch("http://localhost:4000/users");
      let data = await response.json();
      setUsers(data);
    }
    getData();
  }, [])

  let  handleDeleteUsers = (id,name) => {
        setUsers(users.filter(user => user.id !== id));
         toast.success(`${name} deleted successfully with id - ${id}`);
       }


  return (
    <>
      <Box >
      <Typography
      sx={{fontFamily: 'Poppins, sans-serif',fontWeight:'400',textAlign:'center'}}
      mt={3}
        variant='h4'
        component='h6'>
        Users Lists {users.length}
      </Typography>
      </Box>

      <Container>
        <Grid
          container
          spacing={1}
          mt={3}>
          {
            users.map(user => (
              <Grid item mt={2} sm={6} xs={12} md={4} lg={3}>
                <Card
                elevation={3}
                  sx={{ maxWidth: 550 }}
                >
                  <CardActionArea>
                    <CardContent>
                      <Typography
                       sx={{fontFamily: 'Poppins, sans-serif'}}
                        alignItems="start"
                        gutterBottom
                        variant="h6"
                        mr={5}
                        component="h5">

                        {user.name}
                      </Typography>
                      <Stack 
                      spacing={1} 
                      alignItems="start">
                        <Stack 
                        direction="row" 
                        spacing={1}>
                          <Chip
                            label={user.age}
                            color="warning"
                            variant="outlined"
                          />
                        </Stack>
                        <Stack 
                        direction='row' 
                        spacing={1}>
                          <Chip avatar={<Avatar>E</Avatar>} label={user.email} />
                          <Chip
                            sx={{ marginLeft: '10spx' }}
                            label={user.phoneNumber}
                            color="info"
                            variant="outlined"
                          />
                        </Stack>
                      </Stack>
                    </CardContent>
                    <CardActions
                      sx={{ padding: '14px' }}>
                      <Button
                       sx={{fontFamily: 'Poppins, sans-serif'}}
                        size="lg"
                        variant='outlined'
                        color='error'
                        onClick={() => handleDeleteUsers(user.id,user.name)}
                      >
                        Delete
                      </Button>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </>
  )
}

export default UserLists;






