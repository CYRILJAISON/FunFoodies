import React from 'react';
import Nav from './components/Nav/Nav';
import HomePage from './HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactUs } from './components/ContactUs/ContactUs';
import { About } from './components/About/AboutUs';
import { Categories } from './components/Categories/Categories';
import SignIn from './components/SignIn/SignIn';
import EmplyLogin from './components/EmployeeLoginIn/EmplyLogin';
import Dashboard from './HomePage/AdminDashBoard/DashBorad';
import Login from './Login/Login';
import ClientDb from './HomePage/ClientDashBoard/ClientDb';
import Logout from './Logout/Logout';
import PartnerDb from './HomePage/PartnerDashBoard/PartnerDb';
import Forgot from './components/ForgotPassword/Forgot';
import RegisterPage from './components/Register/RegisterPage';

function App() {
  return (
    <div>
      <Nav />
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/home' element= {<HomePage />} />
        <Route path='/contactUs' element= {<ContactUs />} />
        <Route path='/categories' element= {<Categories />} />
        <Route path='/aboutUs' element= {<About />} />
        <Route path='/emplyLogin' element= {<EmplyLogin />} />
        <Route path='/login' element= {<Login />} />
        <Route path='/registerpage' element= {<RegisterPage />} />
        <Route path='/dashboard' element= {<Dashboard />} />
        <Route path='/home' element= {<Logout />} />
        <Route path='/clientdb' element= {<ClientDb />} />
        <Route path='/partnerdb' element= {<PartnerDb />} />
        <Route path='/forgot' element= {<Forgot />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
