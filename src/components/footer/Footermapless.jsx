// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css'
import { Link } from "react-router-dom";

const Footermapless = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  return (
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
          <p className='text-xl'>Phone: +254 791544123</p>
          <p className='text-xl'>Phone: +254 733731300</p>
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
  );
};

export default Footermapless;
