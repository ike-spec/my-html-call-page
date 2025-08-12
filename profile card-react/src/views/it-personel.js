import React from 'react'

import { Helmet } from 'react-helmet'

import './it-personel.css'

const ITPersonel = (props) => {
  return (
    <div className="it-personel-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="it-personel-dummy-container">
        <span className="it-personel-text">IT Personel</span>
      </div>
    </div>
  )
}

export default ITPersonel
