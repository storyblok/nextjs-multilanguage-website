import StoryblokClient from 'storyblok-js-client'

class StoryblokService {
  constructor() {
    this.devMode = false // Always loads draft
    this.token = 'qvOwrwasP7686hfwBsTumAtt'
    this.client = new StoryblokClient({
      accessToken: this.token,
      cache: {
        clear: 'auto',
        type: 'memory'
      }
    })

    this.query = {}
  }

  getCacheVersion() {
    return this.client.cacheVersion
  }

  get(slug, params) {
    params = params || {}

    if (this.getQuery('_storyblok') || this.devMode) {
      params.version = 'draft'
    }

    if (typeof window !== 'undefined' && typeof window.StoryblokCacheVersion !== 'undefined') {
      params.cv = window.StoryblokCacheVersion
    }

    return this.client.get(slug, params)
  }

  initEditor() {
    if (window.storyblok) {
      window.storyblok.init({initOnlyOnce: true})
      window.storyblok.on('change', () => location.reload(true))
      window.storyblok.on('published', () => location.reload(true))
    }
  }

  setQuery(query) {
    this.query = query
  }

  getQuery(param) {
    return this.query[param]
  }

  bridge() {
    if (!this.getQuery('_storyblok') && !this.devMode) {
      return ''
    }
    return (<script src={'//app.storyblok.com/f/storyblok-latest.js?t=' + this.token}></script>)
  }
}

const storyblokInstance = new StoryblokService()

export default storyblokInstance