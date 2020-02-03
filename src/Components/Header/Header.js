import React from "react";
import './Header.css';
import az from '../../images/az.png' 

const Header = () => {
  return (
    <div className='headerSec'>
      <header>
        <img className='logo'src={az} alt='logo'/>
        <div className="title"><h1><span className='heading'>Arizona </span>Hiking Trails</h1></div>
      </header>
    </div>
  );
};

export default Header;
