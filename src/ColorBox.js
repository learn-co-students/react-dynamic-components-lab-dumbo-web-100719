import React, { Component } from 'react';

export default class ColorBox extends Component {

  render() {
    const { opacity } = this.props
    const newValue = opacity - 0.1
    console.log('opacity: ', opacity)
    console.log('newValue: ', newValue)
    return opacity >= 0.2 ? (<div className="color-box" style={{ opacity: opacity }}>
      <ColorBox opacity={newValue} />
    </div>) : null 
    
  }

}

