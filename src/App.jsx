import React from 'react'
import Navbar from './components/Navbar'
// import Footer from './components/footer/Footer';
import Landing from './Landing'
import { Routes, Route } from "react-router-dom";
import Gallery from './pages/Gallery';
import Aboutpage from './components/about/Aboutpage';

function App() {

  return (
  
    <>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/suites" element={<Gallery />} />
    <Route path="/about" element={<Aboutpage />} />
    </Routes>
    {/* <Footer/> */}


    </>
  )
}

export default App
