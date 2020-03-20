import React from 'react'
import Layout from '../../../components/layout'
import StoryblokService from '../../../utils/storyblok-service'
import SbEditable from 'storyblok-react'
import marked from 'marked'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pageContent: props.page.data.story.content,
    }
  }

  static async getInitialProps({ asPath, query }) {
    StoryblokService.setQuery(query)

    let [page, settings] = await Promise.all([
      StoryblokService.get(`cdn/stories${asPath}`),
      StoryblokService.get(`cdn/stories/${query.language}/settings`)
    ])

    return {
      page,
      settings
    }
  }

  componentDidMount() {
    StoryblokService.initEditor(this)
  }

  body() {
    let rawMarkup = marked(this.state.pageContent.body)
    return { __html:  rawMarkup}
  }

  render() {
    const settingsContent = this.props.settings.data.story
    const { pageContent } = this.state

    return (
      <Layout settings={settingsContent}>
        <SbEditable content={pageContent}>
          <div className="blog">
            <h1>{pageContent.name}</h1>
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