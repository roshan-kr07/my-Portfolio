import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Intro from './components/Intro/Intro'
import Skills from './components/Skills/Skills'
import Works from './components/Works/Works'
import Knowledge from './components/KnowledgeOfLib/Knowledge'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Knowledge/>
      <Contact/>
      <Footer/>
      </div>
  )
}

export default App