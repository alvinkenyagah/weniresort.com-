// AboutUsSection.js
import React from 'react';
import './About.css'
import {t1} from './index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Aboutpage = () => {


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const phoneNumber = '+254 733731300'
  const phoneNumber2 = '+254 791544123'



  return (

    <>
    <section className="py-5 bg-white" id="about">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">About Our Resort</h2>
            <p className="text-gray-600 mb-6">
            Welcome to WestNile Resort, where tradition meets modern comfort. Located in Kisumu City, Nyamasaria 200meters from butter toast bakery off Nairobi road towards Nyamasaria SDA church. 
            </p>
            <p className="text-gray-600 mb-6">
            WestNile offers a fully functional conference facility with a capacity of 200 people and an outdoor garden that can carry up to 300 people. 
A garden bar and recreational garden. We have an accommodation capacity of 40 executive rooms that are self-contained and fully functional.
            </p>
            <p className="text-gray-600">
            At WestNile Resort, you are guaranteed 24/7 wifi. For football lovers, our garden sports bar boasts a 65" TV with a fully installed DSTV for all matches. 
Our conference has fully installed facilities, i.e., projectors, a public address system, and neatly spread seats and tables.
            </p>
          </div>

          {/* Image */}
        <div className="md:order-first">
            <img
              src={t1} // Replace with your actual image URL
              alt="Westnile resort"
              className="w-full h-auto rounded-md shadow-md max-w-full"
            />
        </div>

        </div>
      </div>
    </section>


    {/* FOOTER */}

<footer className="bg-white text-white py-3">


<div className="container mx-auto flex flex-wrap gap-2 flex-wrap">

  {/* Navigation Buttons */}
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
  <h2 className="text-black text-2xl font-bold mb-4">Quick Links</h2>
    <ul className="list-none p-0 m-0">
      <li className="mb-2">
      <Link to="/" onClick={scrollToTop}>
        <a href="#hero" className="text-xl text-black hover:text-blue-800 ">
          Home
        </a>
        </Link>
      </li>
      <li className="mb-2"><Link to="/suites" onClick={scrollToTop}>
        <a className="text-xl text-black hover:text-blue-800">
          Rooms
        </a>
        </Link>
      </li>
      <li className="mb-2">
        <Link to="/about" onClick={scrollToTop}>
        <a  className="text-xl text-black hover:text-blue-800">
          About
        </a>
        </Link>
      </li>
      <li className="mb-2">
        <a href="#contact" className="text-xl text-black hover:text-blue-800">
          Contact
        </a>
      </li>
    </ul>
  </div>

  {/* Contact Information */}
  <div className="text-black w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4" id="contactus">
  <h2 className="text-black text-2xl font-bold mb-4">Contact Us</h2>

  <p className='text-xl'>Phone: <a href={`tel:${phoneNumber2}`} className='hover:text-blue-800'>{phoneNumber2}</a></p>
  <p className='text-xl'>Phone: <a href={`tel:${phoneNumber}`} className='hover:text-blue-800'>{phoneNumber}</a></p>


    <p className='text-xl'>Address: nyamasaria road, Kisumu East</p>
  </div>


  {/* Social Media Links */}
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
  <h2 className="text-black text-2xl font-bold mb-4">Follow Us</h2>
    <div className="flex">
      <a href="https://www.facebook.com/people/WestNile-Resort/100054209033889/" className="mr-4" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} className="text-black text-3xl hover:text-blue-800"  />
      </a>
      <a href="#" className="mr-4" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} className="text-black text-3xl hover:text-blue-800" />
      </a>
      <a href="#" className="mr-4" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} className="text-black text-3xl hover:text-red-500" />
      </a>

    </div>
  </div>

</div>

</footer>
</>
  );
};

export default Aboutpage;
