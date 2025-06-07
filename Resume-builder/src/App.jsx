import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Dashboard from './page/Home/Dashboard';
import EditResume from './page/ResumeUpdate/EditResume';
import Home from './page/Home';
import Signup from './page/Auth/SignUp'; 
import Login from './page/Auth/Login';
import Blog from './page/Blog';
import Header from './components/Header';
import Footer from './components/Footer';
import FeaturesSection from './components/FeaturesSection';
import About from './components/About';
import Contact from './components/Contact';
import Term from './page/Term';
import Help from './page/HelpCenter';
import Privacy from './page/Privacy';



const AppWrapper = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return (
    <>
      <Header onLoginClick={handleLoginClick} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/feature" element={<FeaturesSection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/term" element={<Term />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/resume/:resumeId" element={<EditResume />} />
      </Routes>

      <Footer />
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px"
          },
        }}
      />
    </>
  );
};

const App = () => {
  return (
    <div className="w-screen max-w-[100vw] overflow-x-hidden bg-[#fcfbfc]">
      <Router>
        <AppWrapper />
        
      </Router>
    </div>
  );
};

export default App;
