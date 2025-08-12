import React from 'react'

import { Helmet } from 'react-helmet'

import './rectangle4.css'

const Rectangle4 = (props) => {
  return (
    <div className="rectangle4-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="rectangle4-dummy-container">
        <img
          src="/rectangle4210-3kd-200h.png"
          alt="Rectangle4210"
          className="rectangle4-rectangle4"
        />
      </div>
    </div>
  )
}

export default Rectangle4
