import React from 'react';
import Cvss from '../assets/Cvss.png'; 
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="relative h-screen w-full mt-20 ">
      {/* Background Image */}
      <img
        src={Cvss}
        alt="Resume Background"
        className="absolute inset-0 w-full h-full object-cover filter "
        style={{ filter: 'blur(8px)' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-opacity-60 flex items-center  justify-center px-4">
        <div className="text-center text-cyan-700 outline-1 pb-8 pt-8 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-8">
            Build Your Professional Resume
          </h1>
          <p className="text-lg md:text-xl mb-6  text-black">
            Create a modern, job-winning resume in minutes. Easy to use.
          </p>
          <Link to='/about'>
          <button className="w-full sm:w-auto bg-black text-white font-semibold px-6 py-3 rounded-md hover:bg-cyan-900 transition duration-300">
            Read More
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
