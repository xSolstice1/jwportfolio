import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/profile/profile'
import About from './components/about/about'
import Portfolio from './components/portfolio/portfolio'

const app = () => {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <About/>
      <Portfolio/>
    </div>
  )
}

export default app