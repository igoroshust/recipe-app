import React from 'react';
import '../../App.css';
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getRecipesList } from '../../api/getRecipes';
import { getCategoryInfo } from '../../api/getCategories';

const RecipesList = () => {

    const { categoryId } = useParams();
    console.log(categoryId)

    const [recipes, setRecipes] = useState([]);

    const getResult = async () => {
        if (categoryId) {
            const res = await getCategoryInfo(categoryId);
            setRecipes(res.data.recipes)
        } else {
            const res = await getRecipesList();
            setRecipes(res.data);
        }
}

    useEffect(() => {
        getResult();
    }, []);

    useEffect(() => {
        getResult();
    }, [categoryId]);

    return (
    <>
         { !!recipes.length && recipes.map((recipe) => (
            <div class="col-lg-4">
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
            <div className="small text-muted">{new Date(recipe.time_create).toLocaleString('ru-RU', {
                day: 'numeric',
                month: 'long',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false // Убираем AM/PM
            }).replace(',', '')}</div>
            <h2 className="card-title"><a href={ recipe.pk }>{ recipe.title }</a></h2>
            <p className="card-text">{ recipe.content.substring(0, 140)}...</p>
            <Link className="btn btn-primary" to={`/recipes/${recipe.id}`}>Читать подробнее →</Link>
            </div>
         </div>
         </div>
          ))}
     </>
    );
}

export default RecipesList;