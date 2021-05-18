import React from 'react'
import Layout from '../components/Layout'
import DynamicComponent from '../components/DynamicComponent'

import Storyblok, { useStoryblok } from "../utils/storyblok"

export default function Page({ story, preview, locale, locales }) {
  const enableBridge = true; // load the storyblok bridge everywhere
  // use the preview variable to enable the bridge only in preview mode
  // const enableBridge = preview;
  story = useStoryblok(story, enableBridge)

  return (
    <Layout locale={locale} locales={locales}>
      <DynamicComponent blok={story.content} />
    </Layout>
  )
}


export async function getStaticProps({ locale, locales, params, preview = false }) {
  let slug = params.slug ? params.slug.join('/') : 'home'

  let sbParams = {
    version: "draft", // or 'draft'
    resolve_relations: ["featured-posts.posts", "selected-posts.posts"],
    language: locale,
  }
 
  if (preview) {
    sbParams.version = "draft"
    sbParams.cv = Date.now()
  }
 
  let { data } = await Storyblok.get(`cdn/stories/${slug}`, sbParams)
 
  return {
    props: {
      story: data ? data.story : false,
      preview,
      locale,
      locales,
    },
    revalidate: 10, 
  }
}

export async function getStaticPaths({ locales }) {  
  let { data } = await Storyblok.get('cdn/links/')

  let paths = []
  Object.keys(data.links).forEach(linkKey => {
      if (data.links[linkKey].is_folder) {
        return
      }

      // get array for slug because of catch all
      const slug = data.links[linkKey].slug
      let splittedSlug = slug.split("/")
      if(slug === 'home') splittedSlug = false

      // create additional languages
      for (const locale of locales) {
        paths.push({ params: { slug: splittedSlug }, locale })
      }
  })

  return {
      paths: paths,
      fallback: false,
  }
}
