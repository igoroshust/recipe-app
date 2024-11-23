import { $api } from './axios';

const getRecipesList = () => {
    return $api.get('recipes/')
}

export { getRecipesList };