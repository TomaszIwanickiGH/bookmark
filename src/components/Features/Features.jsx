import React, { useState } from 'react'
import './Features.css'

import { data } from '../../constants'

import Feature from './Feature'

const Features = () => {
  const [props, setProps] = useState({
    image: data.features[0].image,
    title: data.features[0].title,
    description: data.features[0].description,
  })

  const [border, setBorder] = useState(1)

  return (
    <div className="features">
      <div className="features-header">
        <h2 className="features-heading">Features</h2>
        <p className="features-description">
          Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      <div className="features-links">
        <ul>
          <li
            style={
              border === 1
                ? { borderBottom: '2px solid var(--color-soft-red)' }
                : {}
            }
            id="features-link1"
            className="features-link"
            onClick={() => {
              setProps({
                image: data.features[0].image,
                title: data.features[0].title,
                description: data.features[0].description,
              })
              setBorder(1)
            }}
          >
            Simple Bookmarking
          </li>
          <li
            style={
              border === 2
                ? { borderBottom: '2px solid var(--color-soft-red)' }
                : {}
            }
            id="features-link2"
            className="features-link"
            onClick={() => {
              setProps({
                image: data.features[1].image,
                title: data.features[1].title,
                description: data.features[1].description,
              })
              setBorder(2)
            }}
          >
            Speedy Searching
          </li>
          <li
            style={
              border === 3
                ? { borderBottom: '2px solid var(--color-soft-red)' }
                : {}
            }
            id="features-link3"
            className="features-link"
            onClick={() => {
              setProps({
                image: data.features[2].image,
                title: data.features[2].title,
                description: data.features[2].description,
              })
              setBorder(3)
            }}
          >
            Easy Sharing
          </li>
        </ul>
      </div>
      <div className="features-feature">
        <Feature
          image={props.image}
          title={props.title}
          description={props.description}
        />
      </div>
    </div>
  )
}

export default Features
