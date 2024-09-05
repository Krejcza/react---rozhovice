import React from 'react'
import rozhoviceLogo from '../assets/images/rozhovice-logo.jpg'

const Logo = () => {
  return (
    <div className='logo'>
      <div className="logo-icon">
        <img src={rozhoviceLogo} alt='logo sk rozhovice'></img>
      </div>
    </div>
  )
}

export default Logo


