import React from 'react';
import Navbar from './Navbar';
import Herobg from './images/Herobg.png';

const Header = ({ scrollToClothesSelector }) => (
  <header>
    <Navbar scrollToClothesSelector={scrollToClothesSelector} />
    <div
      className="flex flex-col justify-center items-center text-white text-center"
      style={{
        backgroundImage: `url(${Herobg})`,
        height: '60vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div>
        <h1 className="Montserrat font-semibold text-5xl pb-2" style={{ color: 'black' }}>See how clothes fit</h1>
        <h2 className="Montserrat font-semibold text-5xl pb-6" style={{ color: 'black' }}>
          on you <span className="Pacifico font-normal text-5xl pb-6" style={{ color: '#FF5C00' }}>instantly</span>
        </h2>
        <p className="Montserrat font-light pb-4" style={{ color: 'black' }}>Experience our smart fitting room and get quick results with our Virtual Cloth Assistant and find the perfect fit in no time!</p>
        <button
          className="bg-accent/90 hover:bg-accent/100 text-white font-bold py-2 px-4 mt-4 rounded-lg"
          style={{ position: 'relative', right: '4%', zIndex: '5' }}
          onClick={scrollToClothesSelector}
        >
          Select Clothes
        </button>
      </div>
    </div>
  </header>
);

export default Header;
