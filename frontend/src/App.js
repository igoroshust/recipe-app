import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Error404 from './components/404/404';
import RecipeInfo from './components/RecipeInfo/RecipeInfo';

function App() {

  return (
   <Router>
        <div className="App">
                <Routes>
                    <Route path="/" element={ <Main /> } />
                    <Route path="/categories/:categoryId/" element={ <Main /> } />
                    <Route path="/recipes/:id/" element={ <RecipeInfo /> } />
                    <Route path="*" element={ <Error404 /> } />
                </Routes>
            <Footer />
        </div>
    </Router>
  );
}

export default App;

