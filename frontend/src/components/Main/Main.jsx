import React from 'react';
import RecipesList from '../RecipesList/RecipesList';
// import CategoriesWidget from '../CategoriesWidget/CategoriesWidget';
import CategoryList from '../CategoryList/CategoryList';


const Main = () => {
    return (
        <div class="container">
            <div class="row">
               <CategoryList />
                  <div class="col-lg-8">
                    <RecipesList />
                </div>
            </div>
        </div>
    );
}

export default Main;