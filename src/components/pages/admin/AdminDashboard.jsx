import React from 'react';
import AdminNavbar from '../../pages/admin/AdminNavbar';
import AdminHome from '../../pages/admin/AdminHome';
import BookLists from './BookLists';
import AddBooks from '../../pages/admin/AddBooks';
import AddUser from './AddUsers';
import ReadBook from './readBook';
import UserLists from './UserLists';

import { Routes, Route } from 'react-router-dom';


const AdminDashboard = () => {
  return (
    <>
      <AdminNavbar />
      <Routes>
        <Route path='/' element={<AdminHome />} />
        <Route path='/BookLists' element={<BookLists />} />
        <Route path='/AddBooks' element={<AddBooks />} />
        <Route path='/AddUsers' element={<AddUser />} />
        <Route path='/UserLists' element={<UserLists />} />
        <Route path='/BookLists/:id' element={<ReadBook />} />
      </Routes>
    </>
  )
}

export default AdminDashboard