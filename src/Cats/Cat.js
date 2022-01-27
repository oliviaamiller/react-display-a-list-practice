import FavoriteToyList from './FavoriteToyList';

export default function Cat({ name, img, age, color, favoriteToy }) {
  return <div className='cat'>
    <p>{name}</p>
    <img className='cat-img' src={img} />
    <p>age: {age}</p>
    <p>color: {color}</p>
    < FavoriteToyList favoriteToy={favoriteToy} />
  </div>;
}

