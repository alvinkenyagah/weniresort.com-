import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './gallery.css'
import {a1, a2, a3, a4, a5, c1, c2, c3, c4, r1, r2, r3, r4, r5, r6, r7} from './index'

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


  // Define categories
  const categories = ['Rooms', 'Conference', 'Amenities'];

  // Dummy data for images categorized by room type
  const roomImages = [
    {
      original: r1,
      thumbnail: r1,
      description: 'WestNile visitor stay'
    },
    {
      original: r2,
      thumbnail: r2,
      description: 'Room 2'
    },
    
    {
      original: r3,
      thumbnail: r3,
      description: 'Room 3'
    }
    ,
    {
      original: r4,
      thumbnail: r4,
      description: 'Room 2'
    }
    ,
    {
      original: r5,
      thumbnail: r5,
      description: 'Room 2'
    }
    ,
    {
      original: r6,
      thumbnail: r6,
      description: 'Room 2'
    }
    ,
    {
      original: r7,
      thumbnail: r7,
      description: 'Room 2'
    },

  ];

  const conferenceImages = [
    {
      original: c1,
      thumbnail: c1,
      description: 'Conference Room 1'
    },
    {
      original: c2,
      thumbnail: c2,
      description: 'Conference Room 2'
    },
    {
      original: c3,
      thumbnail: c3,
      description: 'Conference Room 2'
    },
    {
      original: c4,
      thumbnail: c4,
      description: 'Conference Room 2'
    },


  ];

  const amenitiesImages = [
    {
      original: a1,
      thumbnail: a1,
      description: 'Restaurant 1'
    },
    {
      original: a2,
      thumbnail: a2,
      description: 'Restaurant 2'
    },
    {
      original: a3,
      thumbnail: a3,
      description: 'Restaurant 2'
    },
    {
      original: a4,
      thumbnail: a4,
      description: 'Restaurant 2'
    },
    {
      original: a5,
      thumbnail: a5,
      description: 'Restaurant 2'
    },

  ];

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
      default:
        return [];
        
    }
  };

  return (
    <>
    <div>
      <h2 className="text-xl font-bold mt-3 mb-8 text-center">Gallery</h2>
      <div className='flex-item'>
        {/* Display category buttons */}
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
    </>
  );
};

export default Gallery;



// import React, { useState } from 'react';
// import ImageGallery from 'react-image-gallery';
// import 'react-image-gallery/styles/css/image-gallery.css'; // Import the CSS for styling
// import './gallery.css'

// const Gallery = () => {
//   // Define categories
//   const categories = ['Rooms', 'Conference Rooms', 'Restaurant'];

//   // Dummy data for images categorized by room type
//   const roomImages = [
//     {
//       original: 'https://interiordesignexplained.com/images/full-size/05/double-hotel-room-design-1.jpeg',
//       thumbnail: 'https://interiordesignexplained.com/images/full-size/05/double-hotel-room-design-1.jpeg',
//       description: 'Room 1'
//     },
//     {
//       original: 'room2.jpg',
//       thumbnail: 'room2_thumb.jpg',
//       description: 'Room 2'
//     },
//     // Add more room images
//   ];

//   const conferenceRoomImages = [
//     {
//       original: 'https://workspacesolutions.com/blog/wp-content/uploads/2017/09/Conference-Room-Design-1024x682.jpg',
//       thumbnail: 'https://workspacesolutions.com/blog/wp-content/uploads/2017/09/Conference-Room-Design-1024x682.jpg',
//       description: 'Conference Room 1'
//     },
//     {
//       original: 'conference2.jpg',
//       thumbnail: 'conference2_thumb.jpg',
//       description: 'Conference Room 2'
//     },
//     // Add more conference room images
//   ];

//   const restaurantImages = [
//     {
//       original: 'https://static.dezeen.com/uploads/2020/12/barbajean-malta-restaurant-interiors-pink-mizzi-studio_dezeen_sq-1-1233x1233.jpg',
//       thumbnail: 'https://static.dezeen.com/uploads/2020/12/barbajean-malta-restaurant-interiors-pink-mizzi-studio_dezeen_sq-1-1233x1233.jpg',
//       description: 'Restaurant 1'
//     },
//     {
//       original: 'restaurant2.jpg',
//       thumbnail: 'restaurant2_thumb.jpg',
//       description: 'Restaurant 2'
//     },
//     // Add more restaurant images
//   ];

//   // State to manage selected category
//   const [selectedCategory, setSelectedCategory] = useState(categories[0]);

//   // Function to get images based on selected category
//   const getImagesForCategory = () => {
//     switch (selectedCategory) {
//       case 'Rooms':
//         return roomImages;
//       case 'Conference Rooms':
//         return conferenceRoomImages;
//       case 'Restaurant':
//         return restaurantImages;
//       default:
//         return [];
//     }
//   };

//   return (
//     <div>
//       <h2>Gallery</h2>
//       <div>
//         {/* Display category buttons */}
//         {categories.map(category => (
//           <button key={category} onClick={() => setSelectedCategory(category)}>{category}</button>
//         ))}
//       </div>
//       <ImageGallery items={getImagesForCategory()} />
//     </div>
//   );
// };

// export default Gallery;
