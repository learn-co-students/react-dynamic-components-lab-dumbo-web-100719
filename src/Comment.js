import React, { Component } from 'react'
import BlogPost from './BlogPost'


export class Comment extends Component {
    render() {
        return (
            <div className = "comment">
                {this.props.commentText}
            </div>
        )
    }
}

export default Comment

