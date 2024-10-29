import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Header from './components/Header'; // New Header component
import MiniProjects from './components/MiniProjects';
function App() {
  return (
    <div className="App">
      <Header /> {/* Header Component */}
      <Home />
      <About />
      <Skills />
      <Projects />
      <MiniProjects/>
      <Contact />
    </div>
  );
}

export default App;
