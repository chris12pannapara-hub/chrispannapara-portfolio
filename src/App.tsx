import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Contact from './components/Contact';
import './styles/globals.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Resume />
      <Contact /> 
      <Footer />
    </div>
  );
}

export default App;
