import React from 'react'
import './App.css'
import Home from './components/Home/Home'
import AboutMe from './components/AboutMe/AboutMe'
import Education from './components/Education/Education'
import Skills from './components/Skills/Skills'
import MyWorks from './components/MyWorks/MyWorks'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Home />
      <AboutMe />
      <Education />
      <Skills/>
      <MyWorks />
      <Footer />
    </>
  );
}

export default App;
