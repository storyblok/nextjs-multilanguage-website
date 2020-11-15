import Page from '../components/Page';
import Layout from '../components/Layout';
import StoryblokService from '../utils/storyblok-service';
import useStoryblok from '../utils/useStorybrok';

function Home(props) {
  const { story: initialStory, language } = props;

  const { story } = useStoryblok({ initialStory });

  return (
    <Layout language={language}>
      <Page content={story.content} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  let language = params?.language || 'en';
  let insertLanguage = language !== 'en' ? `/${language}` : '';
  let res = await StoryblokService.get(`cdn/stories${insertLanguage}/home`, {
    resolve_relations: 'featured-posts.posts',
  });

  return { props: { story: res.data.story, language } };
}

export default Home;
