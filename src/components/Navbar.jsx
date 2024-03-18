import React, { useState } from 'react';
import Hamburger from '../assets/hamburgerMenu.svg';
import Close from '../assets/close.svg';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";
import { IoIosHome, IoIosContact, IoIosPricetag, IoIosInformationCircleOutline, IoMdCafe } from 'react-icons/io';
import './navbar.css'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div className="navbar-container">
      <div className={`w-full h-[96px] bg-transparent shadow-sm ${toggle ? 'overflow-hidden' : ''}`}>
        {/* Dark overlay */}
        {toggle && (
          <div
            className='fixed top-0 left-0 w-full h-full bg-red opacity-50 z-50'
            onClick={handleToggle}
          ></div>
        )}

        <div className='p-4 md:max-w-[1080px] max-w-[400px] m-auto w-full h-full flex justify-between items-center'>
          <h1 className='text-3xl  text-sky-400/100 calligraphy'><Link to="/">WestNile</Link></h1>
          <div className='flex items-center'>
            <ul className='hidden md:flex gap-9 '>
              <li>
                <Link to="/" onClick={scrollToTop} className="flex items-center hover:text-blue-800">
                  <IoIosHome className="text-2xl mr-1" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="flex items-center hover:text-blue-800">
                  <IoIosInformationCircleOutline className="text-2xl mr-1" />
                  <span>About</span>
                </Link>
              </li>
              <li>
                <Link to="/suites" onClick={scrollToTop} className="flex items-center hover:text-blue-800">
                  <IoMdCafe className="text-2xl mr-1" />
                  <span>Rooms and Suites</span>
                </Link>
              </li>
              <li>
                <a href="#contactus" className="flex items-center hover:text-blue-800">
                  <IoIosContact className="text-2xl mr-1" />
                  <span>Contact Us</span>
                </a>
              </li>
              <li>
                <a href="#pricing" className="flex items-center hover:text-blue-800">
                  <IoIosPricetag className="text-2xl mr-1" />
                  <span>Pricing</span>
                </a>
              </li>
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
            <li>
              <Link to="/" className="flex items-center mb-4 hover:text-blue-800">
                <IoIosHome className="text-2xl mr-1" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex items-center mb-4 hover:text-blue-800">
                <IoIosInformationCircleOutline className="text-2xl mr-1" />
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/suites" className="flex items-center mb-4 hover:text-blue-800">
                <IoMdCafe className="text-2xl mr-1" />
                <span>Rooms and Suites</span>
              </Link>
            </li>
            <li>
              <a href="#contactus" className="flex items-center mb-4 hover:text-blue-800">
                <IoIosContact className="text-2xl mr-1" />
                <span>Contact Us</span>
              </a>
            </li>
            <li>
              <a href="#pricing" className="flex items-center mb-4 hover:text-blue-800">
                <IoIosPricetag className="text-2xl mr-1" />
                <span>Pricing</span>
              </a>
            </li>
          </motion.ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
