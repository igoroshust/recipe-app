import React from 'react';
import RecipesList from '../RecipesList/RecipesList';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';

// import CategoriesWidget from '../CategoriesWidget/CategoriesWidget';
import CategoryList from '../CategoryList/CategoryList';


const Main = () => {
    return (
    <>
        <Navbar />
        <Header />
        <div class="container">
            <div class="row">
               <CategoryList />
                    <RecipesList />
            </div>
        </div>
        </>
    );
}

export default Main;