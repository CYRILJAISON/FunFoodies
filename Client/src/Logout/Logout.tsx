import React from 'react'
import { Route } from 'react-router-dom';
import Login from '../Login/Login';

const Logout = () => {
  return (
    <div className='logout'>
        <Route path='/logout' element={<Login />} />
    </div>
  )
}
export default Logout;