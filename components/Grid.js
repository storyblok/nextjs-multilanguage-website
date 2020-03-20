import Component from './index'
import SbEditable from 'storyblok-react'

const Grid = ({blok}) => (
  <SbEditable content={blok}>
    <div className="util__flex">
      {blok.columns.map((blok) =>
        <Component blok={blok} />
      )}
    </div>
  </SbEditable>
)

export default Grid