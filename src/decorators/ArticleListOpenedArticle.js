import React, { Component } from 'react'

export default (CustomComponent) => class ArticleListOpenedArticle extends Component {
	constructor(props) {
		super();
		this.state = {
			openedArticle: null
		}
	}

	toggleOpen = id => ev => {
        this.setState({
            openedArticle: this.state.openedArticle == id ? null : id
        })
    }

    render() {
    	return <CustomComponent {...this.props} openedArticle={this.state.openedArticle} toggleOpen={this.toggleOpen} />
    }
}