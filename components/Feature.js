import Components from './index'
import SbEditable from 'storyblok-react'
import React from 'react'

export default class extends React.Component {
  resizedIcon(index) {
    if (typeof this.props.content.icon !== 'undefined') {
      return '//img2.storyblok.com/80x80' + this.props.content.icon.replace('//a.storyblok.com', '')
    }
    return null
  }

  render() {
    return (
      <SbEditable content={this.props.content}>
        <div className="feature util__flex-eq">
          <img src={this.resizedIcon()} className="feature__icon" />
          <h2>{this.props.content.name}</h2>
          <div className="feature__description">
            {this.props.content.description}
          </div>
          <style jsx>{`
            .feature {
              text-align: center;
              padding: 30px 10px 100px;
            }

            .feature__icon {
              max-width: 80px;
            }
          `}</style>
        </div>
      </SbEditable>
    )
  }
}
