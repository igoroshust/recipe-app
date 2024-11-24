import React from 'react';
import RecipeCard from '../RecipeCard/RecipeCard';
import CategoriesWidget from '../CategoriesWidget/CategoriesWidget';

const Main = () => {
    return (
        <div class="container">
            <div class="row">
               <CategoriesWidget />
                  <div class="col-lg-8">
                    <RecipeCard />
                </div>
            </div>
        </div>
    );
}

export default Main;