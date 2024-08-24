import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImageNS from './images/ImageNS.png';
import Add from './images/Addimg.png';

const Upload = ({ selectedCloth, scrollToClothesSelector, setSelectedImage, imageRef }) => {
  // State hooks to manage various aspects of the upload process
  const [uploadedImage, setUploadedImage] = useState(null);
  const [uploadedImageName, setUploadedImageName] = useState('');
  const [isGenerateActive, setIsGenerateActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect hook to check if both a cloth and image have been selected, enables the "Generate Image" button
  useEffect(() => {
    setIsGenerateActive(!!selectedCloth && !!uploadedImage);
  }, [selectedCloth, uploadedImage]);

  // Handles image upload by the user
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validates file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setError('File size should be less than 10MB');
        return;
      }
      // Validates file type (JPEG or PNG only)
      if (!['image/jpeg', 'image/png'].includes(file.type)) {
        setError('File type should be JPEG or PNG');
        return;
      }
      setUploadedImage(file); // Sets uploaded image in state
      setUploadedImageName(file.name); // SetS image name in state
      setError(null); // Clears any existing errors
    }
  };

  // Handles generating the image using the uploaded image and selected cloth
  const handleGenerateImage = async () => {
    setIsLoading(true); // Set loading state to true while the image is being processed
    try {
      const formData = new FormData();
      formData.append('clothId', selectedCloth.id);
      formData.append('clothTitle', selectedCloth.title);
      formData.append('clothSubtitle', selectedCloth.subtitle);
      formData.append('clothImage', selectedCloth.src); 
      formData.append('image', uploadedImage); 
      
      // Logging form data pairs for debugging
      for (const pair of formData.entries()) {
        console.log(pair[0], pair[1]); 
      }

      // Sends form data to the server to generate the image
      const response = await axios.post('http://localhost:5000/api/images/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data.message);

      // Sets selected image to display it in the UI
      setSelectedImage(URL.createObjectURL(uploadedImage));
      setTimeout(() => {
        setIsLoading(false); // Stops loading once the image is generated
        imageRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll to the generated image
      }, 3000); // Delay to simulate generation time
      
    } catch (error) {
      setError('Error saving image'); // Error message if the generation fails
      console.error('Error saving image:', error);
      setIsLoading(false); // Stop loading in case of an error
    }
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
          {/* Display the selected cloth details or a placeholder if none is selected */}
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
          {/* Display the uploaded image or a placeholder */}
          {uploadedImage ? (
            <img src={URL.createObjectURL(uploadedImage)} alt="Uploaded" className="border border-black w-[6rem] h-[6rem]  object-cover transition-opacity duration-300" />
          ) : (
            <img src={Add} alt="Upload status" className="w-[6rem] h-[6rem] transition-opacity duration-300 opacity-50" />
          )}
          {/* File input for image upload */}
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
          {/* Button that triggers image generation*/}
          <button
            className={`bg-accent/90 hover:bg-accent/100 text-white font-normal py-3 px-8 mt-4 rounded-lg cursor-pointer ${!isGenerateActive && 'opacity-50 cursor-not-allowed'}`}
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
};

export default Upload;
