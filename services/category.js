import { api } from '.';

export default CategoryService = {
    getCategory() {
        return api.call().get('/categories_news');
    }
}
