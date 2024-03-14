import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './HeroSection.css';
import {t4, t5, t7, t8 } from './index'
import { useNavigate } from 'react-router-dom';




const MainHeroSection = () => {

  const carouselImages = [
     t4, t5, t7, t8
  ];

  const navigate = useNavigate();

  // Settings for the react-slick carousel
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>

    <div className="hero-section" id="hero">
      <Slider {...carouselSettings}>
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
      <div className="hero-content">
        <h1 className="catchy-headline">
          Your Dream Stay Awaits at <span>WestNile Resort</span>
        </h1>
        <p className="subheadline">
          Experience luxury and comfort like never before. Visit us today.
        </p>
        <a onClick={() => navigate('/suites')} className="btn-book-now" style={{cursor:'pointer'}}>
          Explore
        </a>
      </div>
    </div>
    </>
  );
};

export default MainHeroSection;
