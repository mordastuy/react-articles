import React, { Component, PropTypes } from 'react'
import { Panel, Accordion } from 'react-bootstrap/lib'
import Article from './Article'


class ArticleList extends Component {
    render() {
        return (
            <Accordion>
                {this.getList()}
            </Accordion>
        );
    }

    getList() {
        return this.props.articles.map(article => 
            <Panel header={article.title} eventKey={article.id} key={article.id} bsStyle="info">
                <Article article={article} />
            </Panel>
        );
    }
}

export default ArticleList