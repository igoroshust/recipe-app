import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
// import CategoriesWidget from './components/CategoriesWidget/CategoriesWidget';
// import RecipeCard from './components/RecipeCard/RecipeCard';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {

  return (
   <Router>
        <div className="App">
            <Navbar />
            <Header />
                <Routes>
                    <Route path="/" element={ <Main /> } />
                    <Route path="/categories/:id/" element={ <Main /> } />
                </Routes>
            <Footer />
        </div>
    </Router>
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



/* - валидный список рецептов!
     <h2>Список рецептов</h2>
     { !!recipes.length && recipes.map((recipe) => (
        <>
        <h4><a href={ recipe.pk }>{ recipe.title }</a></h4>
        <p>Описание: { recipe.content }</p>
        <p>Ингредиенты: { recipe.ingredients }</p>
        <p>Категория: { recipe.category_name }</p>
        </>
     ))}
*/

/* - получение списка рецептов
    const [recipes, setRecipes] = useState([]);

    const getResult = async () => {
//        const res = await getRecipeInfo(3);
//        setRecipes([res.data]);

      const res = await getRecipesList();
      setRecipes(res.data);

*/

/* - RecipeCard
        <div class="card mb-4">
            <a href="#!"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
                <div class="card-body">
                     <div class="small text-muted">January 1, 2023</div>
                        <h2 class="card-title">Featured Post Title</h2>
                            <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                            <a class="btn btn-primary" href="#!">Read more →</a>
                     </div>
                </div>

*/

