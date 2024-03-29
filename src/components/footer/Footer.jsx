// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css'
import { IoMdPhonePortrait,IoMdMap} from 'react-icons/io';
import { Link } from "react-router-dom";

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };


  const phoneNumber = '+254 733731300'
  const phoneNumber2 = '+254 791544123'

  return (
    <footer className="bg-white text-white py-3">


      <div className="container mx-auto flex flex-wrap gap-2 flex-wrap">

                  {/* Google Map */}
                  <h1 className="text-black text-2xl font-bold text-blue-500">Find Us</h1>
                    <div className="google-map-container">
                     
                     <iframe
                       title="Google Map"
                       src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.240610773692!2d34.77393459301031!3d-0.11593370000000289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182aa31f33ff79d9%3A0xf19ac29733fdad7d!2swest%20nile%20resort!5e0!3m2!1sen!2ske!4v1710161873197!5m2!1sen!2ske'
                       className="google-map-iframe"
                       frameBorder="0"
                       style={{ border: 0 }}
                       allowFullScreen=""
                       loading="lazy"
                     />
                   </div>

        {/* Navigation Buttons */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
        <h1 className="text-black text-2xl font-bold mb-4 text-blue-500">Quick Links</h1>
          <ul className="list-none p-0 m-0">
            <li className="mb-2">
           
              <a href="#hero" className="text-xl text-black hover:text-blue-800 ">
              <Link to="/" onClick={scrollToTop}>
                Home
                </Link>
              </a>
             
            </li>
            <li className="mb-2">
              <a className="text-xl text-black hover:text-blue-800">
              <Link to="/suites" onClick={scrollToTop}>
                Rooms
                </Link>
              </a>
              
            </li>
            <li className="mb-2">
              <a  className="text-xl text-black hover:text-blue-800">
              <Link to="/about" onClick={scrollToTop}>
                About
                </Link>
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
 <div className="text-black w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4" id="contactus">
  <h1 className="text-black text-2xl font-bold mb-2 text-blue-500">Contact Us</h1>
  <p className='text-xl'>For bookings, reservations, and enquiries contact us at</p>  
  <div className='flex items-center text-xl italic'>
    <IoMdPhonePortrait className="text-2xl mr-1 text-blue-500" />
    <a href={`tel:${phoneNumber2}`} className='text-blue-800 bold hover:text-red-500'>{phoneNumber2}</a>
  </div>
  <div className='flex items-center text-xl italic'>
    <IoMdPhonePortrait className="text-2xl mr-1 text-blue-500" />
    <a href={`tel:${phoneNumber}`} className='text-blue-800 bold hover:text-red-500'>{phoneNumber}</a>
  </div>
  <div className='flex items-center text-xl italic'>
    < IoMdMap className="text-2xl mr-1 text-blue-500"/>
  <p className='text-xl'>Address: nyamasaria road, Kisumu East</p>
  </div>
</div>



        {/* Social Media Links */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-4">
        <h1 className="text-black text-2xl font-bold mb-4 text-blue-500">Follow Us</h1>
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
      {/* Copy right */}
        <div>
          <hr />
          <p className='text-black flex justify-center mt-1 text-blue-800'>Copyright © 2024 WestNileResort</p>
        </div>
    </footer>
  );
};

export default Footer;
