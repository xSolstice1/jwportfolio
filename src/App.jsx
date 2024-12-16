import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/profile/profile'
import About from './components/about/about'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'

const app = () => {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
  )
}

export default app