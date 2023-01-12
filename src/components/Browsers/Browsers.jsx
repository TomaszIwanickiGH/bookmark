import React from 'react'
import './Browsers.css'

import { data, images } from '../../constants'

import Browser from './Browser'

const Browsers = () => {
  return (
    <div className="browsers-container" id="pricing">
      <div className="browsers-header">
        <h2 className="browsers-title">Download the extension</h2>
        <p className="browsers-description">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
      </div>
      <div className="browsers-browsers-types">
        {data.browsers.map((browser) => (
          <div
            className="browsers-browser"
            style={{ marginTop: browser.marg }}
            key={browser.id}
          >
            <Browser
              image={browser.image}
              title={browser.title}
              desc={browser.description}
            />
            <img src={images.bgDots} alt="dots" />
            <button className="browser-button">Add & Install Extension</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Browsers
