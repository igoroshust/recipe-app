import { useState, useEffect } from 'react';
import './App.css';
import { getRecipesList } from './api/getRecipes';

function App() {

  const [recipes, setRecipes] = useState([]);

  const getResult = async () => {
      const res = await getRecipesList();
      setRecipes(res.data);
   }

  useEffect(() => {
    getResult();
  }, []);

  return (
    <div className="App">
        { JSON.stringify(recipes) }
    </div>
  );
}

export default App;
