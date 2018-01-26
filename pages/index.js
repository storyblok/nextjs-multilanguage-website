import Link from 'next/link'
import Head from '../components/head'
import Nav from '../components/nav'
import StoryblokClient from 'storyblok-js-client'
import React from 'react'

export default class extends React.Component {
  static async getInitialProps({ req }) {
    var Storyblok = new StoryblokClient({
      accessToken: 'qvOwrwasP7686hfwBsTumAtt'
    });

    // Get the content of the current page
    let response = await Storyblok.get('cdn/stories/home', {
      version: 'draft'
    })

    // Get multiple content entries from a folder called "news"
    let stories = await Storyblok.get('cdn/stories', {
      starts_with: 'news',
      version: 'draft'
    })

    return { story: JSON.stringify(response.data) }
  }

  render() {
    return (
      <div>
        Hello World
        {this.props.story}
      </div>
    )
  }
}