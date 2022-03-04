import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <header className='header'>
      <h1 className='header__title'>Legal aid for Ukraine</h1>
      <h2 className='header__subtitle'>
        Find legal assistance for Ukrainian citizens in Poland
      </h2>
    </header>
  );
}

export default Header;
