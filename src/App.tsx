import React from 'react';
import './App.css';
import NavBar from "./components/Nav";
import Hero from "./components/Hero";
import WhiteSpace from './components/WhiteSpace';
import About from './components/About';
import Artists from './components/Artists';
import JoinClub from './components/JoinClub';
import MauEarning from './components/MauEarning';
import Team from './components/Team';
import FAQ from './components/FAQ/FAQ';
import Footer from './components/Footer';
import RoadMap from './components/RoadMap';
import PromotionVideo from './components/PromotionVideo';
import Provenance from './components/Provenance';

function App() {
  return (    
    <>
      <NavBar />
      <Hero />
      <WhiteSpace />
      <PromotionVideo />
      <About />
      <MauEarning />
      <JoinClub />
      {/* <Artists /> */}
      <RoadMap />
      <Team />
      {/* <Provenance/> */}
      <FAQ />
      <Footer />
    </>
  );
}

export default App;
