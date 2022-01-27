import FavoriteToyList from './FavoriteToyList';
import './Cats.css';

export default function Cat({ name, img, age, color, favoriteToy }) {
  return <div className='kitty'>
    <img className='cat-img' src={img} />
    <div className='kitty-info'>
      <p className='kitty-name'>{name}</p>
      <p>age: {age}</p>
      <p>color: {color}</p>
      < FavoriteToyList favoriteToy={favoriteToy} />
    </div>
  </div>;
}

