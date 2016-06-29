import React from 'react'
import { Router, Route, browserHistory, hashHistory } from 'react-router'
import AppContainer from './containers/AppContainer'
import Counter from './containers/Counter'
import ArticleList from './containers/ArticleList'
import Article from './containers/Article'
import CommentsContainer from './containers/CommentsContainer'

export default (
    <Router history = {hashHistory}>
        <Route path = "/" component = {AppContainer}>
            <Route path = "counter" component = {Counter} />           
            <Route path = "articles" component = {ArticleList} >
                <Route path = ":id" component = {Article} />
            </Route>
            <Route path = "comments" component = {CommentsContainer} >
                <Route path = ":page" component = {CommentsContainer} />
            </Route>
        </Route>
    </Router>
)