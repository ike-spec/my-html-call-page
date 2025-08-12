import React from 'react'

import { Helmet } from 'react-helmet'

import './manny-tech.css'

const MannyTech = (props) => {
  return (
    <div className="manny-tech-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="manny-tech-dummy-container">
        <span className="manny-tech-text">Manny Tech</span>
      </div>
    </div>
  )
}

export default MannyTech
