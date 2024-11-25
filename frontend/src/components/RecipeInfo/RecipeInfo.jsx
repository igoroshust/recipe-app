import React from 'react';
import { useState, useEffect } from 'react';
import { getRecipeInfo } from '../../api/getRecipes';

const RecipeInfo = () => {

    const [recipes, setRecipes] = useState([]);

    const getResult = async () => {
       const res = await getRecipeInfo(3);
       setRecipes([res.data]);
//     const res = await getRecipesList();
//     setRecipes(res.data);
}

    useEffect(() => {
        getResult();
    }, []);

    return (
    <>
         { !!recipes.length && recipes.map((recipe) => (
            <div className="container">
            <div className="row">
            <div className="card mb-4">
            <img src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." height="350"/>
            <div className="card-body">
            <h4 className="card-title">{ recipe.title }</h4>
            <p className="card-text">{ recipe.content }</p>
            <p className="card-text">Ингредиенты: { recipe.ingredients }</p>
            <p className="card-text">Категория: { recipe.category_name }</p>
            <div className="small text-muted">Дата создания: { recipe.time_create }</div>
            </div>
            </div>
            </div>
            </div>
          ))}
     </>
    );
}

export default RecipeInfo;