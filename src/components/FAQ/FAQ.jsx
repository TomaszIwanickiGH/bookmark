import React, { useState } from 'react'
import './FAQ.css'

import { images } from '../../constants'

const FAQ = () => {
  const [display, setDisplay] = useState(0)
  return (
    <div className="faq-container">
      <div className="faq-header">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <p className="faq-description">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
      </div>
      <ul className="faq-questions">
        <li className="question-container">
          <div
            className="question"
            onClick={() => (display !== 1 ? setDisplay(1) : setDisplay(0))}
          >
            <p>What is Bookmark?</p>
            <img src={images.iconArrow} alt="arrow" />
          </div>
          {display === 1 ? (
            <div className="question-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              non saepe ratione eos aliquam laboriosam sequi rem, dolore
              aspernatur ex ipsa. Cumque tenetur voluptatum quaerat nihil minus?
              Voluptatem, voluptates quisquam!
            </div>
          ) : (
            <div className="question-desc-flag"></div>
          )}
        </li>
        <li className="question-container">
          <div
            className="question"
            onClick={() => (display !== 2 ? setDisplay(2) : setDisplay(0))}
          >
            <p>How can I request a new browser?</p>
            <img src={images.iconArrow} alt="arrow" />
          </div>
          {display === 2 ? (
            <div className="question-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              non saepe ratione eos aliquam laboriosam sequi rem, dolore
              aspernatur ex ipsa. Cumque tenetur voluptatum quaerat nihil minus?
              Voluptatem, voluptates quisquam!
            </div>
          ) : (
            <div className="question-desc-flag"></div>
          )}
        </li>
        <li className="question-container">
          <div
            className="question"
            onClick={() => (display !== 3 ? setDisplay(3) : setDisplay(0))}
          >
            <p>Is there a mobile app?</p>
            <img src={images.iconArrow} alt="arrow" />
          </div>
          {display === 3 ? (
            <div className="question-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              non saepe ratione eos aliquam laboriosam sequi rem, dolore
              aspernatur ex ipsa. Cumque tenetur voluptatum quaerat nihil minus?
              Voluptatem, voluptates quisquam!
            </div>
          ) : (
            <div className="question-desc-flag"></div>
          )}
        </li>
        <li className="question-container">
          <div
            className="question"
            onClick={() => (display !== 4 ? setDisplay(4) : setDisplay(0))}
          >
            <p>What about other Chromium browsers?</p>
            <img src={images.iconArrow} alt="arrow" />
          </div>
          {display === 4 ? (
            <div className="question-desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              non saepe ratione eos aliquam laboriosam sequi rem, dolore
              aspernatur ex ipsa. Cumque tenetur voluptatum quaerat nihil minus?
              Voluptatem, voluptates quisquam!
            </div>
          ) : (
            <div className="question-desc-flag"></div>
          )}
        </li>
      </ul>
      <div className="faq-button">
        <button>More info</button>
      </div>
    </div>
  )
}

export default FAQ
