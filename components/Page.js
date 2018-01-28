import Components from './index'

export default (props) => (
  <div>
    {props.content.body.map((blok) =>
      Components(blok)
    )}
  </div>
)