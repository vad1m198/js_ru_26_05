import { ADD_COMMENT, LOAD_COMMENTS_FOR_ARTICLE,  SUCCESS} from '../constants'
import { normalizedComments } from '../fixtures'
import { fromArray } from '../store/utils'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    entities: {}//fromArray(normalizedComments)
})

export default (state = defaultState, action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
//        case ADD_COMMENT: return comments.concat({...payload.comment, id: randomId})
 case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
 			console.log(LOAD_COMMENTS_FOR_ARTICLE)
 			console.log(response)
            return state
                .set('entities', fromJS(fromArray(response)) )
    }

    return state
}