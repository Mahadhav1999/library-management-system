import * as React from 'react';
import { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  TextareaAutosize
} from '@mui/material';
import {toast} from 'react-toastify';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link,useNavigate} from 'react-router-dom';
import { FaBookReader } from "react-icons/fa";




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

const AddBooks = () => {

  let[title,setTitle]=useState("")
  let[categories,setCategories]=useState("")
  let[authors,setAuthor]=useState("")
  let[pageCount,setPage]=useState("")
  let[shortDescription,setShort]=useState("")
  let[longDescription,setLong]=useState("")
  let[thumbnailUrl,setUrl]=useState("")
  let navigate=useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    let bookData={title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl}
        fetch('http://localhost:4000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookData)
        })
        toast.success('Book added successfully!')
        navigate('/dashboard/admin/BookLists')
  };



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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <FaBookReader />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add the Book
          </Typography>
          <Box component="form" 
          onSubmit={handleSubmit} sx={{ mt: 1 }}>

            <TextField
              margin="normal"
              required
              fullWidth
              value={title} onChange={(e)=>setTitle(e.target.value)}
              type="text"
              label="Book Title"
              autoComplete="title"
              autoFocus="title"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              value={authors} onChange={(e)=>setAuthor(e.target.value)}
              label="Book Author"
              type="text"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              value={categories} onChange={(e)=>setCategories(e.target.value)}
              label="Book Category"
              type="text"
            />

            <TextField
              margin="normal"
              required
              fullWidth
              value={pageCount} onChange={(e)=>setPage(e.target.value)}
              label="Page Count of the Book"
              type="number"
            />

            <TextareaAutosize
              p={3}
              required
              fullWidth
              value={shortDescription} onChange={(e)=>setShort(e.target.value)}
              placeholder='Short Description of the Book'
              type="text"
              minRows={5}
              style={{ width: 396 }}
            />

            <TextareaAutosize
              p={3}
              required
              fullWidth
              value={longDescription} onChange={(e)=>setLong(e.target.value)}
              placeholder='Long Description of the Book'
              type="text"
              minRows={5}
              style={{ width: 396 }}
            />

            <TextField
              margin="normal"
              required
              fullWidth
              value={thumbnailUrl} onChange={(e)=>setUrl(e.target.value)}
              type="text"
              label="Thumbnail Url of the Book"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add Book
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}

export default AddBooks;