import Ingredient from './Ingredient';
import './Recipes.css';

export default function IngredientsList(prop) {
  return <div className='ingredients-list'>
    {prop.ingredients.map((ingredient, i) =>
      <Ingredient key={`${ingredient}-${i}`}
        ingredient={ingredient} />)}
  </div>;
}
