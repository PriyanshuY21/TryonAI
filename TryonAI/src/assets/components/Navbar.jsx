import React from 'react';
import Logo from './images/Logo.png';

const Navbar = ({ scrollToClothesSelector }) => (
  <nav className="flex justify-between items-center p-4 bg-primary/100 shadow-md">
    <div className="flex items-center">
      <img src={Logo} alt="Logo" className="h-10 mr-2 pl-9" />
    </div>
    <button
      className='bg-accent/90 hover:bg-accent/100 text-white font-bold py-2 px-4'
      style={{ position: 'relative', right: '4%', zIndex: '5', borderRadius: '10px' }}
      onClick={scrollToClothesSelector}
    >
      Select Clothes
    </button>
  </nav>
);

export default Navbar;
