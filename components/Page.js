import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'

const Page = ({blok}) => (
  <SbEditable content={blok}>
    <main>
      {blok.body.map((blok) =>
        <DynamicComponent blok={blok} key={blok._uid} />
      )}
    </main>
  </SbEditable>
)

export default Page
