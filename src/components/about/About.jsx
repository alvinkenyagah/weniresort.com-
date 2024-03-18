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
              <h2 className="text-3xl font-bold mb-4">About Our Resort</h2>
              <p className="text-gray-600  mb-6 calligraph">
                Welcome to WestNile Resort, where tradition meets modern comfort. Located in Kisumu City, Nyamasaria 200 meters from Butter Toast Bakery off Nairobi road towards Nyamasaria SDA Church.
              </p>
              <p className="text-gray-600  mb-6 calligraph">
                WestNile offers a fully functional conference facility with a capacity of 200 people and an outdoor garden that can carry up to 300 people. 
                A garden bar and recreational garden. We have an accommodation capacity of 40 executive rooms that are self-contained and fully functional.
              </p>
              <p className="text-gray-600  calligraph">
                At WestNile Resort, you are guaranteed 24/7 wifi. For football lovers, our garden sports bar boasts a 65" TV with a fully installed DSTV for all matches. 
                Our conference has fully installed facilities, i.e., projectors, a public address system, and neatly spread seats and tables.
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
