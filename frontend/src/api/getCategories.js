import { $api } from './axios';

const getCategoryList = () => {
    return $api.get('categories/')
}

const getCategoryInfo = (categoryId) => {
    return $api.get(`categories/${categoryId}`)
}

export { getCategoryList, getCategoryInfo };