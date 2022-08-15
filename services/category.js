import { api } from '.';

export default CategoryService = {
    getCategory({
        limit = 10,
        offset = 0,
        ...restParam
    } = {}) {
        return api.call().get('/categories_news',
            {
                params: {
                    limit,
                    offset,
                    ...restParam,
                }
            }
        );
    }
}
