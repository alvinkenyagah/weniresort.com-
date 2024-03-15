import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { IoMdPhonePortrait,IoMdMap} from 'react-icons/io';
import './gallery.css'
import { re1, re3, re5, re7, re11, a1, a2, a3, a4, a5, a6, a8, a11, a10, c1, c2, c3, c6,c7, c12, r1, r5, r6, r7, r8, r9, r11 } from './index'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Gallery = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const phoneNumber = '+254 733731300'
  const phoneNumber2 = '+254 791544123'

  // Define categories
  const categories = ['Rooms', 'Conference', 'Amenities', 'Restaurant'];

  // Dummy data for images categorized by room type
  const roomImages = [
    {
      original: r1,
      thumbnail: r1,
      description: 'WestNile visitor stay'
    },
    {
      original: r5,
      thumbnail: r5,
      description: 'WestNile Accomodation rooms lobby'
    },
    
    {
      original: r6,
      thumbnail: r6,
      description: 'WestNile Accomodation rooms lobby'
    }
    ,
    {
      original: r7,
      thumbnail: r7,
      description: 'WestNile double occupancy room'
    }
    ,
    {
      original: r8,
      thumbnail: r8,
      description: 'WestNile Accomodation rooms lobby'
    }
    ,
    {
      original: r9,
      thumbnail: r9,
      description: 'WestNile single occupancy room'
    }
    ,
    {
      original: r11,
      thumbnail: r11,
      description: 'WestNile single occupancy room'
    },

  ];

  const conferenceImages = [
    {
      original: c1,
      thumbnail: c1,
      description: 'WestNile Conference Room'
    },
    {
      original: c2,
      thumbnail: c2,
      description: 'WestNile Conference Room lobby'
    },
    {
      original: c3,
      thumbnail: c3,
      description: 'WestNile Conference Room'
    },
    {
      original: c6,
      thumbnail: c6,
      description: 'WestNile Conference Room'
    },
    {
      original: c12,
      thumbnail: c12,
      description: 'WestNile Conference Room'
    },


  ];

  const amenitiesImages = [
    {
      original: a1,
      thumbnail: a1,
      description: 'WestNile outdoor restaurant space '
    },
    {
      original: a2,
      thumbnail: a2,
      description: ' WestNile Indoor restaurant and bar'
    },
    {
      original: a3,
      thumbnail: a3,
      description: 'WestNile Outdoor space'
    },
    {
      original: a4,
      thumbnail: a4,
      description: 'WestNile outdoor restaurant space'
    },
    {
      original: a5,
      thumbnail: a5,
      description: 'WestNile Outdoor restaurant space'
    },
    {
      original: a6,
      thumbnail: a6,
      description: 'Outdoor veiw of the occupancy rooms'
    },
    {
      original: a8,
      thumbnail: a8,
      description: 'WestNile Outdoor restaurant space night'
    },
    {
      original: a11,
      thumbnail: a11,
      description: 'WestNile Bar shelf'
    },
    {
      original: a10,
      thumbnail: a10,
      description: 'WestNile Bar counter section '
    },


  ];

  const restaurantImages = [

    {
      original: re1,
      thumbnail: re1,
      description: 'WestNile resort indoor restaurant'
    },
    {
      original: re3,
      thumbnail: re3,
      description: 'WestNile resort indoor restaurant'
    },
    {
      original: re5,
      thumbnail: re5,
      description: 'WestNile resort indoor restaurant'
    },
    {
      original: re11,
      thumbnail: re11,
      description: 'WestNile resort indoor restaurant'
    },
    // {
    //   original: re7,
    //   thumbnail: re7,
    //   description: 'WestNile Bar Restaraunt 4 '
    // },


  ]

  // State to manage selected category
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Function to get images based on selected category
  const getImagesForCategory = () => {
    switch (selectedCategory) {
      case 'Rooms':
        return roomImages;
      case 'Conference':
        return conferenceImages;
      case 'Amenities':
        return amenitiesImages ;
      case 'Restaurant':
          return restaurantImages;      
      default:
        return [];
        
    }
  };

  return (
    <>
    <div>
      <h2 className="text-2xl font-bold mt-3 mb-8 text-center">Gallery</h2>
      <div className='flex-item'>

        {categories.map(category => (
          <button key={category} onClick={() => setSelectedCategory(category)} className='category'>{category}</button>
        ))}
      </div>
      <ImageGallery items={getImagesForCategory()} />
    </div>

          {/* FOOTER */}

  <footer className="bg-white text-white py-3 mt-8">


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
  <h2 className="text-black text-2xl font-bold mb-2">Contact Us</h2>
  <p className='text-xl'>For bookings, reservations, and enquiries contact us at</p>  
  <div className='flex items-center text-xl italic'>
    <IoMdPhonePortrait className="text-2xl mr-1" />
    <a href={`tel:${phoneNumber2}`} className='hover:text-blue-800'>{phoneNumber2}</a>
  </div>
  <div className='flex items-center text-xl italic'>
    <IoMdPhonePortrait className="text-2xl mr-1" />
    <a href={`tel:${phoneNumber}`} className='hover:text-blue-800'>{phoneNumber}</a>
  </div>
  <div className='flex items-center text-xl italic'>
    < IoMdMap className="text-2xl mr-1"/>
  <p className='text-xl'>Address: nyamasaria road, Kisumu East</p>
  </div>
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

export default Gallery;

