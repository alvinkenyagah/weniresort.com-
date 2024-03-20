// PricingSection.js
import React from 'react';
import './pricing.css'

const PricingSection = () => {
  return (
<section className="py-16 bg-gray-100" id='pricing'>
  <div className="container mx-auto text-center">
    <h1 className="text-4xl font-bold mb-8 text-blue-900">Our Plans</h1>

    <div className="pricing-cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Added a class for the pricing cards container */}
      {/* Pricing Card - Basic */}
      <div className="pricing-card border border-gray-300 rounded-lg p-6 shadow-md bg-white">
        <h3 className="text-lg font-semibold mb-2 text-blue-900">Day Rest</h3>
        <p className="text-gray-600 mb-4">Perfect for individuals.</p>
        <div className="text-2xl font-bold mb-4 text-green-700">1000 KSH</div>
      </div>

      {/* Pricing Card - Standard */}
      <div className="pricing-card border border-gray-300 rounded-lg p-6 shadow-md bg-white">
        <h3 className="text-lg font-semibold mb-2 text-blue-900">Standard Rooms</h3>
        <p className="text-gray-600 mb-4">Great for individual guests staying overnight.</p>
        <div className="text-2xl font-bold mb-4 text-green-700">1500 KSH</div>
      </div>

      {/* Pricing Card - Premium */}
      <div className="pricing-card border border-gray-300 rounded-lg p-6 shadow-md bg-white">
        <h3 className="text-lg font-semibold mb-2 text-blue-900">Double Occupancy</h3>
        <p className="text-gray-600 mb-4">Ideal for couples staying overnight.</p>
        <div className="text-2xl font-bold mb-4 text-green-700">2000 KSH</div>
      </div>

      {/* Conference Booking */}
      <div className="pricing-card border border-gray-300 rounded-lg p-6 shadow-md bg-white">
        <h3 className="text-lg font-semibold mb-2 text-blue-900">Conference Booking</h3>
        <p className="text-gray-600 mb-4">Perfect for holding company meetings.</p>
        <div className="text-2xl font-bold mb-4 text-red-700">Enquire for pricing</div>
      </div>
    </div>
  </div>
</section>

  );
};

export default PricingSection;
