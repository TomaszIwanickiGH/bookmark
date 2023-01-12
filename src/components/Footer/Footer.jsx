import React from 'react'
import './Footer.css'

import { images } from '../../constants'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-nav">
        <a href="#">
          <img src={images.logoBookmarkMobile} alt="logo" />
        </a>
        <div className="footer-links">
          <ul>
            <a href="#features">
              <li className="footer-link">features</li>
            </a>
            <a href="#pricing">
              <li className="footer-link">pricing</li>
            </a>
            <a href="#contact">
              <li className="footer-link">contact</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="footer-socials">
        <img src={images.iconFacebook} alt="facebook" />
        <img src={images.iconTwitter} alt="twitter" />
      </div>
    </div>
  )
}

export default Footer
