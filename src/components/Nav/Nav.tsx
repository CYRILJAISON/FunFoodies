import React from 'react';
import { NavItem } from '../NavItems';
import style from './Nav.module.css';
 
function Nav () {
  return (
   <div>
    <div>
      <div className='row'>
        <div>
          <div className={style.logo1}>
            <a href='/home'>
            <img src="/images/mainlogo.png" className={style.mainlogo}/>
            </a>
          </div>
        </div>
      <div>
        <div className={style.logo}>
          <a className='text-decoration-none text-black' href='/home'>Fun Foodies</a>
      </div> 
        </div>
      </div>
    </div>
    <div>
      <div className={style.menu}>
        <NavItem title='Home' url='/home'/>
        <NavItem title='About Us' url='/aboutUs'/>
        <NavItem title='Contact Us' url='/contactUs'/>
        <NavItem title='Register' url='/register'/>
        <NavItem title='Login' url='/login'/>
      </div>
    </div>
   </div>
   
  )
}

export default Nav;
