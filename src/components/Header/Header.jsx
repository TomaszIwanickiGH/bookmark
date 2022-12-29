import React from 'react'
import './Header.css'
import { images } from '../../constants'

const Header = () => {
  return (
    <div className="header">
      <div className="header-content">
        <h1 className="header-title">A Simple Bookmark Manager</h1>
        <p className="header-description">
          A clean and simple interface to organize your favourite websites. Open
          a new browser tab and see your sites load insantly. Try it for free.
        </p>
        <div className="header-buttons">
          <button className="header-chrome-button">Get it on Chrome</button>
          <button className="header-firefox-button">Get it on Firefox</button>
        </div>
      </div>
      <div className="header-image">
        <img src={images.hero} alt="hero" />
      </div>
    </div>
  )
}

export default Header
