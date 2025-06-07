import React from 'react';
// import Res from '../assets/Res.jpg'; 

const Contact = () => {
  return (
    <div
      className="relative w-full h-full py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Dotted Gradient Background */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle,_rgba(219,23,23,0.99)_1px,_transparent_1px)] bg-[length:80px_80px] from-[rgba(219,23,23,0.99)] to-[#108aac] bg-gradient-to-br opacity-60" />

      {/* Decorative Blurred Circle */}
      <div className="absolute -top-10 -right-14 w-56 h-56 bg-cyan-950/60 rounded-full blur-2xl z-10" />

      {/* Main Contact Card */}
      <div className="relative z-20 max-w-xl mx-auto text-black">
        <div className="text-center mb-8 ">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-black">
            Have questions or suggestions? We'd love to hear from you!
          </p>
        </div>

        <form className="grid gap-6 bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-lg shadow-lg">
          <div className="grid sm:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-900 text-black"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-900 text-black"
              required
            />
          </div>

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-900 text-black"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-700 text-white font-semibold py-3 rounded-md hover:bg-cyan-950 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
