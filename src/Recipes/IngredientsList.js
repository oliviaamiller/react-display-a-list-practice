import Ingredient from './Ingredient';

export default function IngredientsList(prop) {
  return <div className='ingredients-list'>
    {prop.ingredients.map((ingredient, i) =>
      <Ingredient key={`${ingredient}-${i}`}
        ingredient={ingredient} />)}
  </div>;
}
