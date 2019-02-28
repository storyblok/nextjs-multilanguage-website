import React from 'react'
import Components from '../components/index';
import Layout from '../components/layout';
import StoryblokService from '../utils/storyblok-service';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageContent: props.page.data.story.content,
    }
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
    const { settings } = this.props;
    const { pageContent } = this.state;
    return (
      <Layout settings={settings.data.story}>
        {Components(pageContent)}
      </Layout>
    )
  }
}