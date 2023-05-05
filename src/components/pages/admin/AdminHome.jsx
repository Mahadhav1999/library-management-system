import React, { useEffect, useState } from 'react';
import '../../../styles/AdminHome.css'
import { Container, Box } from '@mui/material';
import PropTypes from 'prop-types';



const AdminHome = () => {
  let [books, setBooks] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch('http://localhost:4000/books');
      let data = await response.json();
      setBooks(data);
    }
    fetchData();
  }, [books]);




  return (
    <>
      <Container maxWidth='xl'>
        <div className='container-admin'>
          <div className='admin-title' style={{ top: 'calc(50% - 0px)' }}>
            <span className='title-head'>
              <h1>
                <span className='title'>Admin Dashboard</span>
              </h1>
            </span>
          </div>
        </div>
        <Box >
          <div className="dashboard__cards">
            {
              books.map(data =>
                <div className="dashboard_inner">
                  <div className="dashboard__inner_img">
                  </div>
                  <div className="dashboard__card">

                    <div className="booktitle">
                      {/* <h2><strong>{data.title}</strong></h2> */}
                      <h2><strong>{data.title}</strong></h2>
                    </div>
                    <div className='authors'>
                      <p><strong>By </strong>{data.authors}</p>
                    </div>
                    <div className='desc'>
                      <p>{data.shortDescription}</p>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </Box>
      </Container>
    </>

  )
}

export default AdminHome;