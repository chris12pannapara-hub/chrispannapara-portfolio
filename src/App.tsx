// src/App.tsx - Main app with routing for all sections
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';  // Create this similarly to About
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
import './styles/globals.scss';  // Global styles

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
