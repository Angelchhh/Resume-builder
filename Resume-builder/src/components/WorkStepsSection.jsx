import React from 'react';
import DemoGif from '../assets/demo.gif';
import { Link } from 'react-router-dom';

const WorkStepsSection = () => (
  <section className="container mx-auto px-4 py-12">
    <h1 className="text-4xl font-bold text-center mb-10 mt-2">
      How it <span className="text-cyan-700">Work's</span>
    </h1>

    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
      <div className="md:w-1/2 w-full">
        <h1 className="text-4xl md:text-6xl font-extrabold text-start ml-12 mb-8 md:mb-12">
          Just three <br /> simple steps
        </h1>
        <ul className="text-xl md:text-2xl font-medium text-cyan-950 list-decimal space-y-6 ml-8 md:ml-8 text-start md:text-left">
          <li className="ml-8 md:ml-16">
            <b>Select</b> a template from our <br /> library of professional designs
          </li>
          <li className="ml-8 md:ml-16">
            <b>Build</b> your resume with our <br /> industry-specific bullet points
          </li>
          <li className="ml-8 md:ml-16">
            <b>Customize</b> the details and wrap <br /> it up. You’re ready to send!
          </li>
        </ul>
      </div>
 

      <div className="md:w-1/2 w-full flex flex-col items-center">
        <img
          src={DemoGif}
          alt="Animated Demo"
          className="w-full max-w-md "
        />
        <Link to="/dashboard">
        <button
          className="mt-6 bg-cyan-950 text-white px-6 py-3 rounded-full 
                     w-60 text-lg hover:bg-cyan-800 
                     transition-all duration-300 cursor-pointer ease-in-out 
                     hover:-translate-y-1 hover:opacity-80"
        >
          Let's Try
        </button>
        </Link>
     
      </div>
    </div>
  <div className="mt-20 mb-8 px-4 text-center">
  <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold font-serif leading-tight">
    Join thousands of job seekers <br className="hidden md:inline" />
    who love our <span className="text-cyan-700">Resume Builder</span>
  </h1>
</div>

  </section>
);

export default WorkStepsSection;