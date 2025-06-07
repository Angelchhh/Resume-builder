import React from 'react';
import { CheckCircle } from 'lucide-react';
import Hero2 from '../assets/Hero2.png';
import Why from '../assets/Why.svg';


const WhyUseSection = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6">
        {/* Left: Text Content */}
        <div className="flex-1">
          <h2 className="text-4xl sm:text-5xl font-bold text-cyan-900 mb-4">
            Why Use Our <span className="text-black">Resume Builder</span>
          </h2>

          <ul className="space-y-5 text-gray-700 text-lg">
            <li className="flex items-start gap-3">
              <CheckCircle className="text-amber-300 mt-1" size={22} />
              <span><strong>Instant Resume</strong> creation with pre-designed templates</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-amber-300 mt-1" size={22} />
              <span><strong>Easy Customization</strong> with smart inputs and editing</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="text-amber-300 mt-1" size={22} />
              <span><strong>ATS-friendly Layouts</strong> to boost your hiring chances</span>
            </li>
          </ul>
        </div>

        {/* Image + Background  */}
        <div className="flex-1 relative flex justify-center items-center">
          <div className="absolute w-80 h-80 bg-cyan-950/58 rounded-full -top-10 -right-14 blur-2xl z-10"></div>
          <img
            src={Why}
            alt="Resume builder"
           className="relative z-10 w-full h-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl object-contain drop-shadow-xl"

          />
        </div>
      </div>
    </section>
  );
};

export default WhyUseSection;
