import React from 'react';
import Card from "./components/Card.js";
import About from "./components/About.js";
import Footer from "./components/Footer.js";
import Skills from "./components/Skills.js";

function App() {
  return (
    <div id='app' className = 'py-10 px-3 sm:px-5 bg-gray-100'>
      <Card />
      <About />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
