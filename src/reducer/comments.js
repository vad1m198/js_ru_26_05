import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants'

export default (comments = normalizedComments, action) => {
    const { type, payload, response, error } = action

     switch (type) {
     	
        case ADD_COMMENT: 
        let arr = comments.slice();
        arr.push(payload.comment)
        return arr;
    }

    return comments
}