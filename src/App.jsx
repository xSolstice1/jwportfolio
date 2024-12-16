import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/profile/profile'
import About from './components/about/about'

const app = () => {
  return (
    <div>
      <Navbar/>
      <Profile/>
      <About/>
    </div>
  )
}

export default app