import './styles/App.css'
import SocialLinks from './media-links';
import React, { useRef, useEffect } from 'react';
import DummySection from './dummy-section';
import logo from './assets/logo.png';

const App = () => {

  const mainContentRef = useRef(null);

  const Sections = [ 'section1', 'section2', 'section3', 'section4', 'section5', 'section6' ];

  const renderNavLink = (section) => {
    const handleClickView = () => {
      const sectionElement = document.getElementById(section);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: "smooth" });
      }
    };

    return (
      <ul key={section}>
        <button onClick={handleClickView}>{section}</button>
      </ul>
    );
  };

  const handleScroll = (event) => {
    if (mainContentRef.current) {
      const scrollDelta = event.deltaY;
      mainContentRef.current.scrollBy({ top: scrollDelta });
    }
  };
  
  useEffect(() => {
    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="container">
      <div className="main-content" ref={mainContentRef}>
        <h1>Welcome to Mashka's Webpage</h1>
        <p>Я художница пук пук</p>

        <div id="section1" className="section">
          <h2>Section 1</h2>
          <DummySection/>
        </div>

        <div id="section2" className="section">
          <h2>Section 2</h2>
          <DummySection/>
        </div>

        <div id="section3" className="section">
          <h2>Section 3</h2>
          <DummySection/>
        </div>

        <div id="section4" className="section">
          <h2>Section 4</h2>
          <DummySection/>
        </div>

        <div id="section5" className="section">
          <h2>Section 5</h2>
          <DummySection/>
        </div>

        <div id="section6" className="section">
          <h2>Section 6</h2>
          <DummySection/>
        </div>
      </div>

      <div className="sidebar">
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
        <h2>Site Navigation</h2>
        <nav>
          {Sections.map(section => renderNavLink(section))}
        </nav>
        <h2>Links</h2>
        <SocialLinks/>
      </div>
    </div>
  )
}

export default App
