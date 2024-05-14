import React, { useRef } from 'react';
import About from './pages/About';
import Skill from './pages/Skill';
import Project from './pages/Project';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Portfolio = () => {
  const parallaxRef = useRef(null);

  const scrollToTop = () => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(0);
    }
  };

  return (
    <div className="min-h-screen w-full bg-sky-200">
      <Parallax ref={parallaxRef} style={{ height: '100vh' }}>
        {/* About Section */}
        <About />

        {/* Skill Section */}
        <Skill />

        {/* Project Section */}
        <Project />

        {/* Floating Circles */}
        <ParallaxLayer offset={0.3} speed={-0.2}>
          <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-white rounded-full opacity-50"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={-0.2}>
          <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-white rounded-full opacity-50"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.9} speed={-0.2}>
          <div className="absolute bottom-1/2 left-1/4 w-48 h-48 bg-white rounded-full opacity-50"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.2} speed={-0.2}>
          <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-white rounded-full opacity-50"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={-0.2}>
          <div className="absolute bottom-1/2 right-1/2 w-44 h-44 bg-white rounded-full opacity-50"></div>
        </ParallaxLayer>

        {/* Scroll to Top Button */}
        <div className="flex justify-end fixed bottom-5 right-5 z-50">
          <button
            className="bg-blue-500 text-white p-4 rounded-full hover:bg-blue-600 transition duration-300"
            onClick={scrollToTop}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </button>
        </div>
      </Parallax>
    </div>
  );
};

export default Portfolio;
