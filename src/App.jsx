import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Entertainment from './components/Entertainment';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primary min-h-screen text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Certificates />
        <Entertainment />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
