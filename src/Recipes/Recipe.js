import IngredientsList from './IngredientsList';
import './Recipes.css';


export default function Recipe({ title, rating, ingredients }) {
  return <div className='recipe'>
    <p className='recipe-title'>{title}</p>
    <p>{rating}</p>
    <IngredientsList ingredients={ingredients} />
  </div>;
}
