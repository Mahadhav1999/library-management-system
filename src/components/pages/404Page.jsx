import { Button, Container, Grid, Typography } from '@mui/material'
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Page404.css';

const PageNotFound = () => {
    return (
        <div>
            <Container
                maxWidth="xl"
                className="error-page"
            >
                <Grid
                    container
                    rowSpacing={0}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid
                        xs={12}
                        sm={12}
                        md={5}
                        lg={5}>
                        <Typography
                            variant='h1'
                            component='h1'
                        >
                            404
                        </Typography>
                    </Grid>

                    <Grid
                        xs={12}
                        sm={12}
                        md={7}
                        lg={7}>
                        <Typography
                            variant='h4'
                            component='h1'
                            sx={{ textTransform: 'uppercase' }}
                        >
                            Page Not Found!
                        </Typography>
                        <Typography
                            variant='body'
                            component='body2'
                            sx={{ textTransform: 'capitalize' }}>
                            The page you are looking for was moved,removed,renamed or might never existed.
                        </Typography>
                        <Button
                            variant='contained'
                            color='primary'
                            component={Link}
                            to='/'
                        >
                            Back to Homepage
                        </Button>
                        <Button
                            component={Link}
                            to='/'
                            variant='outlined'
                            color='inherit'
                        >
                            Contact Us
                        </Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default PageNotFound