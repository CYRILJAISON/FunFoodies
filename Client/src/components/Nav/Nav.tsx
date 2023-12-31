import React from 'react';
import { NavItem } from '../NavItems';
import style from './Nav.module.css';
 
function Nav () {
  return (
   <div>
      <div className='row'>
        <div className={style.logo1}>
            <a href='/home'> 
            <img src="/images/mainlogo.png" className={style.mainlogo}/>
            </a>
        </div>
      <div>
        <div className={style.logo}>
          <a className='text-decoration-none d-flex text-black' href='/home'>Fun Foodies</a>
        </div> 
      </div>
      </div>
    <div>
      <div className={style.menu}>
        <NavItem title='Home' url='/home'/>
        <NavItem title='About Us' url='/aboutUs'/>
        <NavItem title='Contact Us' url='/contactUs'/>
        <NavItem title='RegisterPage' url='/registerPage'/>
        <NavItem title='Login' url='/login'/>
      </div>
    </div>
   </div>
   
  )
}

export default Nav;
