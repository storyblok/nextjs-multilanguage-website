import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import StoryblokService from '../utils/storyblok-service'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <script dangerouslySetInnerHTML={{__html: `var StoryblokCacheVersion = '${StoryblokService.getCacheVersion()}';` }}></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}