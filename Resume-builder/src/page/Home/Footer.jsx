import React from 'react';
import Icons from '../page/utils/icons';

function Footer() {
  const support = [
    { title: "Support" },
    { text: "FAQ" },
    { text: "Return & Exchange" },
    { text: "Delivery" },
    { text: "Contact Us" },
  ];

  const legal = [
    { title: "Legal" },
    { text: "About Us" },
    { text: "Cookies Policy" },
    { text: "Terms & Conditions" },
    { text: "Privacy Policy" },
  ];

  const contact = [
    { title: "Contact" },
    {
      icon: "fa-solid fa-location-dot",
      text: "House : 25, Road No: 2, Block A, Mirpur-1, Dhaka 1216",
    },
    {
      icon: "fa-solid fa-envelope",
      text: "info@inilabs.net",
    },
    {
      icon: "fa-solid fa-phone",
      text: "+8801333384628",
    },
  ];

  return (
    <div className='bg-slate-900 py-6 px-4 '>
      <div className='flex flex-col sm:flex-row justify-between px-2 border-b pb-5 border-slate-700'>
        <div className='sm:w-1/4 mb-4 sm:mb-0'>
         
          <p className='text-white font-medium text-sm'>
            Subscribe to our newsletter
          </p>
          <div className='flex p-[2px] rounded-full bg-white pl-3 justify-between my-3'>
            <input
              className='outline-none bg-transparent border-none text-sm p-[2px] text-black'
              type="text"
              placeholder='Your email address'
            />
            <button className='bg-green-500 p-2 px-3 rounded-full text-white font-normal text-sm'>
              Subscribe
            </button>
          </div>

          {/* Social Links */}
          <div className='flex space-x-2 pt-2'>
            <Icons icon="fa-brands fa-facebook" />
            <Icons icon="fa-brands fa-instagram" />
            <Icons icon="fa-brands fa-x-twitter" />
            <Icons icon="fa-brands fa-youtube" />
          </div>
        </div>

        <div className='sm:w-3/4 flex flex-wrap justify-around text-start pt-2 pb-4 '>
          <NavItems items={support} />
          <NavItems items={legal} />
          <NavItems items={contact} />
        </div>
      </div>

  
    </div>
  );
}

const NavItems = ({ items }) => {
  return (
    <div className="mb-4 sm:mb-0">
      {items.map((item, index) => (
        <div key={index}>
          {item.title && (
            <h3 className='text-white font-medium text-lg mb-6'>{item.title}</h3>
          )}
          {item.text && (
            <div className='flex items-start mb-2'>
              {item.icon && (
                <i className={`${item.icon} text-white mr-4 mt-1`}></i>
              )}
              <p className='text-white cursor-pointer hover:text-green-500 text-sm leading-snug'>
                {item.text}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Footer;