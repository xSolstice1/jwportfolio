import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/profile/profile'
import About from './components/about/about'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

const app = () => {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default app