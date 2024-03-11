// Footer.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

const Footer = () => {
  return (
    <footer className="bg-white text-white py-8">


      <div className="container mx-auto flex flex-wrap gap-8 flex-wrap">

                  {/* Google Map */}

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
        <h2 className="text-black text-2xl font-bold mb-4">Quick Links</h2>
          <ul className="list-none p-0 m-0">
            <li className="mb-2">
              <a href="#hero" className="text-xl text-black hover:text-blue-800 ">
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

export default Footer;
