import React from 'react'
import { render } from 'react-dom'
import ArticleList from './ArticleList'
import { articles } from './fixtures'

const App = (
    <div className="container">
        <div className="jumbotron">
            <h1>Articles</h1>
        </div>

        <ArticleList articles = {articles} />
    </div>
);

render(
    App,
    document.getElementById('container')
);