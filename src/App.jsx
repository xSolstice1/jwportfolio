import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/profile/profile'
import About from './components/about/about'
import Portfolio from './components/portfolio/portfolio'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'
import BackToTopButton from './components/backtotop'

const app = () => {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <BackToTopButton/>
    </div>
  )
}

export default app