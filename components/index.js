import React from 'react'
import NotFound from './NotFound'
import Teaser from './Teaser'
import Feature from './Feature'
import Slide from './Slide'
import Grid from './Grid'

const Components = {
  'teaser': Teaser,
  'feature': Feature,
  'slide': Slide,
  'grid': Grid
}

export default (blok) => {
  if (typeof Components[blok.component] !== 'undefined') {
    return React.createElement(Components[blok.component], {key: blok._uid, content: blok})
  }
  return React.createElement(NotFound, {key: blok._uid, content: blok})
}
