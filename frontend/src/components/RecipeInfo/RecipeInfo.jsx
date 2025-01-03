import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { getRecipeInfo } from '../../api/getRecipes';

const RecipeInfo = () => {

    const { id } = useParams(); // Извлечение параметра ID из URL
    const [recipes, setRecipes] = useState([]);

    const getResult = async () => {
       const res = await getRecipeInfo(id);
       setRecipes([res.data]);
}

    useEffect(() => {
        getResult();
    }, [id]);

    return (
    <>
        <Navbar />
        <br />
         { !!recipes.length && recipes.map((recipe) => (
            <div className="container">
            <div className="con">
            <h3>Информация о рецепте "{ recipe.title }"</h3><br />
            <div className="col-lg-6">
            <div className="card mb-4">
            {recipe.image ? (
                <img
                    className="card-img-top"
                    src={`${recipe.image}`}
                    alt={recipe.title}
                />
            ) : (
               <img className="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." />
            )}
            <div className="card-body">
            <h5 className="card-title">Способ приготовления</h5>
            <p className="card-text formatted-text">{ recipe.content }</p>
            <p className="card-text formatted-text"><i>Ингредиенты:</i><br />{ recipe.ingredients }</p>
            <p className="card-text">Категория: { recipe.category_name.toLowerCase() }</p>
            <div className="small text-muted">Дата создания: {new Date(recipe.time_create).toLocaleString('ru-RU', {
                day: 'numeric',
                month: 'long',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false // Убираем AM/PM
            }).replace(',', '')}</div>
            </div>
            </div>
            </div>
            </div>
            </div>
          ))}
     </>
    );
}

export default RecipeInfo;