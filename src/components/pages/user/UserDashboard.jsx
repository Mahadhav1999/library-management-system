import { Box, Container } from '@mui/system';
import React from 'react';
import { 
  Routes,
  Route 
} from 'react-router-dom';
import UserNavbar from './UserNavbar';
import UserHome from './UserHome'
import BookLists from '../admin/BookLists';
import ReadBook from '../admin/readBook';

const UserDashboard = () => {
  return (
    <Box>
      <UserNavbar/>
      <Routes>
        <Route path='/' element={<UserHome/>}/>
        <Route path="/BookLists" element={<BookLists/>}/>
        <Route path="/BookLists/:id" element={<ReadBook/>}/>
      </Routes>
    </Box>
  )
}

export default UserDashboard