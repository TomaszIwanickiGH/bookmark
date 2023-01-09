import React from 'react'
import './Browser.css'

const Browser = (props) => {
  return (
    <div className="browser-container">
      <img src={props.image} alt="image" />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </div>
  )
}

export default Browser
