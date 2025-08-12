import React from 'react'

import { Helmet } from 'react-helmet'

import './text1.css'

const Text1 = (props) => {
  return (
    <div className="text1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="text1-dummy-container">
        <span className="text1-text1">
          <span className="text1-text2">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span className="text1-text4">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span className="text1-text6">
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
        </span>
      </div>
    </div>
  )
}

export default Text1
