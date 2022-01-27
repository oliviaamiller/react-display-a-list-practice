import Recipe from './Recipe';

export default function RecipesList(props) {
  return <div className='recipes-list'>
    {props.recipes.map((recipe, i) =>
      <Recipe key={`${recipe.title}-${i}`}
        {...recipe} />)}
  </div>;
}
