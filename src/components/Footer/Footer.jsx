import React from 'react'
import './Footer.css'

import { images } from '../../constants'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-nav">
        <img src={images.logoBookmarkMobile} alt="logo" />
        <div className="footer-links">
          <ul>
            <li className="footer-link">features</li>
            <li className="footer-link">pricing</li>
            <li className="footer-link">contact</li>
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
