import { ADD_COMMENT } from '../constants'
export function addComment(articleId, comment) {
    return {
        type: ADD_COMMENT,
        payload: { articleId, comment: {id: new Date().getTime(), text:comment.text, user:comment.user} }
    }
}