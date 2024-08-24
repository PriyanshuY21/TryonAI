import React from 'react';
import Problem from './images/Problem.png';
import Solution from './images/Solution.png'
const Upload = () => {
  return (
    <div className="container mx-auto text-center p-6 pb-5">
      <div className="flex justify-center">
        <h1 className="Montserrat font-semibold text-4xl sm:text-5xl pb-6 text-black">
          Why
          <span className="Montserrat font-semibold text-4xl sm:text-5xl pb-6 pl-4 pr-4 text-accent">
            Virtual
          </span>
          <span className="Montserrat font-semibold text-4xl sm:text-5xl pb-6 text-black">
            Try-On
          </span>
        </h1>
      </div>
      <div className="flex justify-center items-center space-x-10 pt-7">
      <div className="p-6 w-[31rem] h-[25rem] flex flex-col justify-center items-center pt-1.5">
          <div className="mb-4 w-[12rem] h-[12rem] rounded-full bg-neutral-200 flex justify-center items-center">
            <img src={Problem} alt="Logo" className="w-[6.5rem] h-[6.5rem] object-cover rounded-full" />
          </div>
          <h1 className="Montserrat font-semibold text-4xl pb-5" style={{ color: 'black' }}>The Problem</h1>
          <p className="Montserrat font-normal text-xl px-4" style={{ color: 'black' }}>
           Buying clothes online is tough because customers can't try them on first, making it hard to choose the right outfit.
          </p>
        </div>
        <div className="p-6 w-[31rem] h-[25rem] flex flex-col justify-center items-center pt-1.5">
          <div className="mb-4 w-[12rem] h-[12rem] rounded-full bg-neutral-200 flex justify-center items-center">
            <img src={Solution} alt="Logo" className="w-[7rem] h-[7rem] object-cover rounded-full" />
          </div>
          <h1 className="Montserrat font-semibold text-4xl pb-5" style={{ color: 'black' }}>The Solution</h1>
          <p className="Montserrat font-normal text-xl px-4" style={{ color: 'black' }}>
          We offer virtual trial rooms that allow you to try on multiple clothes virtually and select the best-looking outfit.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Upload;
