import Components from '../components/index'
import Layout from '../components/Layout'
import StoryblokService from '../utils/StoryblokService'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {pageContent: props.page.data.story.content}
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query)

    let [page, settings] = await Promise.all([
      StoryblokService.get('cdn/stories/home'),
      StoryblokService.get('cdn/stories/en/settings')
    ])

    return {
      page,
      settings
    }
  }

  componentDidMount() {
    StoryblokService.initEditor(this)
  }

  render() {
    return (
      <Layout settings={this.props.settings.data.story}>
        {Components(this.state.pageContent)}
      </Layout>
    )
  }
}