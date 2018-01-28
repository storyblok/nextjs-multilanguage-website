import {Link} from '../../routes'
import Components from '../../components/index'
import Layout from '../../components/Layout'
import StoryblokService from '../../utils/StoryblokService'

export default class extends React.Component {
  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query)

    return {
      blogPosts: await StoryblokService.get('cdn/stories', {
        starts_with: `${query.language}/blog`
      }),
      settings: await StoryblokService.get(`cdn/stories/${query.language}/settings`)
    }
  }

  componentDidMount() {
    StoryblokService.initEditor()
  }

  render() {
    return (
      <Layout settings={this.props.settings.data.story}>
        {this.props.blogPosts.data.stories.map((blogPost, index) => 
          <div key={index} className="blog__overview">
            <h2>
              <Link route={'/' + blogPost.full_slug}>
                <a className="blog__detail-link">
                  {blogPost.content.name}
                </a>
              </Link>
            </h2>
            <small>
              {blogPost.published_at}
            </small>
            <p>
              {blogPost.content.intro}
            </p>
          </div>
        )}

        <style jsx>{`
          .blog__overview {
            padding: 0 20px;
            max-width: 600px;
            margin: 40px auto 60px;
          }

          .blog__overview p {
            line-height: 1.6;
          }

          .blog__detail-link {
            color: #000;
          }
        `}</style>
      </Layout>
    )
  }
}