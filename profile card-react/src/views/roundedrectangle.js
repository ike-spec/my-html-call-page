import React from 'react'

import { Helmet } from 'react-helmet'

import './roundedrectangle.css'

const Roundedrectangle = (props) => {
  return (
    <div className="roundedrectangle-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="roundedrectangle-dummy-container">
        <img
          src="/roundedrectangle28-io75-200h.png"
          alt="Roundedrectangle28"
          className="roundedrectangle-roundedrectangle"
        />
      </div>
    </div>
  )
}

export default Roundedrectangle
