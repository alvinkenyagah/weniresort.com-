// AboutUsSection.js
import React from 'react';
import './About.css'

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">About Our Resort</h2>
            <p className="text-gray-600 mb-6">
              Welcome to our luxurious resort where comfort meets elegance. Nestled in the heart of
              breathtaking scenery, our resort offers a perfect blend of relaxation and adventure.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you're here for a family vacation, a romantic getaway, or a business retreat,
              our resort caters to every need. Our world-class amenities, impeccable service, and
              stunning surroundings create an unforgettable experience for our guests.
            </p>
            <p className="text-gray-600">
              At our resort, we strive to provide a haven of tranquility where you can escape the
              ordinary and indulge in luxury. Book your stay with us and create beautiful memories
              that last a lifetime.
            </p>
          </div>

          {/* Image */}
          <div className="md:order-first" id="overlay">
            <img
              src="src/assets/about.jpg" // Replace with your actual image URL
              alt="Resort Image"
              className="w-full h-auto rounded-md shadow-md"
              id="background"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
