import Page from '../components/Page';
import Layout from '../components/Layout';
import StoryblokService from '../utils/storyblok-service';
import useStoryblok from '../utils/useStorybrok';

function Home(props) {
  const { story: initialStory, language } = props;

  const { story } = useStoryblok({ initialStory });

  return (
    <Layout language={language}>
      <Page content={story.content} language={language} />
    </Layout>
  );
}

export async function getServerSideProps({ defaultLocale, locale }) {
  const language = locale || defaultLocale;
  let insertLanguage = language !== defaultLocale ? `/${language}` : '';
  let res = await StoryblokService.get(`cdn/stories${insertLanguage}/home`, {
    resolve_relations: 'featured-posts.posts'
  });

  return { props: { story: res.data.story, language } };
}

export default Home;
