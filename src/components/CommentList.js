import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'
import { loadArticleComments } from '../AC/articles'

class CommentList extends Component {
    static defaultProps = {

    }

    static propTypes = {
        article: PropTypes.object.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    };
    render() {
        return (
            <div>
                {this.getToggler()}
                {this.getList()}
                
            </div>
        )
    }

    componentWillReceiveProps({ isOpen, article }) {
        const tmp = article.getRelation('comments').filter((item) => item === undefined);
        //Почему если  if (isOpen && tmp.length > 0 && !article.commentsLoading) то получаем ошибку 
        //" Invariant Violation: Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch." ?
        if (isOpen && tmp.length > 0 && !article.commentsLoading && this.props.isOpen == false) {
            loadArticleComments({id:article.id})
        }
    }


    getToggler() {
        const { isOpen, toggleOpen } = this.props
        const text = isOpen ? 'hide comments' : 'show comments'
        return <a href = "#" onClick = {toggleOpen}>{text}</a>
    }

    handleAddComment = (ev) => {
        ev.preventDefault()
        ev.stopPropagation()
        const comment = this.refs.addCommentInput.value;
        this.refs.addCommentInput.value = '';
        const id = new Date().getTime();
        addComment(comment, this.props.articleId, id);
        
       
    }

    getList() {
        const { article, isOpen } = this.props
        if (!isOpen) return null
        const comments = article.getRelation('comments')
        if(article.commentsLoading || comments.filter((i)=> i===undefined).length > 0) return <h3>Loading...</h3>
        if (!comments || !comments.length) return <h3>No comments yet</h3>
        const items = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <div>
            <ul>{items}</ul>
            <NewCommentForm articleId={article.id} />
        </div>
    }
}

export default toggleOpen(CommentList)
