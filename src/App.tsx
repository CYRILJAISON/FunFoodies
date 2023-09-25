import React from 'react';
import Nav from './components/Nav/Nav';
import HomePage from './HomePage/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ContactUs } from './components/ContactUs/ContactUs';
import { About } from './components/About/AboutUs';
import { Categories } from './components/Categories/Categories';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import EmplyLogin from './components/EmployeeLoginIn/EmplyLogin';
import Dashboard from './HomePage/DashBoard/DashBorad';
import Login from './Login/Login';
import Logout from './Logout/Logout';


function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path='/home' element= {<HomePage />} />
        <Route path='/contactUs' element= {<ContactUs />} />
        <Route path='/categories' element= {<Categories />} />
        <Route path='/aboutUs' element= {<About />} />
        <Route path='/emplyLogin' element= {<EmplyLogin />} />
        <Route path='/login' element= {<Login />} />
        <Route path='/register' element= {<Register />} />
        <Route path='/dashboard' element= {<Dashboard />} />
        <Route path='/home' element= {<Logout />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
