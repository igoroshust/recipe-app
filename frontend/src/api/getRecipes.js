import { $api } from './axios';

const getRecipesList = () => {
    return $api.get('recipes/')
}

const getRecipeInfo = (recipeId) => {
    return $api.get(`recipes/${recipeId}`)
}

export { getRecipesList, getRecipeInfo };