// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-white text-white py-8 ">
      <div className="container mx-auto flex flex-wrap gap-8">
        {/* Navigation Buttons */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
          <h2 className="text-black text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="list-none p-0 m-0">
            <li className="mb-2">
              <a href="#home" className="text-xl text-black hover:text-blue-800 ">
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#rooms" className="text-xl text-black hover:text-blue-800">
                Rooms
              </a>
            </li>
            <li className="mb-2">
              <a href="#amenities" className="text-xl text-black hover:text-blue-800">
                Amenities
              </a>
            </li>
            <li className="mb-2">
              <a href="#contact" className="text-xl text-black hover:text-blue-800">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="text-black w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
          <h2 className="text-black text-2xl font-bold mb-4">Contact Us</h2>
          <p className='text-xl'>Email: info@westnile.com</p>
          <p className='text-xl'>Phone: +1 123-456-7890</p>
          <p className='text-xl'>Address: 123 Main Street, Kisumu</p>
        </div>

        {/* Social Media Links */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
          <h2 className="text-black text-2xl font-bold mb-4">Follow Us</h2>
          <div className="flex">
            <a href="#" className="mr-4">
              <FontAwesomeIcon icon={faFacebook} className="text-black text-3xl hover:text-blue-800" />
            </a>
            <a href="#" className="mr-4">
              <FontAwesomeIcon icon={faTwitter} className="text-black text-3xl hover:text-blue-800" />
            </a>
            <a href="#" className="mr-4">
              <FontAwesomeIcon icon={faInstagram} className="text-black text-3xl hover:text-red-500" />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
