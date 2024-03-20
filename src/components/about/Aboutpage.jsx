// AboutUsSection.js
import React from 'react';
import './About.css'
import {a1} from '../../pages/index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { IoMdPhonePortrait,IoMdMap} from 'react-icons/io';
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
<section className="py-5 bg-gray-50" id="about">
  <div className="container mx-auto px-4 md:px-0"> {/* Added padding for responsiveness */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Text Content */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">About Our Resort</h1>
        <p className="text-gray-600 mb-6 calligraph">
          Welcome to <span className="text-green-600">WestNile Resort</span>, where tradition meets modern comfort. Located in <span className="text-yellow-600">Kisumu City</span>, Nyamasaria 200 meters from Butter Toast Bakery off Nairobi road towards Nyamasaria SDA Church.
        </p>
        <p className="text-gray-600 mb-6 calligraph">
          <span className="text-red-600">WestNile</span> offers a range of amenities to ensure a comfortable stay for our guests. These include 24/7 WiFi connectivity, a garden sports bar equipped with a 65" TV and DSTV for football matches, an outdoor recreational garden, and a fully functional conference facility for up to 200 people.
        </p>
        <p className="text-gray-600 mb-6 calligraph">
          Our accommodation consists of 40 executive rooms that are self-contained and fully functional, providing a relaxing and enjoyable stay for our guests.
        </p>
        <p className="text-gray-600 mb-6 calligraph">
          The conference facility at <span className="text-blue-600">WestNile Resort</span> is equipped with modern amenities such as projectors, a public address system, and neatly arranged seating and tables, making it ideal for business meetings, seminars, and conferences.
        </p>
        <p className="text-gray-600 calligraph">
          Guests can also enjoy delicious meals at our on-site restaurant, which features a variety of local and international cuisines. The garden bar provides a relaxing atmosphere for socializing, offering a wide selection of beverages and cocktails amidst the natural beauty of our outdoor garden.
        </p>
      </div>

      {/* Image */}
      <div className="md:order-first">
        <img
          src={a1} // Replace with your actual image URL
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
</>
  );
};

export default Aboutpage;
