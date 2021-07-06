import React, { useState } from 'react';
import Tabs from './Tabs';
import About from './pages/About';
import Resume from './pages/Resume';
import Projects from './Projects';
import Contact from './pages/Contact';
import Footer from './Footer';

function Navigation () {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch(currentPage) {
      case "Projects":
        return <Projects />;
      case "Resume":
        return <Resume />;
      case "Contact": 
        return <Contact />;
      default: 
        return <About />;
    }
  };

  return (
    <div>
      <Tabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div id="page-content">
        {renderPage(currentPage)}
      </div>
      <Footer />
    </div>
  )
};

export default Navigation;