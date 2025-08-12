import React from 'react'

import { Helmet } from 'react-helmet'

import './rectangle1.css'

const Rectangle1 = (props) => {
  return (
    <div className="rectangle1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="rectangle1-dummy-container">
        <img
          src="/rectangle113-fw45-400w.png"
          alt="Rectangle113"
          className="rectangle1-rectangle1"
        />
      </div>
    </div>
  )
}

export default Rectangle1
