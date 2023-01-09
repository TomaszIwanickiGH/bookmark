import React from 'react'
import './Feature.css'

const Feature = (props) => {
  return (
    <div className="feature">
      <div className="feature-image">
        <img src={props.image} alt="" />
      </div>
      <div className="feature-content">
        <h2 className="feature-title">{props.title}</h2>
        <p className="feature-description">{props.description}</p>
        <div className="feature-buttons">
          <button className="feature-button">More Info</button>
        </div>
      </div>
    </div>
  )
}

export default Feature
