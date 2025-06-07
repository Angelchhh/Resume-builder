import React from 'react';
import Use1 from '../assets/Use1.png';
import Use2 from '../assets/Use2.png';
import Use3 from '../assets/Use3.png';

const FeaturesSection = () => (
  <section className=" container mt-26 px-4 max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">
      Features That Make{' '}
      <span className="text-cyan-700">
        You Shine
      </span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <FeatureCard
        img={Use3}
        title="Easy Editing"
        desc="Update your resume sections with live preview and instant formatting."
      />
      <FeatureCard
        img={Use2}
        title="Beautiful Templates"
        desc="Choose from modern, professional templates that are easy to customize."
      />
      <FeatureCard
        img={Use1}
        title="One-Click Export"
        desc="Download your resume instantly as a high-quality PDF with one click."
      />
    </div>
  </section>
);

const FeatureCard = ({ img, title, desc }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center mb-5 ">
    <img src={img} alt={title} className="w-20 h-20 mb-4 hover:scale-110" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{desc}</p>
  </div>
);

export default FeaturesSection;
