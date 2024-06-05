import React, { useState, useEffect } from 'react';
import ImageNS from './images/ImageNS.png';
import Add from './images/Addimg.png';
import Added from './images/Added.png';

const Upload = ({ selectedCloth, scrollToClothesSelector, setSelectedImage, imageRef }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedImageName, setUploadedImageName] = useState('');
  const [isGenerateActive, setIsGenerateActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsGenerateActive(!!selectedCloth && !!uploadedImage);
  }, [selectedCloth, uploadedImage]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) {
        setError('File size should be less than 10MB');
        return;
      }
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        setError('File type should be JPEG or PNG');
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
        setUploadedImageName(file.name);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateImage = () => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedImage(uploadedImage);
      setIsLoading(false);
      imageRef.current.scrollIntoView({ behavior: 'smooth' }); 
    }, 7000);
  };

  return (
    <div className={`container mx-auto text-center p-6 relative ${isLoading ? 'opacity-50' : ''}`}>
      {isLoading && (
        <div className="fixed inset-0 bg-primary bg-opacity-50 flex flex-col items-center justify-center z-50">
          <h2 className="text-accent text-4xl mb-4">Generating Image</h2>
          <p className="text-black mb-2">Wait for some time......</p>
          <div className="loader"></div>
        </div>
      )}
      <div className="flex justify-center">
        <h1 className="Montserrat font-semibold text-4xl sm:text-5xl pb-6 text-black">
          Upload
          <span className="Montserrat font-semibold text-4xl sm:text-5xl pb-6 pl-4 pr-4 text-orange-500">Your</span>
          <span className="Montserrat font-semibold text-4xl sm:text-5xl pb-6 text-black">Image</span>
        </h1>
      </div>
      <div className="flex justify-center items-center mt-10 space-x-20">
        <div className="border bg-cloth rounded-2xl border-gray-300 p-6 w-[30rem] flex flex-col justify-center items-center relative">
          {selectedCloth ? (
            <>
              <img src={selectedCloth.src} alt={selectedCloth.title} className="w-full h-[32rem] -mb-10" />
              <h2 className="Montserrat font-semibold text-4xl pb-2" style={{ color: '#FF5C00' }}>
                {selectedCloth.title}
              </h2>
              <p className="Montserrat font-normal text-2xl pb-1" style={{ color: 'black' }}>{selectedCloth.subtitle}</p>
              <p className="text-gray-500 opacity-65 mt-4">
                <span className="text-accent cursor-pointer" onClick={scrollToClothesSelector}>Select another image</span>
              </p>
              {uploadedImage && (
                <div className="absolute top-4 right-4 w-[5rem] h-[5rem] border-2 border-black">
                  <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-cover" />
                </div>
              )}
            </>
          ) : (
            <>
              <div className="text-6xl text-gray-300 mb-4">
                <img src={ImageNS} alt="Logo" className="w-[9rem] h-[9rem]" />
              </div>
              <p className="Montserrat font-medium text-2xl pb-2">No cloth selected</p>
              <p className="text-gray-500 opacity-65"> Please <span className="text-accent cursor-pointer" onClick={scrollToClothesSelector}>select</span> cloth from the clothes section</p>
            </>
          )}
        </div>
        <div className="border border-dashed border-black p-6 w-[28rem] h-[25rem] flex flex-col justify-center items-center">
          <p className="Montserrat font-semibold text-3xl mb-4 text-accent">Virtual Try-On</p>
          <img src={uploadedImage ? Added : Add} alt="Upload status" className={`w-[6rem] h-[6rem] transition-opacity duration-300 ${uploadedImage ? 'opacity-100' : 'opacity-50'}`} />
          <input
            type="file"
            id="upload"
            accept="image/png, image/jpeg"
            className="hidden"
            disabled={!selectedCloth}
            onChange={handleImageUpload}
          />
          <label htmlFor="upload" className={`bg-accent/90 hover:bg-accent/100 text-white font-normal py-2 px-4 mt-4 rounded-lg cursor-pointer ${!selectedCloth && 'opacity-50 cursor-not-allowed'}`}>
            {uploadedImage ? 'Change Image' : 'Upload Image'}
          </label>
          <button
            className={`bg-accent/90 hover:bg-accent/100 text-white font-normal py-2 px-4 mt-4 rounded-lg cursor-pointer ${!isGenerateActive && 'opacity-50 cursor-not-allowed'}`}
            disabled={!isGenerateActive}
            onClick={handleGenerateImage}
          >
            Generate Image
          </button>
          {uploadedImageName && <p className="text-gray-500 mt-4">{uploadedImageName}</p>}
          <p className="text-gray-500 mt-4">png, jpg up to 10 MB</p>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Upload;
