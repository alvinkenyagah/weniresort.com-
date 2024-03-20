// AboutUsSection.js
import React from 'react';
import './About.css'
import { t1 } from './index'
import { a1 } from '../../pages/index'

const AboutUsSection = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
<section className="py-5 bg-white" id="about">
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
    </>
  );
};

export default AboutUsSection;
