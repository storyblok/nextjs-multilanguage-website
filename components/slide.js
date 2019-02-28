import React from 'react'
import SbEditable from 'storyblok-react'

export default ({ content }) => (
  <SbEditable content={content}>
    <div className="slide">
      <img src={content.image} />
      <style jsx>{`
        .slide img {
          width: 100%;
          max-height: 500px;
        }
      `}</style>
    </div>
  </SbEditable>
)