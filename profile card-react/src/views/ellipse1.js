import React from 'react'

import { Helmet } from 'react-helmet'

import './ellipse1.css'

const Ellipse1 = (props) => {
  return (
    <div className="ellipse1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="ellipse1-dummy-container">
        <img
          src="/ellipse114-fp2i-300w.png"
          alt="Ellipse114"
          className="ellipse1-ellipse1"
        />
      </div>
    </div>
  )
}

export default Ellipse1
