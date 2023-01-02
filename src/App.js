import React from 'react'
import Intro from './components/intro';
import './app.scss'
import Skills from './components/skills';
import Portfolio from './components/portfolio';

const App = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <Portfolio />
    </div>
  )
}

export default App;