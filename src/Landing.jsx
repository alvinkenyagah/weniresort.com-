import React from 'react'
import { HeroSection,Companies,Courses, Achievement,Categories,FeedBack,CTA } from './components'
import MainHeroSection from './components/hero/MainHeroSection'
import PricingSection from './components/pricing/Pricing'
import Footer from './components/footer/Footer'
function Landing() {

  return (
    <div className="app">
        <MainHeroSection/>
        <PricingSection/>
        {/* <HeroSection/>
        <Companies/>
        <Courses/>
        <Achievement/>
        <Categories/>
        <FeedBack/>
        <CTA/> */}
        <Footer/>
    </div>
  )
}

export default Landing
