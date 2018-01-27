import Components from './index'
import SbEditable from 'storyblok-react'

export default (props) => (
  <SbEditable content="props.content">
    <div className="util__flex">
      {props.content.columns.map((blok) =>
        Components(blok)
      )}
    </div>
  </SbEditable>
)