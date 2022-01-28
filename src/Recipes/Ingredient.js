import './Recipes.css';

export default function Ingredient(props) {
  return <div className='ingredient'>
    <p>{props.ingredient}</p>
  </div>;
}
