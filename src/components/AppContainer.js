import React, { Component, PropTypes } from 'react'
import stores  from '../stores'
import ArticleList from './ArticleList'
import ConnectToStores from '../decorators/connectToStores'

class AppContainer extends Component {
    state = {
        articles: stores.articles.getAll()
    }

    render() {
        return <ArticleList articles = {this.state.articles} />
    }

}


export default ConnectToStores(ArticleList, stores, props => ({
  articles: stores.articles.getAll()
}));