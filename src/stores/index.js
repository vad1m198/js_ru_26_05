import Article from './Article'
<<<<<<< HEAD
import CommentStore from './CommentStore'
=======
import Comment from './Comment'
>>>>>>> 6fe41d4f3fd9d72ff65fb871ab499e983ba8d5ef
import BasicStore from './BasicStore'
import {normalizedArticles, normalizedComments} from '../fixtures'

const stores = {}
Object.assign(stores, {
    articles: new Article(stores),
    comments: new Comment(stores, normalizedComments)
})

export default stores
export const articleStore = stores.articles
export const commentStore = stores.comments

window.stores = stores