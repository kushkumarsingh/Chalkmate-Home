import React, {useState} from 'react';
import './Nav.css';

function Nav() {
 
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
      <div className={!navbar ? 'header' : 'header-active'}>
        <div className='logo-section'>
           {!navbar ? <img className='logo' src="Assets/logo-white.svg" alt="" /> : <img className='logo' src="Assets/logo.svg" alt="" />}
        </div>
        <div className={!navbar ? 'menu' : 'menu-active'}>
          <div>Who are we</div>
          <div>Getting Started</div>
          <div className={!navbar ? 'signin' : 'signin-active'}>Signin</div>
          <div>Join</div>
        </div>
      </div>
  );
}

export default Nav;