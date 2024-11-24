import React from 'react';
import { useState, useEffect } from 'react';
import { getRecipesList } from '../../api/getRecipes';

const RecipesList = () => {

    const [recipes, setRecipes] = useState([]);
    const getResult = async () => {
//        const res = await getRecipeInfo(3);
//        setRecipes([res.data]);
    const res = await getRecipesList();
    setRecipes(res.data);
}

    useEffect(() => {
        getResult();
    }, []);

    return (
    <>
         { !!recipes.length && recipes.map((recipe) => (
            <div class="card mb-4">
            <a href="#!"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
            <div class="small text-muted">{ recipe.time_create }</div>
            <h2 class="card-title"><a href={ recipe.pk }>{ recipe.title }</a></h2>
            <p class="card-text">{ recipe.content }</p>
            <a class="btn btn-primary" href="#!">Read more →</a>
         </div>
          ))}
     </>
    );
}

export default RecipesList;