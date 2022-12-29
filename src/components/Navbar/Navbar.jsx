import React, { useState } from 'react'
import './Navbar.css'
import { images } from '../../constants'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [display, setDisplay] = useState(true)

  const toggle = () => {
    setDisplay(false)
    setToggleMenu(true)
  }

  const toggleBack = () => {
    setDisplay(true)
    setToggleMenu(false)
  }

  return (
    <div className="navbar" id="navbar">
      {display && (
        <div className="navbar-logo">
          <a href="#navbar">
            <img src={images.logoBookmark} alt="logo" />
          </a>
        </div>
      )}
      <div className="navbar-desktop-links">
        <ul className="navbar-links">
          <a href="#features">
            <li className="link">Features</li>
          </a>
          <a href="#pricing">
            <li className="link">Pricing</li>
          </a>
          <a href="#contact">
            <li className="link">Contact</li>
          </a>
        </ul>
        <button className="login-button">Login</button>
      </div>
      {display && (
        <div className="navbar-mobile-menu">
          <img src={images.iconHamburger} alt="hamburger" onClick={toggle} />
        </div>
      )}
      {toggleMenu && (
        <div className="navbar-mobile">
          <div className="navbar-mobile-logo">
            <a href="#navbar">
              <img src={images.logoBookmarkMobile} alt="logo" />
            </a>
            <img
              className="close-menu"
              src={images.iconClose}
              alt="close"
              onClick={toggleBack}
            />
          </div>
          <ul className="navbar-mobile-links">
            <a href="#features" onClick={toggleBack}>
              <li className="mobile-link">Features</li>
            </a>
            <a href="#pricing" onClick={toggleBack}>
              <li className="mobile-link">Pricing</li>
            </a>
            <a href="#contact" onClick={toggleBack}>
              <li className="mobile-link">Contact</li>
            </a>
          </ul>
          <button className="mobile-login-button">Login</button>
          <div className="navbar-mobile-socials">
            <img src={images.iconFacebook} alt="facebook" />
            <img src={images.iconTwitter} alt="twitter" />
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar
