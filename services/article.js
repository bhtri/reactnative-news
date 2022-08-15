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
    },
    getAllArticleWithCategoryID({
        id = 1,
        limit = 40,
        ...restParam
    } = {}) {
        return api.call().get(`/categories_news/${id}/articles`,
            {
                params: {
                    id,
                    limit,
                    ...restParam,
                }
            }
        );
    },
}
