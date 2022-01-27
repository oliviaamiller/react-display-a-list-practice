import './App.css';
import { candies } from './Candies/candies-data';
import CandyList from './Candies/CandyList';
import { sweaters } from './Sweaters/sweater-data';
import SweaterList from './Sweaters/SweaterList';
import { cats } from './Cats/cats-data';
import CatsList from './Cats/CatsList';
import { recipes } from './Recipes/recipe-data';
import RecipesList from './Recipes/RecipesList';
// import your arrays here

function App() {
  return (
    <div className="App">
        Render all your lists here. Pass the arrays as props.
      <CandyList candies={candies} />
      <SweaterList sweaters={sweaters} />
      <CatsList cats={cats} />
      <RecipesList recipes={recipes} />
    </div>
  );
}

export default App;
