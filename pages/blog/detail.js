import {Link} from '../../routes'
import Components from '../../components/index'
import Layout from '../../components/Layout'
import StoryblokService from '../../utils/StoryblokService'
import SbEditable from 'storyblok-react'
import marked from 'marked'

export default class extends React.Component {
  static async getInitialProps({ asPath, query }) {
    StoryblokService.setQuery(query)

    return {
      page: await StoryblokService.get(`cdn/stories${asPath}`),
      settings: await StoryblokService.get(`cdn/stories/${query.language}/settings`)
    }
  }

  componentDidMount() {
    StoryblokService.initEditor()
  }

  body() {
    let rawMarkup = marked(this.props.page.data.story.content.body)
    return { __html:  rawMarkup}
  }

  render() {
    return (
      <Layout settings={this.props.settings.data.story}>
        <SbEditable content={this.props.page.data.story.content}>
          <div className="blog">
            <h1>{this.props.page.data.story.content.name}</h1>
            <div dangerouslySetInnerHTML={this.body()} className="blog__body"></div>
          </div>
        </SbEditable>

        <style jsx>{`
          .blog {
            padding: 0 20px;
            max-width: 600px;
            margin: 40px auto 100px;
          }

          .blog :global(img) {
            width: 100%;
            height: auto;
          }

          .blog__body {
            line-height: 1.6;
          }
        `}</style>
      </Layout>
    )
  }
}