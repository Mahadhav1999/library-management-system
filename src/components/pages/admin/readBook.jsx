import { Box, Typography ,Container} from '@mui/material';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';


const ReadBook = () => {
    const [book, setBook] = useState([]);
    //to get route params
    const params = useParams();

    useEffect(() => {
        let getData = async () => {
            let res = await fetch(`http://localhost:4000/books/${params.id}`);
            let data = await res.json();
            setBook(data);
        }
        getData();
    })


    return (
        <Box >
            <Typography
                variant='h4'
                sx={{
                    textAlign: 'center',
                    marginTop: '10px',
                    padding: '10px',
                    fontFamily: 'Poppins, sans-serif'
                }}
            >
                Read The Book
            </Typography>
            <Container>
                <Typography
                    variant='h4'
                    sx={{fontFamily: 'Poppins, sans-serif'}}
                >
                    {book.title}
                </Typography>
                <Typography
                    component='p'
                    sx={{fontFamily: 'Poppins, sans-serif'}}
                >
                    {book.shortDescription}
                </Typography>
                <br />

                <Box>
                    <Typography
                        component='p'
                    sx={{fontFamily: 'Poppins, sans-serif'}}
                    >{book.longDescription}
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default ReadBook;