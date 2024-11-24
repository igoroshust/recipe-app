import { $api } from './axios';

const getCategoryList = () => {
    return $api.get('categories/')
}

const getCategoryInfo = (categoryID) => {
    return $api.get(`categories/${categoryID}`)
}

export { getCategoryList, getCategoryInfo };