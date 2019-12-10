import React, { Component } from 'react'

export class Comment extends Component {
    render() {
        return (
            <div className="comment">
                {console.log(this.props.commentText )}
                { this.props.commentText }
            </div>
        )
    }
}

export default Comment




