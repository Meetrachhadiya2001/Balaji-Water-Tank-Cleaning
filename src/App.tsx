import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import SafetyHygiene from './components/SafetyHygiene';
import Process from './components/Process';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="antialiased bg-slate-50 overflow-x-hidden">
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <About />
        <SafetyHygiene />
        <Process />
        <WhyChooseUs />
        <Services />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;