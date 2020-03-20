import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'
import StoryblokService from '../utils/storyblok-service'

export default ({ children, settings = {} }) => (
  <div>
    <Head />
    <Nav settings={settings} />
    <div className="util__container">
      {children}
      {StoryblokService.bridge()}
    </div>

    <style jsx global>{`
      article, aside, footer, header, hgroup, main, nav, section {
        display: block;
      }

      body {
        font-family: 'Zilla Slab', Helvetica, sans-serif;
        line-height: 1;
        font-size: 18px;
        color: #000;
        margin: 0;
        padding: 0;
      }

      .util__flex {
        display: flex;
      }

      .util__flex-col {
        flex: 0 0 auto;
      }

      .util__flex-eq {
        flex: 1;
      }

      .util__container {
        max-width: 75rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: 20px;
        padding-right: 20px;
        box-sizing: border-box;
      }

      #nprogress .bar {
        background: #29d;
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
      }
    `}</style>
  </div>
)