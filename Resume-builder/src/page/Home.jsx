
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import FeaturesSection from '../components/FeaturesSection';
import WhyUseSection from '../components/WhyUseSection';
import Banner from '../components/Banner';
import WorkStepsSection from '../components/WorkStepsSection';
import FAQ from '../components/FAQ';
import ReviewsSection from '../components/ReviewsSection';
import Footer from '../components/Footer';
import Impress from '../components/Impress';
import Welcome from '../components/Welcome';
import  Contact  from '../components/Contact';


const Home = () => {
  const navigate = useNavigate();
  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  return (
    <div className='w-full min-h-full bg-white'>
      <div className='container mx-auto px-4 py-6'>
      
        <HeroSection />
        <FeaturesSection />
        <Welcome />
        <About />
        <Impress />
        <WhyUseSection />
        <WorkStepsSection />
        <Banner />
        <FAQ />
        <Contact />
        <ReviewsSection />
       

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
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && <SignUp setCurrentPage={setCurrentPage} />}
        </div>
      </Modal>
    </div>
  );
};

export default Home;