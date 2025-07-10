import React from 'react'
import Hero from '../components/hero'
import Services from '../components/services'
import Skills from '../components/skills'
import Portfolio from '../components/Portfolio'
import About from '../components/about'
const home = () => {
  return (
    <div>
      <div id="hero">
  <Hero />
</div>
<div id="services">
  <Services />
</div>
<div id="technologies">
  <Skills />
</div>
<div id="portfolio">
  <Portfolio />
</div>
<div id="about">
  <About/>
</div>
    </div>
  )
}

export default home
