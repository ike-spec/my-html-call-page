import React from 'react'

import { Helmet } from 'react-helmet'

import './text5.css'

const Text5 = (props) => {
  return (
    <div className="text5-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="text5-dummy-container">
        <span className="text5-text1">
          <span className="text5-text2">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
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

export default Text5
