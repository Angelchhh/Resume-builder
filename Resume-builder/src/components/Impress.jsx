import React from "react";
import { motion } from "framer-motion";
import Imp from '../assets/Imp.jpg';
import Imp1 from '../assets/Imp1.jpg';
import Imp2 from '../assets/Imp2.jpg';
import Imp3 from '../assets/Imp3.jpg';
import Imp4 from '../assets/Imp4.jpg';
import Imp5 from '../assets/Imp5.jpg';
import { Link } from "react-router-dom";

const images = [Imp, Imp1, Imp2, Imp3, Imp4, Imp5];

const Impress = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Animated Scrolling Gallery with Framer Motion */}
        <div className="relative overflow-hidden rounded-xl border border-gray-200 shadow-xl bg-white">
          <motion.div
            className="flex space-x-6 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear"
            }}
          >
            {[...images, ...images].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Resume ${idx + 1}`}
                className="w-48 h-64 object-cover rounded-lg shadow-md cursor-pointer transform transition-transform duration-300 hover:scale-105"
              />
            ))}
          </motion.div>
        </div>

        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Impress potential employers<br /> with your resume
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Follow step-by-step professional guidance to create a polished resume in minutes.
          </p>
          <Link to="/dashboard">
            <button className="bg-cyan-700 hover:bg-cyan-950 text-white font-semibold px-6 py-3 rounded-md transition">
              Create resume
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Impress;
