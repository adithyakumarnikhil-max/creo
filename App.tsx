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

const App: React.FC = () => {
  return (
    <div className="bg-brand-light text-brand-dark font-sans overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Projects />
        <Process />
        <Team />
        <FAQ />
        <Marquee />
        <Testimonials />
        <Advantages />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default App;