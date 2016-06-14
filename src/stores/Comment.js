import BasicStore from './BasicStore'
import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, START, SUCCESS, FAIL } from '../constants'

export default class CommentStore extends BasicStore {
    constructor(...args) {
        super(...args)
        this._subscribe((action) => {
            const { type, payload, response, error } = action

            switch (type) {
                case ADD_COMMENT:
                    this._add(payload.comment)
                    break

                case LOAD_ARTICLE_COMMENTS + START:
                    this.loading = true
                    break

                case LOAD_ARTICLE_COMMENTS + SUCCESS:
                    response.forEach(this._add)
                    this.loading = false
                    break

                default:
                    return
            }

            this._emitChange()
        })
    }
}
