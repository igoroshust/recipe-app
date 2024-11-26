import React from 'react';
import '../../App.css';
import { Link } from 'react-router-dom';
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
            <div className="card mb-4">
            {recipe.image ? (
             <Link to={`/recipes/${recipe.id}`}>
                <img
                    className="card-img-top"
                    src={`${recipe.image}`}
                    alt={recipe.title}
                />
                </Link>
            ) : (
               <Link to={`/recipes/${recipe.id}`}>
               <img className="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." />
                </Link>
            )}
            <div className="card-body">
            <div className="small text-muted">{new Date(recipe.time_create).toLocaleString() }</div>
            <h2 className="card-title"><a href={ recipe.pk }>{ recipe.title }</a></h2>
            <p className="card-text">{ recipe.content.substring(0, 200)}...</p>
            <Link className="btn btn-primary" to={`/recipes/${recipe.id}`}>Читать подробнее →</Link>
            </div>
         </div>
          ))}
     </>
    );
}

export default RecipesList;