import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Stack,
  Chip,
  Pagination,
  Avatar,
  Box
} from '@mui/material'
import React, { useState, useEffect } from 'react';
import swal from '@sweetalert/with-react';
import { useNavigate, useLocation } from 'react-router-dom';



const BookLists = () => {
  const [books, setBooks] = useState([])
  const navigate = useNavigate();
  const location = useLocation();


  useEffect(() => {
    let getData = async () => {
      let response = await fetch("http://localhost:4000/books");
      let data = await response.json();
      setBooks(data);
    }
    getData();
  }, [books])


  let handleDelete = (id, title) => {
    fetch(`http://localhost:4000/books/${id}`, {
      method: 'DELETE',
    })
    swal({
      title: "Are you sure?",
      text: `Once deleted, you will not be able to recover this ${title} Book!`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal(`Poof! Your book ${title} has been deleted permanently!`, {
          icon: "success",
        });
      } else {
        swal(`Your book ${title} is safe!`);
      }
    });
    // alert(`${title} has been permanently deleted`)

  }

  let readMore = (id) => {
    if (location.pathname === '/dashboard/admin/BookLists') {
      navigate(`/dashboard/admin/BookLists/${id}`)
    }
    else if (location.pathname === '/dashboard/user/BookLists') {
      navigate(`/dashboard/user/BookLists/${id}`)
    }
  }


  return (
    <>
      <Box >
        <Typography
          sx={{ fontFamily: 'Poppins, sans-serif', textAlign: 'center' }}
          mt={3}
          variant='h4'
          component='h6'
          color="primary">
          Book Lists {books.length}
        </Typography>
      </Box>

      <Container >
        <Grid
          container
          spacing={5}
          mt={3}>
          {
            books.map(book => (
              <Grid item mt={2} sm={6} xs={12} md={4} lg={3}>
                <Card
                  sx={{ maxWidth: 550 }}
                >

                  <CardMedia
                    // sx={{ display: 'flex', justifyContent: 'start' }}
                    component="img"
                    height="200"
                    image={book.thumbnailUrl}
                    alt={book.title}
                  />
                  <CardContent>
                    <Typography
                      sx={{ fontFamily: 'Poppins, sans-serif' }}
                      alignItems="start"
                      gutterBottom
                      variant="h6"
                      component="h5">
                      {book.title}
                    </Typography>
                    <Stack
                      spacing={1}
                      alignItems="start">
                      <Stack
                        direction="row"
                        spacing={1}>
                        <Chip
                          label={book.categories}
                          color="warning"
                          variant="outlined"
                        />
                      </Stack>
                      <Stack
                        direction='row'
                        spacing={1}
                      >
                        <Chip
                          avatar={<Avatar>A</Avatar>}
                          label={book.authors[0]} />

                        <Chip
                          sx={{ marginLeft: '12px' }}
                          label={book.pageCount}
                          color="info"
                          variant="outlined"
                        />
                      </Stack>
                    </Stack>
                  </CardContent>
                  <CardActions
                    sx={{ padding: '14px' }}
                  >
                    {
                      location.pathname === '/dashboard/admin/BookLists'
                      &&
                      <Button
                      variant='contained'
                      color='error'
                        onClick={() => handleDelete(book.id, book.title)}
                      >
                        Delete
                      </Button>
                    }
                    <Button
                      onClick={() => readMore(book.id)}
                      size="lg"
                      component='a'
                      variant='outlined'
                      sx={{ marginLeft: '19px', fontFamily: 'Poppins, sans-serif' }}
                    >
                      Read More
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))
          }
        </Grid>

      </Container>
    </>
  )
}

export default BookLists;