import React from 'react'
import Layout from '../../../components/Layout'
import BlogPost from '../../../components/BlogPost'
import StoryblokService from '../../../utils/storyblok-service'

export default class extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          story: props.res.data.story,
          language: props.language,
        }
      }
    
      static async getInitialProps({ asPath, query }) {
        StoryblokService.setQuery(query)
    
        let language = query.language || "en"
        let res = await StoryblokService.get(`cdn/stories${asPath}`)
    
        return {
          res,
          language
        }
      }
    

  componentDidMount() {
    StoryblokService.initEditor(this)
  }

  render() {
    const contentOfStory = this.state.story.content

    return (
      <Layout language={this.state.language}>
        <BlogPost blok={contentOfStory} />
      </Layout>
    )
  }
}