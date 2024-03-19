// PricingSection.js
import React from 'react';
import './pricing.css'

const PricingSection = () => {
  return (
    <section className="py-16 bg-gray-100" id='pricing'>
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Our plans</h1>

        
        <div className="pricing-cards-container"> {/* Added a class for the pricing cards container */}
          {/* Pricing Card - Basic */}
          <div className="pricing-card">
            <h3 className="text-lg font-semibold mb-2">Day rest</h3>
            <p className="text-gray-600 mb-4">Perfect for individuals. </p>
            <div className="text-2xl font-bold mb-4">1000 KSH</div>
          </div>

          {/* Pricing Card - Standard */}
          <div className="pricing-card">
            <h3 className="text-lg font-semibold mb-2">Standard rooms</h3>
            <p className="text-gray-600 mb-4">Great individual guests staying overnight.</p>
            <div className="text-2xl font-bold mb-4">1500 KSH</div>
          </div>
          

          {/* Pricing Card - Premium */}
          <div className="pricing-card">
            <h3 className="text-lg font-semibold mb-2">Double Occupancy</h3>
            <p className="text-gray-600 mb-4">Ideal for couples staying overnight.</p>
            <div className="text-2xl font-bold mb-4">2000 KSH</div>
          </div>

          {/* Conference booking */}
          <div className="pricing-card">
            <h3 className="text-lg font-semibold mb-2">Conference Booking</h3>
            <p className="text-gray-600 mb-4">Perfect for holding company meetings.</p>
            <div className="text-2xl font-bold mb-4">Enquire for pricing</div>
          </div>



        </div>
      </div>
    </section>
  );
};

export default PricingSection;
