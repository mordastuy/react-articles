import React, { Component } from 'react';

class Comment extends Component {
	render() {
		const { comment } = this.props;
		
		return (
			<div>
                <blockquote>
                    <p>
                        {comment.text}
                    </p>
                    <footer>
                        {comment.author} {comment.date}
                    </footer>
                </blockquote>
            </div>
		);
	}
}

export default Comment;