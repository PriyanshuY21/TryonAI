import React, { useRef, useState } from 'react';
import Header from './assets/components/Header.jsx';
import ClothesSelector from './assets/components/ClothesSelector.jsx';
import Upload from './assets/components/Upload.jsx';
import Image from './assets/components/Image.jsx';
import Why from './assets/components/Why.jsx';
import Footer from './assets/components/Footer.jsx';

function App() {
  const [selectedCloth, setSelectedCloth] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null); 
  const clothesSelectorRef = useRef(null);
  const uploadRef = useRef(null);
  const imageRef = useRef(null); 
  
  const scrollToClothesSelector = () => {
    clothesSelectorRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToUpload = () => {
    uploadRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <Header scrollToClothesSelector={scrollToClothesSelector} />
      <div ref={clothesSelectorRef}>
        <ClothesSelector setSelectedCloth={setSelectedCloth} scrollToUpload={scrollToUpload} />
      </div>
      <div ref={uploadRef}>
        <Upload 
          selectedCloth={selectedCloth} 
          scrollToClothesSelector={scrollToClothesSelector} 
          setSelectedImage={setSelectedImage} 
          imageRef={imageRef} 
        />
      </div>
      <div ref={imageRef}> 
        <Image 
          selectedImage={selectedImage} 
          scrollToClothesSelector={scrollToClothesSelector} 
        />
      </div>
      <Why />
      <Footer />
    </div>
  );
}

export default App;
