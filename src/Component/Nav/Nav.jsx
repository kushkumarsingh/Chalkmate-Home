import React, {useState} from 'react';
import './Nav.css';

import {Link} from 'react-router-dom'

function Nav() {
  
    const [toggle, setToggle] = useState(false)
    function handleClick() {
      toggle ? setToggle(false) : setToggle(true)
    }

  const [navbar, setNavbar] = useState(false);
  const changeBackground = () => {
      if(window.scrollY>=100){
          setNavbar(true);
      }
      else{
          setNavbar(false);
      }
  };
  window.addEventListener('scroll', changeBackground);

  return (
    <div>
      <div className={!navbar ? 'nav' : 'nav-active'}>
         <div className='logo-section'>
           {!navbar ? <img className='logo' src="Assets/logo-white.svg" alt="" /> : <img className='logo' src="Assets/logo.svg" alt="" />}
        </div>
        <div className={!navbar ? 'navlink' : 'navlink-active'}>
          <div>Who are we</div>
          <div>Getting Started</div>
          <div className={!navbar ? 'signin' : 'signin-active'} style={{cursor: 'pointer'}}> <Link to="/user">Signin</Link></div>
          <div>Join</div>
        </div>
      </div>


        <div className='nav-mobile'>
          <div className='nav-icon'>
            <img src="Assets/logo.svg" alt="" />
            {toggle ? <img className='menu_icon' onClick={handleClick} src="Assets/close.svg" alt='' />
                            : <img className='menu_icon' onClick={handleClick} src="Assets/menu-black.svg" alt='' />}
          </div>
          <div className={`side-nav  ${toggle ? 'side-nav-active': ''}`}>
            <div className='side-nav-links'>
              <div onClick={()=> setToggle(false)}>Who are we</div>
              <div onClick={()=> setToggle(false)}>Getting Started</div>
              <div onClick={()=> setToggle(false)} className=''> <Link to="/user">Signin</Link></div>
              <div onClick={()=> setToggle(false)}>Join</div>
            </div>
          </div>
        </div>
        
    </div>
  );
}

export default Nav;