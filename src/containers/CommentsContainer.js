import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Comment from '../components/Comment'
import { loadComments } from '../AC/comments'
import { toArray } from '../store/utils'
import { Link } from 'react-router'

class CommentsContainer extends Component {

    render() {

        if(this.props.loading) return <h3>Loading...</h3>
            const { params: { page } } = this.props
            let pageParam = !page ? 1 : +page

        let comments = this.props.comments.map((item) => <li><Comment comment={item}/></li>)
        return (<div>
                    <ul>{ comments }</ul>
                     {pageParam > 1 ? <Link to={`/comments/${pageParam - 1}`}>Prev</Link> : <span>Prev</span>}
                    {'  '}
                    {this.props.comments.toJS().length < 5 ? <span>Next</span> : <Link to={`/comments/${pageParam + 1}`}>Next</Link>}
                </div>)
    }

    componentDidMount() {
        const { params: { page } } = this.props
        page ? this.props.loadComments( (page - 1) * 5 ) : this.props.loadComments(0)
    }

    componentWillReceiveProps(nextProps) {
        const { params: { page } } = nextProps
        if(page != this.props.params.page) {

            page ? this.props.loadComments( (page - 1) * 5 ) : this.props.loadComments(0)
        }
    }

}


export default connect(state => ({
    comments: state.comments.get('entities').valueSeq(),
    loading: state.comments.get('loading'),
}), { loadComments })(CommentsContainer)
