import React, { useState } from 'react';
import Hamburger from '../assets/hamburgerMenu.svg';
import Close from '../assets/close.svg';
import { motion } from 'framer-motion';
import { IoIosHome,IoIosContact,IoIosPricetag,IoIosInformationCircleOutline,IoMdCafe } from 'react-icons/io';

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

        <div className="flex items-center hover:text-blue-800">
            <IoIosHome className="text-2xl mr-1" /> 
            <div class="flex flex-col">
                <li>Home</li>   
            </div>
        </div>



        <div className="flex items-center hover:text-blue-800">
            <IoIosInformationCircleOutline className="text-2xl mr-1" /> 
            <div class="flex flex-col">
                <li>About</li>   
            </div>
        </div>

        <div className="flex items-center hover:text-blue-800">
            <IoMdCafe className="text-2xl mr-1" /> 
            <div class="flex flex-col">
                <li>Rooms and Suites</li>   
            </div>
        </div>


        <div className="flex items-center hover:text-blue-800">
            <IoIosContact className="text-2xl mr-1" /> 
            <div class="flex flex-col">
                <li>Contact Us</li>   
            </div>
        </div>

        <div className="flex items-center hover:text-blue-800">
            <IoIosPricetag class="text-2xl mr-1" /> 
            <div className="flex flex-col">
                <li>Pricing</li>   
            </div>
        </div>

          </ul>


                {/* MOBILE VIEW */}

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
  
        <div className="flex items-center mb-4 hover:text-blue-800">
            <IoIosHome className="text-2xl mr-1" /> 
            <div class="flex flex-col">
                <li className='text-lg'>Home</li>   
            </div>
        </div>



        <div className="flex items-center mb-4 hover:text-blue-800">
            <IoIosInformationCircleOutline className="text-2xl mr-1" /> 
            <div class="flex flex-col">
                <li className='text-lg'>About</li>   
            </div>
        </div>

        <div className="flex items-center mb-4 hover:text-blue-800">
            <IoMdCafe className="text-2xl mr-1" /> 
            <div class="flex flex-col">
                <li className='text-lg'>Rooms and Suites</li>   
            </div>
        </div>


        <div className="flex items-center mb-4 hover:text-blue-800">
            <IoIosContact className="text-2xl mr-1" /> 
            <div class="flex flex-col">
                <li className='text-lg'>Contact Us</li>   
            </div>
        </div>

        <div className="flex items-center mb-4 hover:text-blue-800">
            <IoIosPricetag class="text-2xl mr-1" /> 
            <div className="flex flex-col">
                <li className='text-lg'>Pricing</li>   
            </div>
        </div>        
        


          <div className='flex flex-col my-4 gap-4'></div>
        </motion.ul>
      </div>
    </div>
  );
};

export default Navbar;
