import StoryblokClient from 'storyblok-js-client'

class StoryblokService {
  constructor() {
    this.client = new StoryblokClient({
      accessToken: 'qvOwrwasP7686hfwBsTumAtt',
      cache: {
        clear: 'auto',
        type: 'memory'
      }
    })

    this.query = {}
  }

  get(slug, params) {
    params = params || {}

    if (this.getQuery('_storyblok')) {
      params.version = 'draft'
    }

    return this.client.get(slug, params)
  }

  initEditor() {
    window.storyblok.init({initOnlyOnce: true})
    window.storyblok.on('change', () => location.reload(true))
    window.storyblok.on('published', () => location.reload(true))
  }

  setQuery(query) {
    this.query = query
  }

  getQuery(param) {
    return this.query[param]
  }
}

const storyblokInstance = new StoryblokService()

export default storyblokInstance