import React, { useState } from 'react';
import Logo from '../assets/logo.svg';
import Hamburger from '../assets/hamburgerMenu.svg';
import Close from '../assets/close.svg';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className={`w-full h-[96px] bg-transparent shadow-sm ${toggle ? 'overflow-hidden' : ''}`}>
      {/* Dark overlay */}
      {toggle && (
        <div
          className='fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50'
          onClick={handleToggle}
        ></div>
      )}

      <div className='p-4 md:max-w-[1080px] max-w-[400px] m-auto w-full h-full flex justify-between items-center'>
        <h1 className='text-3xl font-bold text-sky-400/100'>WestNile</h1>
        <div className='flex items-center'>
          <ul className='hidden md:flex gap-9 '>
            <li>Home</li>
            <li>About</li>
            <li>Rooms & Suites</li>
            <li>Contact-Us</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className='md:flex hidden'></div>
        <motion.div
          whileTap={{ scale: 0.6 }}
          className='md:hidden cursor-pointer'
          onClick={handleToggle}
        >
          <img src={toggle ? Close : Hamburger} alt='hamburger' />
        </motion.div>
      </div>

      <div>
        <motion.ul
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 200 }}
          className={toggle ? 'absolute z-50 p-4 bg-white w-full px-8 md:hidden' : 'hidden'}
        >
          <li className='p-4 hover:bg-gray-50'>Home</li>
          <li className='p-4 hover:bg-gray-50'>About</li>
          <li className='p-4 hover:bg-gray-50'>Rooms & Suites</li>
          <li className='p-4 hover:bg-gray-50'>Contact-Us</li>
          <li className='p-4 hover:bg-gray-50'>Pricing</li>
          <div className='flex flex-col my-4 gap-4'></div>
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar;
