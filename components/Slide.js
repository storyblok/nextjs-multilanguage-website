import SbEditable from 'storyblok-react'

const Slide = ({blok}) => {
  return (
    <SbEditable content={blok}>
      <div className="slide">
        <img src={blok.image} />
        <style jsx>{`
          .slide img {
            width: 100%;
            max-height: 500px;
          }
        `}</style>
      </div>
    </SbEditable>
  )
}

export default Slide