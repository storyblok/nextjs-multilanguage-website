import React from "react"
import SbEditable from "storyblok-react"
import { render } from "storyblok-rich-text-react-renderer"

const Text = ({ blok }) => {
  return (
    <SbEditable content={blok} key={blok._uid}>
      <div className="bg-white w-full">
        <div className="container mx-auto py-12">
          {render(blok.text)}     
        </div>
      </div>
    </SbEditable>
  )
}

export default Text
