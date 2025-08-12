import React from 'react'

import { Helmet } from 'react-helmet'

import './text4.css'

const Text4 = (props) => {
  return (
    <div className="text4-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="text4-dummy-container">
        <span className="text4-text1">
          <span className="text4-text2">
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

export default Text4
