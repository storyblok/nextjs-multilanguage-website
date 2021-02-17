import React from 'react'
import Layout from "../../../components/Layout";
import StoryblokService from "../../../utils/storyblok-service";

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: props.res.data.stories,
      language: props.language,
    };
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query);

    let language = query.language || "en";
    let insertLanguage = language !== "en" ? `${language}/` : "";
    const res = await StoryblokService.get(`cdn/stories`, {
      starts_with: `${insertLanguage}blog/`,
    });

    return {
      res,
      language,
    };
  }

  componentDidMount() {
    StoryblokService.initEditor(this);
  }

  render() {
    const posts = this.state.stories;

    return (
      <Layout language={this.state.language}>
        <main className="container mx-auto">
          <h1 className="text-5xl font-bold font-serif text-primary tracking-wide pt-12">
            All Posts
          </h1>

          <ul>
            {posts.map((post) => {
              const lang = post.lang === "default" ? "/en" : `/${post.lang}`;
              return (
                <li
                  key={post.slug}
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
}
