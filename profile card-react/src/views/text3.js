import React from 'react'

import { Helmet } from 'react-helmet'

import './text3.css'

const Text3 = (props) => {
  return (
    <div className="text3-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="text3-dummy-container">
        <span className="text3-text1">
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </div>
    </div>
  )
}

export default Text3
