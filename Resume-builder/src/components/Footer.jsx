import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#04627c] to-[rgba(219,102,102,0.99)] text-white py-12 px-6  mt-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding */}
        <div>
        <div>
          <h2 className="text-3xl font-extrabold mb-4 cursor-pointer">
            <span className="text-cyan-500">Resume</span><span>Builder</span>
          </h2>
          <p className="text-gray-200 leading-relaxed max-w-sm">
            Build professional resumes quickly and effortlessly with our intuitive builder.
          </p>
          <p className="mt-6 text-sm text-gray-300">&copy; {new Date().getFullYear()} Resume Builder. All rights reserved.</p>

                {/* Social Icons */}
          <div className="flex space-x-6 mt-8">
            <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-cyan-300">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.333v21.333C0 23.403.597 24 1.325 24h11.495v-9.294H9.69v-3.622h3.13V8.413c0-3.1 1.894-4.788 4.658-4.788 1.325 0 2.466.098 2.798.142v3.24l-1.92.001c-1.506 0-1.796.715-1.796 1.763v2.313h3.588l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.666V1.333C24 .597 23.403 0 22.675 0z" /></svg>
            </Link>
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-cyan-300">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M23.954 4.569c-.885.389-1.83.654-2.825.775a4.932 4.932 0 0 0 2.163-2.724c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482A13.953 13.953 0 0 1 1.671 3.149a4.92 4.92 0 0 0 1.523 6.573 4.9 4.9 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.93 4.93 0 0 0 4.604 3.417 9.867 9.867 0 0 1-6.102 2.105c-.395 0-.787-.023-1.174-.067a13.945 13.945 0 0 0 7.557 2.212c9.054 0 14-7.496 14-13.986 0-.21 0-.423-.015-.634A9.936 9.936 0 0 0 24 4.59z" /></svg>
            </Link>
            <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-cyan-300">
              <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v12h-4V8zm7 0h3.75v1.7h.05c.52-1 1.78-2.05 3.65-2.05 3.9 0 4.62 2.57 4.62 5.92V20h-4v-6.5c0-1.55-.03-3.55-2.15-3.55-2.15 0-2.48 1.67-2.48 3.4V20h-4V8z" /></svg>
            </Link>
          </div>
        </div>
        </div>

        

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/feature" className="hover:underline">Features</Link></li>
            <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Resources</h3>
          <ul className="space-y-3">
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            <li><Link to="/help" className="hover:underline">Help Center</Link></li>
            <li><Link to="/privacy" className="hover:underline">Privacy Policy</Link></li>
            <li><Link to="/term" className="hover:underline">Terms of Service</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Subscribe to our Newsletter</h3>
          <p className="mb-4 text-gray-200">
            Get the latest updates, tips, and special offers delivered to your inbox.
          </p>
          <form className="flex flex-col lg:flex-row gap-3">
            <div className=''>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-md text-gray-900 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full mt-2 lg:w-auto bg-cyan-500 hover:bg-cyan-600 transition-colors text-white font-semibold px-6 py-2 rounded-md"
            >
              Subscribe
            </button>
            </div>
          </form>

    
        </div>
      </div>
    </footer>
  );
};

export default Footer; 