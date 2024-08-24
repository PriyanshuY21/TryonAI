import React from 'react';
import ImageNS from './images/ImageNS.png';

const Image = ({ selectedImage, scrollToClothesSelector }) => {

  // Handles download of selected image
  const handleDownload = () => {
    if (selectedImage) {  // Checks if there is selected image
      const link = document.createElement('a');  // Create a temporary anchor element
      link.href = selectedImage;  // Set the href to the image URL
      link.download = 'image.png';  // Set the download attribute to specify the file name
      link.click();  // Programmatically click the link to trigger the download
    }
  };

  return (
    <div className="text-center p-6">
      <div className="flex justify-center">
        <h1 className="Montserrat font-semibold text-4xl sm:text-5xl pb-6 text-black">
          Generated
          <span className="Montserrat font-semibold text-4xl sm:text-5xl pb-6 pl-4 pr-4 text-orange-500">
            Image
          </span>
        </h1>
      </div>
      <div className="flex justify-center items-center mt-10 space-x-20">
        <div className="border bg-cloth rounded-3xl border-gray-300 p-6 w-[30rem] h-[25rem] flex flex-col justify-center items-center">
          {/* Conditional rendering based on whether an image is selected */}
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-full" />
          ) : (
            <>
              <div className="text-6xl text-gray-300 mb-4">
                <img src={ImageNS} alt="Logo" className="w-[9rem] h-[9rem]" />
              </div>
              <p className="Montserrat font-medium text-2xl pb-2">No cloth selected</p>
              <p className="text-gray-500 opacity-65">
                Please <span className="text-accent cursor-pointer" onClick={scrollToClothesSelector}>select</span> image and clothes for viewing
              </p>
            </>
          )}
        </div>
        <div className="flex flex-col space-y-2 pl-4">
          {/* Triggers scroll to the clothes selector */}
          <button className="bg-accent/90 hover:bg-accent/100 text-white font-normal py-2 px-4 mt-4 rounded-lg" onClick={scrollToClothesSelector}>
            Choose Cloth
          </button>
          <button
            onClick={handleDownload}
            className={`bg-accent/90 hover:bg-accent/100 text-white font-normal py-2 px-4 mt-4 rounded-lg ${!selectedImage ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={!selectedImage}  // Disable button if no image is selected
          >
            Download Image
          </button>
        </div>
      </div>
    </div>
  );
};

export default Image;
