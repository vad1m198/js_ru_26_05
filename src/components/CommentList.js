import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'
import { addComment } from '../AC/articles'

class CommentList extends Component {
    static defaultProps = {

    }

    static propTypes = {
        comments: PropTypes.array,
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

    componentDidMount() {
        console.log('I am mounted')
    }

    componentWillUpdate(nextProps) {
        console.log(this.props.isOpen, ' changes to ', nextProps.isOpen)
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
        //Хорошо, но лучше вынести генерацию id в AC. + я бы передавал сразу article в CommentList, а не отдельно comments и articleId
        const id = new Date().getTime();
        addComment(comment, this.props.articleId, id);
        
       
    }

    getList() {
        const { comments, isOpen } = this.props
        if (!isOpen) return null
        const items = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <div>
                {(!comments || !comments.length) && <h3>No comments yet</h3> }
                { comments.length > 0 && <ul>{items}</ul> }
                <input type="text" ref="addCommentInput"/>
                <button onClick={this.handleAddComment}>Add</button>
               </div>

    }
}

export default toggleOpen(CommentList)
