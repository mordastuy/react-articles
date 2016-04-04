import React, { Component } from 'react';
import { Button, Badge } from 'react-bootstrap/lib';
import Comment from './Comment';

class CommentList extends Component {
	state = {
        isCommentShow: false
    }

	render() {
		const { comments } = this.props;

		return (
			<div>
                {this.getCommentButton()}
                {this.getCommentsBox()}
            </div>
		);
	}

	getComments() {
        const { comments } = this.props;

        return this.state.isCommentShow
	        ? comments.map(comment =>
	            <div key={comment.id}>
	                <Comment comment={comment} />
	            </div>
	        )
	        : null;
    }

    getTextCommentButton() {
    	return this.state.isCommentShow
            ? `(click for close)`
            : `(click for open)`;
    }

    getCommentButton() {
    	const { comments } = this.props;

    	return comments.length
            ? (
                <Button onClick={this.toggleComments}>
                    Comments { this.getTextCommentButton() } <Badge>{comments.length}</Badge>
                </Button>
            )
            : null;
    }

    getCommentsBox() {
    	return this.state.isCommentShow
            ? (
                <div>
                    <hr/>
                    {this.getComments()}
                </div>
            )
            : null;
    }

    toggleComments = () => {
        this.setState({
            isCommentShow: !this.state.isCommentShow
        });
    }
}

export default CommentList;
