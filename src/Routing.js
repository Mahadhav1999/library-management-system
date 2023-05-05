import './App.css';
import Home from './components/pages/Home';
import AdminLogin from './components/pages/AdminLogin';
import UserLogin from './components/pages/UserLogin';
import AdminDashboard from './components/pages/admin/AdminDashboard';
import UserDashboard from './components/pages/user/UserDashboard'
// import Page404 from './components/pages/404Page';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Routing() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/login/admin' element={<AdminLogin />} />
          <Route path='/login/user' element={<UserLogin />} />
          <Route path='/dashboard/admin/*' element={<AdminDashboard />} />
          <Route path='/dashboard/user/*' element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default Routing;
