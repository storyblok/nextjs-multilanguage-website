import DynamicComponent from './DynamicComponent';
import SbEditable from 'storyblok-react';

const Page = ({ content, language }) => (
  <SbEditable content={content}>
    <main>
      {content.body.map((blok) => (
        <DynamicComponent blok={blok} key={blok._uid} language={language} />
      ))}
    </main>
  </SbEditable>
);

export default Page;
