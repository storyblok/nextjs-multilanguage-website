import StoryblokClient from 'storyblok-js-client'

class StoryblokService {
  constructor() {
    this.devMode = true // Always loads draft
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

  get(slug, params) {
    params = params || {}

    if (this.getQuery('_storyblok') || this.devMode) {
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

  bridge() {
    return (
      <script src={'//app.storyblok.com/f/storyblok-latest.js?t=' + this.token}></script>
    )
  }
}

const storyblokInstance = new StoryblokService()

export default storyblokInstance