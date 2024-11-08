import React from 'react';
import './Header.css';

const Header = () => {

  return (
    <header className="header">
      <div className="logo">
        <img src="https://png.pngtree.com/png-clipart/20210516/original/pngtree-red-jasmine-flower-pictures-for-romantic-events-png-image_6276122.png" alt="Logo" />
      </div>
      <nav>
        <ul>
          <li><a href="#home">Inicio</a></li>
          <li><a href="#section1">Sección 1</a></li>
          <li><a href="#section2">Sección 2</a></li>
          <li><a href="#section3">Sección 3</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
