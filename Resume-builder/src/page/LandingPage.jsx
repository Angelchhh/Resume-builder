import React, { useState } from 'react';
import HeroImg from '../assets/HeroImg.png';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import Login from './Auth/Login';


const LandingPage =  () => { 
   const Navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] =useState(true);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => { };

  return (
    <div className='w-full min-h-full bg-white pb-96' >
      <div className='container mx-auto px-4 py-6'>
          {/* Header */}
          <header className='flex justify-between items-center mb-16  '>
            <div className='text-xl font-bold text-black'>Resume Builder</div>
            <button
            className='bg-purple-100 text-sm font-semibold text-black px-7 py-2.5 rounded-lg hover:bg-gray-800 hover:text-white transition-colors cursor-pointer'
            onClick={ () => setOpenAuthModal(true)}>
              Login / Sign Up
              </button>
          </header>
          {/* hero */}
          <div className=' flex flex-col md:flex-row items-center'>
            <div className='w-full md:w-1/2 pr-4 mb-8 md:mb-0'>
              <h1 className='text-5xl font-bold mb-6 leading-tight'>
                Build Your{" "}
                <span className='text-transparent bg-clip-text bg-[radial-gradient(circle,_#7182ff_0%,_#3cff52_100%)] bg-[length:200%_200%] animate-text-shine'>
                  Resume Effortlessly
                </span>
              </h1>
              <p className='text-lg text-gray-700 mb-8'>
                Craft a standard resume in minutes with our smart and intuitive resume builder.
              </p>
              <button className='bg-black text-sm font-semibold text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors cursor-pointer' 
              onLoad={handleCTA}>
                Get Started 
              </button>
            </div>
            <div className='w-full md:w-1/2'>
              <img src={HeroImg} 
              alt="Hero"
              className='w-full rounded-lg' 
              />
            </div>


          </div>

          <section className='mt-5'>
            <h2 className='text-2xl font-bold text-center mb-12'>
              Features That Make You Shine
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition'>
                <h3 className='text-lg font-semibold mb-3'>
               Easy Editing
                </h3>
                <p className='text-gray-600'>
                  Update your resume sections with live preview and instant formating.
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <h3 className="text-lg font-semibold mb-3">
                  Beautiful Templates
                </h3>
                <p className="text-gray-600">
                  Choose from modern, professional templetes that are easy to customize.
                </p>
            </div>
            <div className='bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition'>
              <h3 className='text-lg font-semibold mb-3'>One-Click Export</h3>
              <p className='text-gray-600'>
                Download your resume instantly as a high-quality PDF with one click.
              </p>
              </div>
            </div>
          </section>
 </div>
<Modal 
isOpen={openAuthModal}
onClose={() => {
  setOpenAuthModal(false);
  setCurrentPage("login");
}}
hideHeader
>
<div>
  {currentPage === "login" && <Login setCurrentPage={setCurrentPage}/>}
  {currentPage === "signup" && (
    <SignUp setCurrentPage={setCurrentPage} />

  ) }
</div>
</Modal>

      </div>
   
  );
};


export default LandingPage;
