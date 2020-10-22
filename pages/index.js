import Page from '../components/Page'
import Layout from '../components/Layout'
import StoryblokService from '../utils/storyblok-service'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      story: props.res.data.story
    }
  }

  static async getInitialProps({ query }) {
    StoryblokService.setQuery(query)

    let res = await StoryblokService.get('cdn/stories/home', {})

    return {
      res
    }
  }

  componentDidMount() {
    StoryblokService.initEditor(this)
  }

  render() {
    const contentOfStory = this.state.story.content

    return (
      <Layout>
        <Page content={contentOfStory} />
      </Layout>
    )
  }
}
