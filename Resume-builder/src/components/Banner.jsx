import React, { useState, useEffect } from 'react';
import img1 from '../assets/resume1.png';
import img2 from '../assets/resume2.png';
import img3 from '../assets/resume3.png';
import img4 from '../assets/resume4.png';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: img1,
    text: 'Get hired faster with job-winning templates.',
  },
  {
    image: img2,
    text: 'Stand out with modern and elegant designs.',
  },
  {
    image: img3,
    text: 'Customize every section with flexibility.',
  },
  {
    image: img4,
    text: ' Create professional resumes effortlessly.',
  },
];

const AutoSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { image, text } = slides[index];

  return (
    <div className="w-full bg-gradient-to-r from-[#04627c] to-[rgba(219,102,102,0.99)] text-white py-14 px-6">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left Side: Text */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Let’s Land Your <br className="hidden md:block" /> Dream Job Together
          </h1>
          <p className="text-lg text-white/90 mb-6 transition-opacity duration-500">{text}</p>
           <Link to="/dashboard">
          <button className="bg-white text-[#04627c] font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#ffffffd2] transition duration-300 animate-bounce">
            Get Started
          </button>
          </Link>
        </div>

        {/* Right Side: Image */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={image}
            alt="Resume Preview"
            className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[480px] rounded-xl shadow-xl transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default AutoSlider;
