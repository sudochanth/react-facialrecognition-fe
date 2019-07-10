import React from 'react';
import Tilt from 'react-tilt';
import logo from './logo.png';
import './Logo.css'

const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max : 75 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3 logo-container">
          <img className="logo-crescent" style={{ paddingTop: '5px'}} src={logo} alt="crescent" />
          <span className="s">S</span>
        </div>
      </Tilt>
    </div>
  )
}

export default Logo;