import React, { Component } from 'react'

export default class Comment extends Component {
  render() {
    const { key, commentText} = this.props
    return (
      <div id={key} className="comment">
        <h1 >{commentText}</h1>
      </div>
    )
  }
}

