import React from 'react'

import { Helmet } from 'react-helmet'

import './text2.css'

const Text2 = (props) => {
  return (
    <div className="text2-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="text2-dummy-container">
        <span className="text2-text1">
          <span className="text2-text2">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span className="text2-text4">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span className="text2-text6">
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

export default Text2
