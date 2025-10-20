import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Projects from './components/Projects';
import Process from './components/Process';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Marquee from './components/Marquee';
import Testimonials from './components/Testimonials';
import Advantages from './components/Advantages';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import AnimateOnScroll from './components/AnimateOnScroll';

const App: React.FC = () => {
  return (
    <div className="bg-brand-light text-brand-dark font-sans overflow-x-hidden">
      <Header />
      <main>
        {/* Hero is above the fold, no entry animation needed. Section ID added inside the component. */}
        <Hero id="home" /> 
        <AnimateOnScroll><Stats /></AnimateOnScroll>
        {/* For nav items, ID is on the AnimateOnScroll wrapper */}
        <AnimateOnScroll id="projects"><Projects /></AnimateOnScroll>
        <AnimateOnScroll><Process /></AnimateOnScroll>
        <AnimateOnScroll id="team"><Team /></AnimateOnScroll>
        <AnimateOnScroll><FAQ /></AnimateOnScroll>
        <AnimateOnScroll><Marquee /></AnimateOnScroll>
        <AnimateOnScroll><Testimonials /></AnimateOnScroll>
        <AnimateOnScroll><Advantages /></AnimateOnScroll>
        <AnimateOnScroll><CallToAction /></AnimateOnScroll>
      </main>
      {/* Footer has custom animation, no AnimateOnScroll wrapper. ID passed as prop. */}
      <Footer id="contact" />
    </div>
  );
};

export default App;