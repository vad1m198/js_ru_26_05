import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE, LOAD_COMMENTS } from '../constants'

export function addComment(articleId, comment) {
    return {
        type: ADD_COMMENT,
        payload: {
            articleId,
            comment: {...comment}
        },
        withRandomId: true
    }
}

export function loadCommentsForArticle(id) {
    return {
        type: LOAD_COMMENTS_FOR_ARTICLE,
        payload: { id },
        callAPI: `/api/comment?article=${id}`
    }
}

export function loadComments(offset) {
    return {
        type: LOAD_COMMENTS,
        payload: { offset },
        callAPI: `/api/comment?limit=5&offset=${offset}`
    }   
}