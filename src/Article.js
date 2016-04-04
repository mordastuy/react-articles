import React, {Component, PropTypes} from 'react';
import { Button, Badge } from 'react-bootstrap/lib';
import CommentList from './CommentList';

class Article extends Component {

    render() {
        const {text, comments} = this.props.article;
        
        return (
            <div>
                <div>
                    <p>{text}</p>
                    <CommentList comments={comments} />
                </div>
            </div>
        );
    }
}

export default Article;
