// PricingSection.js
import React from 'react';

const PricingSection = () => {
  return (
    <section className="py-16 bg-gray-100" id='pricing'>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our plans</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0">
          {/* Pricing Card - Basic */}
          <div className="flex-1 max-w-sm mx-4 bg-white p-6 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">Basic Plan</h3>
            <p className="text-gray-600 mb-4">Perfect for individuals</p>
            <div className="text-2xl font-bold mb-4">$9.99</div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
              View
            </button>
          </div>

          {/* Pricing Card - Standard */}
          <div className="flex-1 max-w-sm mx-4 bg-white p-6 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">Standard Plan</h3>
            <p className="text-gray-600 mb-4">Great for small businesses</p>
            <div className="text-2xl font-bold mb-4">$19.99</div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
              View
            </button>
          </div>

          {/* Pricing Card - Premium */}
          <div className="flex-1 max-w-sm mx-4 bg-white p-6 rounded-md shadow-md">
            <h3 className="text-lg font-semibold mb-2">Premium Plan</h3>
            <p className="text-gray-600 mb-4">Ideal for large businesses</p>
            <div className="text-2xl font-bold mb-4">$29.99</div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
              View
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
