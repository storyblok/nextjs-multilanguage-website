import StoryblokClient from 'storyblok-js-client'
import crypto from 'crypto'

class StoryblokService {
  constructor() {
    // this.devMode = true // Always loads draft
    this.editMode = false
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

    if (this.isEditMode()) {
      params.version = 'draft'
    }

    return this.client.get(slug, params)
  }

  isEditMode() {
    let toValidate = crypto.createHash('sha1').update(this.getQuery('_storyblok_tk[space_id]') + ':' + this.token + ':' + this.getQuery('_storyblok_tk[timestamp]')).digest('hex')
    if( this.getQuery('_storyblok_tk[token]') == toValidate 
        && this.getQuery('_storyblok_tk[timestamp]') > new Date() - 3600) {
      this.editMode = true
    }
  }

  initEditor() {
    if (this.isEditMode()) {
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
    if (this.isEditMode()) {
      return ( <script src={'//app.storyblok.com/f/storyblok-latest.js?t=' + this.token}></script> )
    }
    return ''
  }
}

const storyblokInstance = new StoryblokService()

export default storyblokInstance
