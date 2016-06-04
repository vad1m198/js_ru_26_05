import React, { PropTypes, Component } from 'react'
import Article from './Article'
import ArticleListOpenedArticle from '../decorators/ArticleListOpenedArticle'

class ArticleList extends Component {

    render() {
        const { articles, toggleOpen, openedArticle } = this.props

        const articleItems = articles.map((article) => <li key={article.id}>
            <Article article = {article}
                     isOpen = {article.id === openedArticle}
                openArticle = {toggleOpen(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }

}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired
}

export default ArticleListOpenedArticle(ArticleList)