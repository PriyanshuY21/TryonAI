import React from 'react';
import Cloth1 from './images/Cloth1.png';
import Cloth2 from './images/Cloth2.png';
import Cloth3 from './images/Cloth3.png';
import Cloth4 from './images/Cloth4.png';
import Cloth5 from './images/Cloth5.png';
import Cloth6 from './images/Cloth6.png';
import Cloth7 from './images/Cloth7.png';
import Cloth8 from './images/Cloth8.png';
import Cloth9 from './images/Cloth9.png';

function ClothesSelector({ setSelectedCloth, scrollToUpload }) {
  const imageData = [
    { id: 1, title: 'Lymio', subtitle: 'Casual T-Shirt for Women', src: Cloth1 },
    { id: 2, title: 'Lymio', subtitle: 'Casual T-Shirt for Women', src: Cloth2 },
    { id: 3, title: 'Lymio', subtitle: 'Casual T-Shirt for Women', src: Cloth3 },
    { id: 4, title: 'Lymio', subtitle: 'Casual T-Shirt for Women', src: Cloth4 },
    { id: 5, title: 'Lymio', subtitle: 'Casual T-Shirt for Women', src: Cloth5 },
    { id: 6, title: 'Lymio', subtitle: 'Casual T-Shirt for Women', src: Cloth6 },
    { id: 7, title: 'Lymio', subtitle: 'Casual T-Shirt for Women', src: Cloth7 },
    { id: 8, title: 'Lymio', subtitle: 'Casual T-Shirt for Women', src: Cloth8 },
    { id: 9, title: 'Lymio', subtitle: 'Casual T-Shirt for Women', src: Cloth9 },
  ];

  const handleImageClick = (image) => {
    setSelectedCloth(image);
    scrollToUpload();
  };

  return (
    <div className="p-5">
      <div className="flex justify-center">
        <h1 className="Montserrat font-semibold text-5xl pb-6" style={{ color: 'black' }}>
          Choose
          <span className="Montserrat font-semibold text-5xl pb-6 pl-4 pr-4" style={{ color: '#FF5C00' }}>
            Your
          </span>
          <span className="Montserrat font-semibold text-5xl pb-6" style={{ color: 'black' }}>
            Clothes
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-5 mb-2">
        {imageData.map((image) => (
          <div
            key={image.id}
            className="rounded-lg text-center cursor-pointer transform transition-transform duration-200 hover:scale-105"
            onClick={() => handleImageClick(image)}
          >
            <img className="w-full h-[34rem]" src={image.src} alt={image.title} />
            <h2 className="Montserrat font-semibold text-4xl pb-2" style={{ color: '#FF5C00', marginTop: '-4.5rem' }}>
              {image.title}
            </h2>
            <p className="Montserrat font-normal text-2xl pb-1" style={{ color: 'black' }}>
              {image.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClothesSelector;
