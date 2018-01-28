import Components from '../components/index'
import Layout from '../components/Layout'
import StoryblokService from '../utils/StoryblokService'

export default class extends React.Component {
  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query)

    return {
      page: await StoryblokService.get('cdn/stories/home'),
      settings: await StoryblokService.get('cdn/stories/en/settings')
    }
  }

  componentDidMount() {
    StoryblokService.initEditor()
  }

  render() {
    return (
      <Layout settings={this.props.settings.data.story}>
        {Components(this.props.page.data.story.content)}
      </Layout>
    )
  }
}