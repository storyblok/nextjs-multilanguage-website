import Layout from '../../../components/Layout';
import StoryblokService from '../../../utils/storyblok-service';
import useStoryblok from '../../../utils/useStorybrok';

function Blog(props) {
  const { stories: initialStory, language } = props;

  const { story: posts } = useStoryblok({ initialStory });

  return (
    <Layout language={language}>
      <main className="container mx-auto">
        <h1 className="text-5xl font-bold font-serif text-primary tracking-wide pt-12">
          All Posts
        </h1>

        <ul>
          {posts.map((post) => {
            const lang = post.lang === 'default' ? '/en' : `/${post.lang}`;
            return (
              <li
                key={post._uid}
                className="max-w-4xl px-10 my-4 py-6 rounded-lg shadow-md bg-white"
              >
                <div className="flex justify-between items-center">
                  <span className="font-light text-gray-600">
                    {`
                    ${new Date(post.created_at).getDay()}.
                    ${new Date(post.created_at).getMonth()}.
                    ${new Date(post.created_at).getFullYear()}`}
                  </span>
                </div>
                <div className="mt-2">
                  <a
                    className="text-2xl text-gray-700 font-bold hover:text-gray-600"
                    href={`${lang}/blog/${post.slug}`}
                  >
                    {post.content.title}
                  </a>
                  <p className="mt-2 text-gray-600">{post.content.intro}</p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <a
                    className="text-blue-600 hover:underline"
                    href={`${lang}/blog/${post.slug}`}
                  >
                    Read more
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </main>
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  let language = params?.language || 'en';
  let insertLanguage = language !== 'en' ? `${language}/` : '';
  let res = await StoryblokService.get(`cdn/stories`, {
    starts_with: `${insertLanguage}blog/`,
  });

  return { props: { stories: res.data.stories, language } };
}

export default Blog;
