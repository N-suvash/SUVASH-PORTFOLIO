import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#040816] text-slate-100 flex flex-col selection:bg-purple-600 selection:text-white relative overflow-x-hidden">
      
      {/* Global Background Ambient Watermark Photo Layer */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.05] bg-cover bg-center filter saturate-200 contrast-150 mix-blend-screen"
        style={{ backgroundImage: `url('/suvash-photo.jpg')` }}
      />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
