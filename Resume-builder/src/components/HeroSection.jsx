import React, { useEffect, useState } from 'react';
import img1 from '../assets/Hero.png';
import img2 from '../assets/heroo.png';
import img3 from '../assets/herooo.png';
import { Link } from 'react-router-dom';

const images = [img1, img2, img3];

const HeroSection = ({ onCTA }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlip(true);
      setTimeout(() => {
        setCurrentImage((prev) => (prev + 1) % images.length);
        setFlip(false);
      }, 600);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col-reverse md:flex-row items-center py-8 px-4 max-w-7xl mx-auto md:pt-10 lg:pt-16">
      

       {/* Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center perspective-1000 relative mt-8">
      
        <div className="absolute w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full blur-2xl z-0 bg-gradient-to-tr from-[#04627c] to-[rgba(219,102,102,0.99)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

        <div
          className={`transition-transform duration-700 transform-style-preserve-3d z-10 ${
            flip ? 'rotate-y-90' : ''
          }`}
        >
          <img
            src={images[currentImage]}
            alt="hero"
            className="w-[200px] sm:w-[250px] md:w-[280px] lg:w-[370px] object-contain transition-transform duration-700"
          />
        </div>
      </div>
      {/* Text */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold italic mb-4 lg:mb-6 leading-tight text-center md:text-left">
          Build Your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[rgba(219,23,23,0.99)] to-[#108aac] bg-[length:200%_200%] animate-pulse">
            Resume Effortlessly
          </span>
        </h1>
        <p className="text-gray-700 text-lg sm:text-xl mb-6 text-center md:text-left">
          Craft a standard resume in minutes with <br className="hidden sm:inline" />
          our smart and intuitive resume builder.
        </p>
        <div className="flex justify-center md:justify-start">
           <Link to="/dashboard">
          <button
            onClick={onCTA}
            className="bg-cyan-700 text-sm font-semibold text-white px-8 py-3 rounded-lg hover:bg-cyan-950 transition-colors cursor-pointer"
          >
            Get Started
          </button>
          </Link>
        </div>
      </div>

     
    </div>
  );
};

export default HeroSection;
