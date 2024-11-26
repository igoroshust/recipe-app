import React from 'react';
import { useParams } from 'react-router-dom';
import RecipesList from '../RecipesList/RecipesList';
import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';

// import CategoriesWidget from '../CategoriesWidget/CategoriesWidget';
import CategoryList from '../CategoryList/CategoryList';


const Main = () => {

    const { categoryId } = useParams();



    return (
    <>
        <Navbar />
        { !categoryId && <Header /> }
        <div class="container pt-4">
            <div class="row">
               <CategoryList />
                    <RecipesList />
            </div>
        </div>
        </>
    );
}

export default Main;