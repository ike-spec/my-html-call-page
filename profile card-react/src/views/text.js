import React from 'react'

import { Helmet } from 'react-helmet'

import './text.css'

const Text = (props) => {
  return (
    <div className="text-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="text-dummy-container">
        <span className="text-text10">
          <span className="text-text11">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="text-text12">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span className="text-text14">
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span className="text-text16">
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

export default Text
