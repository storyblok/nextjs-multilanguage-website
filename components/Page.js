import DynamicComponent from './DynamicComponent'
import SbEditable from 'storyblok-react'

const Page = ({content}) => (
  <SbEditable content={content}>
    <main className="py-4">
      {content.body.map((blok) =>
        <DynamicComponent blok={blok} key={blok._uid} />
      )}
    </main>
  </SbEditable>
)

export default Page
