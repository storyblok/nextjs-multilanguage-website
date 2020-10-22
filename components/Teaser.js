import React from 'react'
import SbEditable from 'storyblok-react'

const Teaser = ({blok}) => {
  return (
    <SbEditable content={blok}>
      <div className="py-10">
        <h2 className="font-serif text-3xl text-center">{blok.headline}</h2>
      </div>
    </SbEditable>
  )
}

export default Teaser
