import React from 'react';
import logo from '../images/logo.png';

const Header = () => (
  <div style={{ textAlign: 'center', padding: '2.5rem 0' }}>
    <img
      src={logo}
      alt="Resin Aura Logo"
      style={{ maxHeight: '400px', width: 'auto' }}
      className="header-logo"
    />
  </div>
);

export default Header; 