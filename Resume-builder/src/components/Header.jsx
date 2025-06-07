import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Header = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  

  const navLinkClass = (path) =>
    `text-sm font-medium transition-colors hover:text-cyan-700 ${
      location.pathname === path ? 'text-cyan-700 underline' : 'text-gray-700'
    }`;

  return (
    <header className="bg-white text-black w-full shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div
          className="text-2xl font-extrabold cursor-pointer"
          onClick={() => navigate('/')}
        >
          <span className="text-cyan-700">Resume</span>Builder
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/" className={navLinkClass('/')}>Home</Link>
          <Link to="/feature" className={navLinkClass('/feature')}>Features</Link>
          <Link to="/dashboard" className={navLinkClass('/dashboard')}>Dashboard</Link>
          <Link to="/about" className={navLinkClass('/about')}>About</Link>

          <button
            onClick={() => onLoginClick && onLoginClick()}
            className="ml-4 bg-cyan-700 text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-cyan-800 transition"
          >
            Login / Sign Up
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-cyan-700 transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-3 bg-white text-black shadow-md">
          <Link to="/" className={navLinkClass('/')}>Home</Link>
          <Link to="/feature" className={navLinkClass('/feature')}>Features</Link>
          <Link to="/dashboard" className={navLinkClass('/dashboard')}>Dashboard</Link>
          <Link to="/about" className={navLinkClass('/About')}>About</Link>

          <button
            onClick={() => onLoginClick && onLoginClick()}
            className="w-full bg-cyan-700 text-white text-sm font-semibold px-6 py-2.5 rounded-lg hover:bg-cyan-800 transition"
          >
            Login / Sign Up
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
