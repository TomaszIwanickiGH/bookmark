import React from 'react'
import './Newsletter.css'

const Newsletter = () => {
  return (
    <div className="newsletter" id="contact">
      <div className="newsletter-info">
        <p>
          <span>35,000+</span> already joined
        </p>
      </div>
      <div className="newsletter-header">
        <h2>
          Stay up-to-date with what
          <br /> we're doing
        </h2>
      </div>
      <div className="newsletter-form">
        <input type="text" placeholder="Enter your email adress" />
        <button>Contact Us</button>
      </div>
    </div>
  )
}

export default Newsletter
