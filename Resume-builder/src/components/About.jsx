import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Drop1 from '../assets/Imp1.jpg';
import Drop5 from '../assets/Imp6.jpg';
import Drop2 from '../assets/Imp.jpg';
import Drop4 from '../assets/Imp4.jpg';


const dropImages = [Drop1, Drop5, Drop2,Drop4];

const About = () => {
  return (
    <section className="bg-gradient-to-br from-white via-cyan-50 to-white py-16 px-4 md:px-10 lg:px-20 mt-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 mt-8 relative z-10">

        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            About <span className="text-cyan-700">ResumeBuilder</span>
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            ResumeBuilder is your AI-powered companion to craft professional, job-winning resumes in minutes. Whether you're a fresh graduate or an experienced professional, our tool helps you highlight your skills and achievements the smart way.
          </p>
          <p className="text-gray-600 mb-6">
            Powered by modern technology and clean design, ResumeBuilder brings you templates, editing tools, and export options — all in one platform.
          </p>
          <Link to="/dashboard">
            <button className="bg-cyan-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-cyan-800 transition">
              Get Started
            </button>
          </Link>
        </div>
{/* Right Side - Falling Images + Decorative Background */}
<div className="w-full md:w-1/2 relative h-96 flex justify-center items-start">


  {/* Decorative blurred blobs */}
  <div className="absolute -top-20 left-10 w-80 h-80 bg-cyan-200 opacity-20 blur-[100px] rounded-full z-0"></div>
  <div className="absolute -top-32 right-0 w-96 h-96 bg-pink-200 opacity-20 blur-[120px] rounded-full z-0"></div>
  <div className="absolute w-80 h-80 bg-cyan-950/58 rounded-full -top-10 -right-14 blur-2xl z-10 "></div>

  {/* Animated Images */}
  {dropImages.map((img, i) => (
    <motion.img
      key={i}
      src={img}
      alt={`falling-${i}`}
      className="w-full max-w-[120px] h-40 object-cover rounded-lg shadow-md absolute z-10 "
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 200 + i * 10, opacity: 1 }}
      transition={{
        duration: 1.5,
        delay: i * 0.3,
        ease: 'easeOut',
      }}
      viewport={{ once: false, amount: 0.4 }}
      style={{
        left: `${15 + i * 20}%`,
      }}
    />
  ))}
</div>

      </div>
    </section>
  );
};

export default About;
