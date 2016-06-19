import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'

export default (articles = normalizedArticles, action) => {
    const { type, payload, response, error } = action

    switch (type) {
        case DELETE_ARTICLE:  return articles.filter((article) => article.id != payload.id);

        case ADD_COMMENT:
        let arr  = articles.slice();
        //нет, здесь что вы мутируете article
        arr.filter((article)=> article.id == payload.articleId)[0].comments.push(payload.comment.id);
        return arr;
    }
    return articles
}
