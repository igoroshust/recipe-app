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
        <h2>Информация о конкретном рецепте</h2>
         { !!recipes.length && recipes.map((recipe) => (
            <a href="#!"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
            <h2 class="card-title"><a href={ recipe.pk }>{ recipe.title }</a></h2>
            <p class="card-text">{ recipe.content }</p>
            <p class="card-text">{ recipe.category_name }</p>
            <div class="small text-muted">{ recipe.time_create }</div>
          ))}
     </>
    );
}

export default RecipesList;