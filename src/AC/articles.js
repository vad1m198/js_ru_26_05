import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'

export function deleteArticle(id) {
    const action = {
        type: DELETE_ARTICLE,
        payload: { id }
    }

    AppDispatcher.dispatch(action)
}

export function addComment(commentText, articleId, id) {
	const action = {
        type: ADD_COMMENT,
        payload: { commentText, id, articleId }
    }

    AppDispatcher.dispatch(action)	
}