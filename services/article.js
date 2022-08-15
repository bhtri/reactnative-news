import { api } from '.';

export default ArticleService = {
    getArticleWithCategoryID({
        id = 1,
        ...restParam
    } = {}) {
        return api.call().get(`/categories_news/${id}/articles`,
            {
                params: {
                    id,
                    ...restParam,
                }
            }
        );
    }
}
