import SbEditable from 'storyblok-react'

export default (props) => (
  <SbEditable content={props.content}>
    <div className="slide">
      <img src={props.content.image} />
      <style jsx>{`
        .slide img {
          width: 100%;
        }
      `}</style>
    </div>
  </SbEditable>
)