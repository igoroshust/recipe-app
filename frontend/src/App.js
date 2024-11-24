import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import { getRecipesList, getRecipeInfo } from './api/getRecipes';

function App() {

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
    <div className="App">
        <Navbar />
        <Header />
     <h2>Список рецептов</h2>
     { !!recipes.length && recipes.map((recipe) => (
        <>
        <h4><a href={ recipe.pk }>{ recipe.title }</a></h4>
        <p>Описание: { recipe.content }</p>
        <p>Ингредиенты: { recipe.ingredients }</p>
        <p>Категория: { recipe.category_name }</p>
        </>
     ))}
    </div>
  );
}

export default App;

/*
<h1>Список рецептов</h1>
{% if recipes %}
{% for rec in recipes %}
<h3><a href="{{ rec.pk }}">{{ rec.title }}</a></h3>
<p>Описание: {{ rec.content }}</p>
<p>Ингредиенты: {{ rec.ingredients }}</p>
<p>Категория: {{ rec.category }}</p>
{% if not forloop.last %}
<hr />
{% endif %}
{% endfor %}
{% endif %}
*/

//         { JSON.stringify(recipes) }