import Component from './index'
import SbEditable from 'storyblok-react'

const Page = ({body}) => (
  <SbEditable content={body}>
    <main>
      {body.map((blok) =>
        <Component blok={blok} key={blok._uid} />
      )}
    </main>
  </SbEditable>
)

export default Page